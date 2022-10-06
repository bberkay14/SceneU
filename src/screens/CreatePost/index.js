import React, { useEffect, useRef, useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import { useRoute, useNavigation} from '@react-navigation/native';
import {Amplify} from '@aws-amplify/core';
import {Storage, API, graphqlOperation } from 'aws-amplify';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createPost } from '../../graphql/mutations';
import {Auth} from '@aws-amplify/auth';

const CreatePost = () => {
    const [description, setDescription] = useState('');
    const [videoKey, setVideoKey] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();

    const uploadToStorage = async(imagePath) => {
        try {
            const response = await fetch(imagePath);

            const blob = await response.blob();

            const filename = `${uuidv4()}.mp4`;

            const s3Response = await Storage.put(filename, blob);
            setVideoKey(s3Response.key);

        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(
        () => {
            uploadToStorage(route.params.videoUri);
        }, []
    )
    const onPublish = async () => {

        if (!videoKey) {
            console.log("Video has not been uploaded yet")
            return;
        }
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const newPost = {
            
                videoUri: videoKey,
                description: description,
              
                userID: userInfo.attributes.sub,
    
              
                songID: "90f94c48-2cbb-40ad-bbfd-e88055d27c8f"
            };

            const response = await API.graphql(
                graphqlOperation(
                    createPost,
                    variables= {input: newPost}
                )
            );
            navigation.navigate("Home", { screen: "Home" });
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <View style = {styles.container}>
            <TextInput
                value={description}
                onChangeText={setDescription}
                numberOfLines={5}
                placeholder={"Description"}
                style={styles.textInput}
            />
            <TouchableOpacity  onPress={onPublish}>
                <View style={styles.button}>
                    <Text style={styles.buttonText} >Publish</Text>
                </View>
            </TouchableOpacity >
        </View>
        
    );
};

export default CreatePost;