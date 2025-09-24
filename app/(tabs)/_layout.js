import { Tabs } from "expo-router";

export default function TabLayout() {
    return(
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen name="map" options={{title: "Map Page"}}/>
            <Tabs.Screen name="profile" options={{title: "Profile Page"}}/>
        </Tabs>
    );
}