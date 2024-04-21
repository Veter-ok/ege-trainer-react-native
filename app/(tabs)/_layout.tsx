import { Tabs } from "expo-router"
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { backgroundColor_2 } from "../../styles/colors";

const TabsLayout = () => {
    return (
            <Tabs  screenOptions={{
                tabBarStyle: {
                    backgroundColor: backgroundColor_2
                }
            }}
            >
                <Tabs.Screen name="index" options={{
                    headerShown: false, 
                    title: "Курсы",
                    tabBarIcon: ({color}) => <MaterialIcons name="school" size={24} color="white" />
                }}/>
                <Tabs.Screen name="account" options={{
                    headerShown: false, 
                    title: "Профиль",
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-outline" size={24} color="white" />
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