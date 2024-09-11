import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import {Pressable, Text} from 'react-native';
interface PropsPrimaryButton {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({label, onPress}: PropsPrimaryButton) => {
  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};