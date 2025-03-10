import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../presentation/screens/home/HomeScreen';
import {ProductsScreen} from '../presentation/screens/products/ProductsScreen';
import {SettingsScreen} from '../presentation/screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
