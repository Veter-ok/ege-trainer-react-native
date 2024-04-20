import { Tabs } from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const TabsLayout = () => {
    return (
            <Tabs>
                <Tabs.Screen name="index" options={{
                    headerShown: false, 
                    title: "Курсы"
                }}/>
                <Tabs.Screen name="setting" options={{
                    headerShown: false,
                    title: "Настройки",
                    tabBarIcon: ({color}) => <Ionicons name="settings-sharp" size={24} color="white" />
                }}/>
            </Tabs>
    )
}

export default TabsLayout