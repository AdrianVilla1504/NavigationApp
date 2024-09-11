import {View, Text, FlatList} from 'react-native';
import {globalStyles} from '../../../theme/theme';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
];

interface product {
  id: number;
  name: string;
}

export const ProductsScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton onPress={() => {}} label={item.name} />
        )}
      />
    </View>
  );
};
