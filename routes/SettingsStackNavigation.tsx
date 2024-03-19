import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsPage from "../pages/Settings";

const Stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Настройки" component={SettingsPage}/>
        </Stack.Navigator>
    )
}

export default SettingsStackNavigator