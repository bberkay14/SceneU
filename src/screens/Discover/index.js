import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import styles from "./styles";

import React, { useEffect, useState } from 'react';
import {View, FlatList, TouchableHighlight,Text, Image, TouchableOpacity} from 'react-native';
import {Storage} from 'aws-amplify';
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import {Auth} from '@aws-amplify/auth';
import { listPosts } from '../../graphql/queries';
import PostDetailComment from "../PostDetailComment";


const UselessTextInput = () => {

  const [text, onChangeText] = React.useState(null);

  const values = ["Tags", "Questions", "Elections"];
  const [selectedValue, setSelectedValue] = useState("Tags");

  const [users, setUsers] = useState( []);

  const [hashtag, setHashtag] = useState( []);

  /*
  useEffect(() => {
    const fetchPost = async () => {
        // fetch all the posts
        try {
            const response = await API.graphql(graphqlOperation(listPosts )); 
            const maplist = response.data.listPosts.items.map(value  => value);
            //console.log(response.data.listPosts.items[2]);
            //setPosts(response.data.listPosts.items);
            setPosts(maplist);
        } catch (e) {
            console.error(e);
         }

    };
    fetchPost();
  }, []);
  */

  useEffect(() => {
    const fetchHashtag = async () => {
        // fetch all the posts
        try {
            const response = await API.graphql(graphqlOperation(listPosts )); 
            const maplist = response.data.listPosts.items.map(value  => value);

            const aggr = 
            { field: "hashtagID" ,
                 name: "sdhkjh" ,type: "terms" }
            ;

            let yesterday = new Date();
            yesterday.setDate(yesterday.getDate()-2);
            const lastDay = {createdAt: {gt: yesterday}};

            const postsCountPerHastagRes = await API.graphql(graphqlOperation(searchPosts, {aggregates:aggr,filter:lastDay} )); 
            
            const postsCountPerHastag = postsCountPerHastagRes.data.searchPosts.aggregateItems[0].result.buckets;
            const trendHashtags = postsCountPerHastag.map(value => value.key);



            let yesterday2 = new Date();
            yesterday2.setDate(yesterday2.getDate());
            const lastDay2 = {createdAt: {gt: yesterday2}};
            const commentCountPerHastagRes = await API.graphql(graphqlOperation(searchComments, {aggregates:aggr,filter:lastDay} )); 
            
            const commentCountPerHastag = commentCountPerHastagRes.data.searchComments.aggregateItems[0].result.buckets;
            const trendHashtags_2 = commentCountPerHastag.map(value => value.key);
            


            const displayedHashtags = new Set(trendHashtags.slice(0,30), trendHashtags_2.slice(0,30));

            console.log(displayedHashtags);
            //setPosts(response.data.listPosts.items);
            setHashtag(displayedHashtags);
        } catch (e) {
            console.error(e);
         }

    };
    fetchHashtag();
  }, []);


  const renderElement = () => {
  // Topics, likes, posts -başlıkları buradan şekillenecek
    if(selectedValue === "Tags")
       return (
        <View>
          <FlatList 
            data={hashtag}
            renderItem={({item} ) => <PostDetailComment comments={item.comments} postID={item.id} user={item.user}  song={item.song}  videoUri={item.videoUri} description={item.description} />}

            showsVerticalScrollIndicator = {false}
            //snapToInterval={Dimensions.get('window').height - getStatusBarHeight() - 75}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
          />
        </View>
       );
    return null;
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search"

      />

  <View style={styles.row}>
                {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.button12,
                        
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value &&
                            styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
                ))}
    </View>
    { renderElement() }


    </SafeAreaView>

    
  );
};



export default UselessTextInput;