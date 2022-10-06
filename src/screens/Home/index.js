import React, { useEffect, useState } from 'react';
import {View, FlatList, Dimensions,Text} from 'react-native';
import Post from '../../components/Post';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {API, graphqlOperation} from 'aws-amplify';
import { listPosts, searchPosts, searchComments } from '../../graphql/queries';



const Home = () => {
    const [posts, setPosts] = useState( []);
    useEffect(() => {
        const fetchPost = async () => {
            // fetch all the posts
            try {
                const response = await API.graphql(graphqlOperation(listPosts )); 
                const maplist = response.data.listPosts.items.map(value  => value);
                const aggr = 
                    { field: "hashtagID" ,
                         name: "sdhkjh" ,type: "terms" }
                ;

                let yesterday = new Date();
                yesterday.setDate(yesterday.getDate()-3);
                const lastDay = {createdAt: {gt: yesterday}};

                const postsCountPerHastagRes = await API.graphql(graphqlOperation(searchPosts, {aggregates:aggr,filter:lastDay} )); 
                
                const postsCountPerHastag = postsCountPerHastagRes.data.searchPosts.aggregateItems[0].result.buckets;
                const trendHashtags = postsCountPerHastag.map(value => value.key);
                console.log(trendHashtags.slice(0,2));


                let yesterday2 = new Date();
                yesterday2.setDate(yesterday2.getDate());
                const lastDay2 = {createdAt: {gt: yesterday2}};
                const commentCountPerHastagRes = await API.graphql(graphqlOperation(searchComments, {aggregates:aggr,filter:lastDay} )); 
                
                const commentCountPerHastag = commentCountPerHastagRes.data.searchComments.aggregateItems[0].result.buckets;
                const trendHashtags_2 = commentCountPerHastag.map(value => value.key);
                
                console.log(trendHashtags_2.slice(0,2));

                const displayedHashtags = new Set(trendHashtags.slice(0,30), trendHashtags_2.slice(0,30));

                console.log(trendHashtags);
                console.log(displayedHashtags);

                //setPosts(response.data.listPosts.items);
                setPosts(maplist);
            } catch (e) {
                console.error(e);
             }

        };
        fetchPost();
    }, []);
    
    
return (
    <View>
        <FlatList 
        data={posts}
        renderItem={({item} ) => <Post comments={item.comments} postID={item.id} user={item.user}  song={item.song}  videoUri={item.videoUri} description={item.description} />}

        showsVerticalScrollIndicator = {false}
        snapToInterval={Dimensions.get('window').height - getStatusBarHeight() - 75}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        />
       
    </View>
);

};

export default Home;