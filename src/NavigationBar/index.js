import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabNavigator from "./homeBottomTabNavigator";
import CreatePost from "../screens/CreatePost";
import PostDetailComment from "../screens/PostDetailComment";
import Profile from "../screens/Profile";
import SongScreen from "../screens/SongScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator  
            screenOptions={{
              headerShown: false,
              }}
              >

            <Stack.Screen name="Home"   component={HomeBottomTabNavigator} screenOptions={{headerShown: false}} />
            <Stack.Screen name="CreatePost"   component={CreatePost}  options={{headerShown: true, title:"Post",}} />
            <Stack.Screen name="PostDetailComment"   component={PostDetailComment}  options={{headerShown: true, title:"Post",}} />
            <Stack.Screen name="Profile"   component={Profile}  options={{headerShown: true, title:"Post",}} />
            <Stack.Screen name="SongScreen"   component={SongScreen}  options={{headerShown: true, title:"Post",}} />
          </Stack.Navigator>
      </NavigationContainer>
    );
};

export default RootNavigation;