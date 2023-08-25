// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/Home";
import NotiftdsScreen from "./screens/Notiftds";
import NotifsuhuScreen from "./screens/Notifsuhu";
// import NotifkekeruhanScreen from "./screens/Notifkekeruhan";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Notiftds" component={NotiftdsScreen} />
                <Stack.Screen name="Notifsuhu" component={NotifsuhuScreen} />
         
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default App;