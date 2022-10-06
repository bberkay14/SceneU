import React from "react";
import {Image, Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Discover from "../screens/Discover";
import Camera from "../screens/Camera";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000'
            },
            activeTintColor: '#fff',
        }} >
            <Tab.Screen
             name={"Home"} 
             component={Home} 
             options={{
                headerShown: false,
                 tabBarIcon: ({color}) => (
                     <Entypo name={"home"} size={25} color={color} />
                 ),
                 headerShown: false,
             }}
             />
            <Tab.Screen 
            name={"Search"} 
            //component={() => <Text>Search</Text>} 
            component={Discover}
            options={{
                tabBarIcon: ({color}) => (
                    <AntDesign name={"search1"} size={25} color={color} />
                ),
                headerShown: false,
            }}
            />
            <Tab.Screen 
            name={"Upload"} 
            component={Camera} 
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name={"library-add"} size={34} color={color} />
                ),
                tabBarLabel: () => null,
                headerShown: false,
            }}
            />
            <Tab.Screen 
            name={"Inbox"} 
            component={Home} 
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name={"message-processing-outline"} size={25} color={color} />
                ),
            }}
            />
            <Tab.Screen 
            name={"Profile"} 
            component={Profile} 
            options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name={"person-outline"} size={25} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    );
};

export default HomeBottomTabNavigator;