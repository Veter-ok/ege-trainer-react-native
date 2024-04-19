import { Tabs } from "expo-router"


const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{headerShown: false}}/>
            <Tabs.Screen name="settings" options={{headerShown: false}}/>
        </Tabs>
    )
}

export default TabsLayout