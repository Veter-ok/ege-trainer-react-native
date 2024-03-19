import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CoursesStackNavigator from './routes/CoursesStackNavigator';
import SettingsStackNavigator from './routes/SettingsStackNavigation';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Курсы" component={CoursesStackNavigator}/>
        <Tab.Screen name="Настройки" component={SettingsStackNavigator}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
