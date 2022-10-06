import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Image,
} from 'react-native';

import Video from 'react-native-video';
import { useState, useEffect} from 'react';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Auth} from '@aws-amplify/auth';
import {Storage, API, graphqlOperation } from 'aws-amplify';
import { createUserPostLike, deleteUserPostLike } from '../../graphql/mutations';
import { listUserPostLikes } from '../../graphql/queries';
import { useRoute, useNavigation} from '@react-navigation/native';
import Profile from '../../screens/Profile';


const Post = (props) => {

    const [user, setUser] = useState(props.user);
    console.log(user.id);
    const postID1 = props.postID;
    const [shares, setShares] = useState(0);

    const [likedByUser, setLikedByUser] = useState("");
    
    const [likedCount, setLikedCount] = useState(0);
    const [song, setSong] = useState(props.song);

    const [comments, setComments] = useState(0);

    const [description, setDescription] = useState(props.description);

    const [paused, setPaused] = useState( false);

    const [videoUri, setVideoUri] = useState('');
    const navigation = useNavigation();
    
    const onPlayPausePress = () => { 
        setPaused(!paused);
    };

// ------------------------------------------------------------------------------------------------------

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


      const commentPress = async () => {


        navigation.navigate("PostDetailComment");
      };

      const profilePress = async () => {
        navigation.navigate("Profile", {userOfPost:user});

      };
      const songPress = async () => {
        navigation.navigate("SongScreen");

      };


    return (
        <View>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <View style={styles.container}>
                    <Video
                    source={{uri: videoUri}} 
                    style = {styles.video}
                    onError = {(LoadError) => console.log(e)}
                    resizeMode={'cover'}
                    repeat = {true}
                    paused = {paused}
                    />
                    <View style={styles.uiContainer}>
                        <View style={styles.rightContainer}>
                                <Image style={styles.profilePicture} source={{uri: user.ppImageUri}} />


                                <TouchableOpacity style={styles.iconContainer} onPress={addUserPostLike}>
                                    <AntDesign name={'heart'} size={40} color= {likedByUser ? "red" : "white"} />
                                    <Text style={styles.statsLabel}>{likedCount}</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.iconContainer} onPress={commentPress}>
                                <FontAwesome name={'commenting'} size={40} color="white" />
                                    <Text style={styles.statsLabel}>{comments}</Text>
                                </TouchableOpacity>

                                

                                <View style={styles.iconContainer}>
                                    <Fontisto name={'share-a'} size={32} color="white" />
                                    <Text style={styles.statsLabel}>{shares}</Text>
                                </View>

                            
                        </View>
                        <View style={styles.bottomContainer}>
                            <View>
                                <Text style={styles.handle} onPress={profilePress}>@{user.username}</Text>
                                <Text style={styles.description} >{description}</Text>
                                <View style= {styles.songRow}>
                                    <Entypo name={'beamed-note'} size={20 } color="white" />
                                    <Text onPress={songPress} style= {styles.songName}>{song.name}</Text>
                                </View>
                            </View>
                            <Image style={styles.songImage} source={{uri: song.imageUri}} />
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>
         </View>

    );
};

export default Post;