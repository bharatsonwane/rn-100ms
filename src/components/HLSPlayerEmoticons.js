import {useSelector} from 'react-redux';
import {useHMSHLSPlayerCue} from '@100mslive/react-native-hms';

import Toast from 'react-native-simple-toast';

export const HLSPlayerEmoticons = () => {
  const hmsInstance = useSelector(state => state.ms100.hmsInstance);

  useHMSHLSPlayerCue(cue => {
    if (!hmsInstance) {
      return;
    }

    const payloadStr = cue.payloadval;

    if (typeof payloadStr === 'string') {
      try {
        const emoticonMessage = JSON.parse(payloadStr);
        if (emoticonMessage.type === 'EMOJI_REACTION') {
          const peer = hmsInstance.getPeerFromPeerId(emoticonMessage.senderId);
          Toast.showWithGravity(
            `${peer?.name} ${getEmojiByString(emoticonMessage.emojiId)}`,
            Toast.LONG,
            Toast.TOP,
          );
        }
      } catch (error) {
        const message = `HLS Cue Payload is not JSON: ${error}`;
        console.warn(message);
        Toast.showWithGravity(message, Toast.LONG, Toast.TOP);
      }
    }
  }, []);

  return null;
};

const emojiMap = {
  '+1': '👍',
  '-1': '👎',
  wave: '👋',
  clap: '👏',
  fire: '🔥',
  tada: '🎉',
  heart_eyes: '😍',
  joy: '😂',
  open_mouth: '😮',
  sob: '😭',
};

const getEmojiByString = emojiCode => emojiMap[emojiCode] || '👍';
