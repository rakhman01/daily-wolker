import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from "../screens/company/Dashboard";
import Header from "../components/Header";
import CompanyTask from "../screens/company/CompanyTask";
import ListWorker from "../screens/company/ListWorker";
import WorkDone from "../screens/company/WorkDone";
import ListPayment from "../screens/company/ListPayment";


const Drawer = createDrawerNavigator<any>()

const CompanyDrawerNavigator: React.FC = () => {
    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen options={{
                drawerLabel: 'Dashboard', title: "Dashboard", header: ({ options, route, navigation }) => {
                    return (
                        <Header props={{ options, route, navigation }}></Header>
                    )
                }
            }} name='Dashboard' component={Dashboard} />
            <Drawer.Screen name="CompanyTask" component={CompanyTask} />
            <Drawer.Screen name="ListWorker" component={ListWorker} />
            <Drawer.Screen name="WorkDone" component={WorkDone} />
            <Drawer.Screen name="ListPayment" component={ListPayment} />
        </Drawer.Navigator>
    )
}


export default CompanyDrawerNavigator
