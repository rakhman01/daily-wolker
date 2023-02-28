import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/worker/Dashboard';
import AcceptTask from '../screens/worker/AcceptTask';
import Payment from '../screens/worker/Payment';
import BankAccount from '../screens/worker/BankAccount';
import Header from '../components/Header';


const Drawer = createDrawerNavigator<any>();

const WorkerDrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator initialRouteName="Profile" >
            <Drawer.Screen options={{
                drawerLabel: 'Dashboard', title: "Dashboard", header: ({ options, route, navigation }) => {
                    return (
                        <Header props={{ options, route, navigation }}></Header>
                    )
                }
            }} name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="AcceptTask" component={AcceptTask} />
            <Drawer.Screen name="Payment" component={Payment} />
            <Drawer.Screen name="BankAccount" component={BankAccount} />
        </Drawer.Navigator>
    );
};

export default WorkerDrawerNavigator;
