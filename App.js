import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PrevitionsScreen from './screens/PrevitionsScreen';
import ProvincesScreen from './screens/ProvincesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Previtions" options={{title: 'Previsiones'}} component={PrevitionsScreen} />
        <Tab.Screen name="Provinces" options={{title: 'Provincias'}} component={ProvincesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

