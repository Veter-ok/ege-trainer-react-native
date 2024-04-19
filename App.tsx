import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CoursesStackNavigator from './routes/CoursesStackNavigator';
import SettingsStackNavigator from './routes/SettingsStackNavigation';
import { backgroundColor_2 } from './styles/colors';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarColor: backgroundColor_2}}>
          <Tab.Screen name="Courses" component={CoursesStackNavigator}/>
          <Tab.Screen name="Settings" component={SettingsStackNavigator}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

// const RootNavigation = () => {
//   return (

//   )
// }
