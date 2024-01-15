import { useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {
  HMSTrackSource,
  HMSUpdateListenerActions
} from "@100mslive/react-native-hms"

import { setRTCStats } from "../redux/actions"

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get("screen")
  return dim.height >= dim.width
}

/**
 * A React Hook which updates when the orientation changes
 * @returns whether the user is in 'PORTRAIT' or 'LANDSCAPE'
 */
export const useOrientation = () => {
  // State to hold the connection status
  const [orientation, setOrientation] = useState(
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  )

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE")

    Dimensions.addEventListener("change", callback)

    return () => {
      Dimensions.removeEventListener("change", callback)
    }
  }, [])

  return orientation
}

export const useRTCStatsListeners = force => {
  const dispatch = useDispatch()
  const hmsInstance = useSelector(state => state.user.hmsInstance)
  const showStatsOnTiles = useSelector(state => state.app.joinConfig.showStats)

  const addListeners = Boolean(showStatsOnTiles || force)

  useEffect(() => {
    if (hmsInstance && addListeners) {
      hmsInstance.addEventListener(
        HMSUpdateListenerActions.ON_LOCAL_AUDIO_STATS,
        data => {
          const audioStatId =
            data.track.source && data.track.source !== HMSTrackSource.REGULAR
              ? data.peer.peerID + data.track.source
              : data.peer.peerID

          // Saving Audio Track Stats by "peerId" plus "track source" if source is not regular
          dispatch(setRTCStats(audioStatId, data.localAudioStats))
        }
      )

      hmsInstance.addEventListener(
        HMSUpdateListenerActions.ON_LOCAL_VIDEO_STATS,
        data => {
          dispatch(setRTCStats(data.track.trackId, data.localVideoStats))
        }
      )

      hmsInstance.addEventListener(
        HMSUpdateListenerActions.ON_REMOTE_AUDIO_STATS,
        data => {
          const audioStatId =
            data.track.source && data.track.source !== HMSTrackSource.REGULAR
              ? data.peer.peerID + data.track.source
              : data.peer.peerID

          // Saving Audio Track Stats by "peerId" plus "track source" if source is not regular
          dispatch(setRTCStats(audioStatId, data.remoteAudioStats))
        }
      )

      hmsInstance.addEventListener(
        HMSUpdateListenerActions.ON_REMOTE_VIDEO_STATS,
        data => {
          dispatch(setRTCStats(data.track.trackId, data.remoteVideoStats))
        }
      )

      return () => {
        hmsInstance.removeEventListener(
          HMSUpdateListenerActions.ON_LOCAL_AUDIO_STATS
        )
        hmsInstance.removeEventListener(
          HMSUpdateListenerActions.ON_LOCAL_VIDEO_STATS
        )
        hmsInstance.removeEventListener(
          HMSUpdateListenerActions.ON_REMOTE_AUDIO_STATS
        )
        hmsInstance.removeEventListener(
          HMSUpdateListenerActions.ON_REMOTE_VIDEO_STATS
        )
      }
    }
  }, [hmsInstance, addListeners])
}
