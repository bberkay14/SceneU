import React, { useEffect, useRef, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import { useRoute, useNavigation} from '@react-navigation/native';
import {Amplify} from '@aws-amplify/core';
import {Storage, API, graphqlOperation } from 'aws-amplify';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createPost } from '../../graphql/mutations';
import {Auth} from '@aws-amplify/auth';


const SongScreen = () => {

    
    
return (
    <View>
      <Text  >sayfa</Text>
       
    </View>
);

};

export default SongScreen;