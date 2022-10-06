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


const Hashtag = (props) => {
  
  const [hashtagID, setHashtagID] = useState(props.hashtagpID);
  const [posts, setPosts] = useState( []);
  useEffect(() => {
      const fetchPost = async () => {
          // fetch all the posts
          try {
                const postByHashtag = {
                    hashTagPostsId: {eq:hashtagID}
                };
                const response = await API.graphql(graphqlOperation(listPosts, {filter: postByHashtag}));
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

  const renderElement = () => {
    // Topics, likes, posts -başlıkları buradan şekillenecek
      if(selectedValue === "Tags")
         return (
          <View>
            <FlatList 
              data={posts}
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

}

export default Hashtag;