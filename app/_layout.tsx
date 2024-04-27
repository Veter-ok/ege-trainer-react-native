import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            <Stack.Screen name="rus/task4" options={{headerShown: false}}/>
            <Stack.Screen name="rus/task9" options={{headerShown: false}}/>
            <Stack.Screen name="rus/task10" options={{headerShown: false}}/>
        </Stack>
    )
}

export default RootLayout