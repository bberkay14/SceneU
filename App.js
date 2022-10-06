/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import "react-native-gesture-handler";
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './src/screens/Home';
import NavigationBar from "./src/NavigationBar";
import {withAuthenticator} from 'aws-amplify-react-native';


import {Auth} from '@aws-amplify/auth';
import {API, graphqlOperation} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import {create} from "react-test-renderer";

import {createUser} from './src/graphql/mutations';
import { getUser } from "./src/graphql/queries";
import {Amplify} from '@aws-amplify/core';
Amplify.configure(awsconfig);


const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg'
];

const getRandomImage = () => {
  return randomImages[Math.floor(x= Math.random() * randomImages.length)];
};

const App: () => React$Node = () => {

  useEffect(  () => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser(params={bypassCache:true})

      if(!userInfo) {
        return;
      };

      const getUserResponse = await API.graphql(
        graphqlOperation(
          getUser,
          variables= {id: userInfo.attributes.sub})
      );

      if (getUserResponse.data.getUser) {
        console.log("User already exists in database");
        return;
      };

      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        ppImageUri: getRandomImage()
      };
      await API.graphql(
        graphqlOperation(
          createUser,
          variables= {input: newUser}
        )
      );
    };
    fetchUser();
    }, inputs= []
  );

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex:1, backgroundColor:"black"}} >
          <NavigationBar />
      </SafeAreaView>
    </>
  );
};


export default withAuthenticator(App);
