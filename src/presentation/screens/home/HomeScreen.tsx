import {View, Text, Pressable} from 'react-native';

export const HomeScreen = () => {
  console.log('props => ', props);
  return (
    <View>
      <Pressable>
        <Text>HomeScreen</Text>
      </Pressable>
    </View>
  );
};
