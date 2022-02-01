import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PrevitionsScreen from './screens/PrevitionsScreen';
import CitiesScreen from './screens/CitiesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cities" options={{title: 'Ciudades'}} component={CitiesScreen} />
        <Tab.Screen name="Previtions" options={{title: 'Previsiones'}} component={PrevitionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

