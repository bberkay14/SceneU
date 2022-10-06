import React, { useEffect, useRef, useState } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet,Dimensions, Image,  StatusBar, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import SafeArea from 'react-native-safe-area';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { useRoute, useNavigation} from '@react-navigation/native';
import {Amplify} from '@aws-amplify/core';
import {Storage, API, graphqlOperation } from 'aws-amplify';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { createPost } from '../../graphql/mutations';
import {Auth} from '@aws-amplify/auth';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

import { createUserPostLike, deleteUserPostLike } from '../../graphql/mutations';
import { listUserPostLikes } from '../../graphql/queries';


const PostDetailComment = (props) => {

    const [paused, setPaused] = useState( false);

    // -----------------------------

    const [user, setUser] = useState(props.user);
    console.log(user.id);
    const postID1 = props.postID;
    const [shares, setShares] = useState(0);

    const [likedByUser, setLikedByUser] = useState("");
    
    const [likedCount, setLikedCount] = useState(0);
    const [song, setSong] = useState(props.song);

    const [comments, setComments] = useState(0);

    const [description, setDescription] = useState(props.description);

    const [videoUri, setVideoUri] = useState('');
    const navigation = useNavigation();


    const getVideoUri = async () => {
        if (props.videoUri.startsWith('http')) {
          setVideoUri(props.videoUri);
          console.log(videoUri);
          return;
        }
        console.log(videoUri);
        setVideoUri(await Storage.get(videoUri));
      };

    const isLikedB = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        
        const filter = {
            and: [{ postID: {eq:postID1} },
                 { userID: {eq:userInfo.attributes.sub} }]
        };
        const isPostLikedByUser = await API.graphql(graphqlOperation(listUserPostLikes, {filter: filter}));

        setLikedByUser(isPostLikedByUser.data.listUserPostLikes.items.length !== 0); // burası array mi olacak --if(!Array.isArray(likedBy)) {}

      };
    const likeCount = async () => {
        const likedPostsCountFilter = {
            postID: {eq:postID1}
        };
        const likedPostArray = await API.graphql(graphqlOperation(listUserPostLikes, {filter: likedPostsCountFilter}));

        setLikedCount(likedPostArray.data.listUserPostLikes.items.length);


      };

      useEffect(() => {

          
          getVideoUri();
          isLikedB();
          likeCount();
    }, []);
      
      
      const addUserPostLike = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        
        const userPostDuo = {
            postID: postID1,
            userID: userInfo.attributes.sub
          };
        
        
        const filter = {
            and: [{ postID: {eq:postID1} },
                 { userID: {eq:userInfo.attributes.sub} }]
        };
        const isPostLikedByUser = await API.graphql(graphqlOperation(listUserPostLikes, {filter: filter}));
        if (isPostLikedByUser.data.listUserPostLikes.items.length === 0) { // burası array mi olacak --if(!Array.isArray(likedBy)) {}
            const addedUserPostLike = await API.graphql(graphqlOperation(createUserPostLike, {input: userPostDuo}));
        } else {
            const deletedUserPostLike = await API.graphql(graphqlOperation(deleteUserPostLike, {input: {id: isPostLikedByUser.data.listUserPostLikes.items[0].id}}));
        }
        isLikedB();
        likeCount();
      };

    // -----------------------------

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
        },
      ];
    
      const onPlayPausePress = () => { 
        setPaused(!paused);
    };
/*
      const Item = ({ title }) => (

      );

    */
    /*
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
*/
      /*
    <View  >
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator = {false}
      snapToAlignment={'start'}
    />
  </View>
      */

return (
    <View >

    <View style={styles.container} >
        <Text style={styles.hashTag}>#Sophia</Text>
        <View  style={{flexDirection:'row',marginTop:1,}}>
            <Image style={styles.profilePicture} source={{uri: user.ppImageUri}} />
            
            <View style={{flexDirection:'row', alignItems:"center"}} >
                <Text style={styles.userName}>{user.username} </Text>
                <View  style={{flexDirection:'row', alignItems:"center"}}>
                    <TouchableOpacity style={{fontWeight:'500', marginLeft:155,}} >
                        <AntDesign name={'adduser'} size={25} color= {"black"} />   
                    </TouchableOpacity>
                    <TouchableOpacity style={{fontWeight:'500', marginLeft:3,}} >
                        <AntDesign name={'ellipsis1'} size={25} color= {"black"} />   
                    </TouchableOpacity>
                </View>
            </View>

        </View>
        <Text style={styles.description}>{description} </Text>
      <Video
                source={{uri: videoUri}} 
                style = {styles.item}
                onError = {(LoadError) => console.log(e)}
                repeat = {true}
                paused = {paused}
                
        />
        <View style={{flexDirection:'row'}}>
            <View style={{justifyContent:"space-between", marginRight:7, marginLeft:3}}>
                <TouchableOpacity style={{alignItems:'center',}} >
                                <AntDesign name={'hearto'} size={25} color= {"black"} />
                                
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:"space-between", marginRight:7}}>
                <TouchableOpacity style={{alignItems:'center',}} >
                                <AntDesign name={'message1'} size={25} color= {"black"} />
                                
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={{alignItems:'center',fontWeight:'500'}} >
                                <Feather name={'arrow-right-circle'} size={25} color= {"black"} />
                                
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text style={
                {color:'#black',
                fontSize: 16,
                fontWeight:'500',
                marginTop:3,
                marginLeft:3,
            
            }
            }>1000 likes</Text>
        </View>
    </View>   

    </View>
);

};

export default PostDetailComment;









