import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../../../routes/StackNavigator';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  console.log('**********************************');
  console.log(params);
  console.log('**********************************');
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
