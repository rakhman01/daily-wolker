import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/login_register/Login';
import SelectRoles from '../screens/SelectRoles';
import Register from '../screens/login_register/Register';
import WorkerDrawerNavigator from './WorkerDrawerNavigator';
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import DetailTask from '../screens/worker/DetailTask';



const RootNavigator = () => {
    const Stack: any = createNativeStackNavigator();
    let role = true

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SelectRoles' component={SelectRoles} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
                {/* Worker Navigator */}
                <Stack.Screen options={{ headerShown: false }} name='WorkerStackScreen' component={WorkerDrawerNavigator} />
                <Stack.Screen options={{ headerShown: false }} name="WorkerDetailTask" component={DetailTask} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator