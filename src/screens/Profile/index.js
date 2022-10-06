import React, { useEffect, useState } from 'react';
import {View, FlatList, TouchableHighlight,Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Storage} from 'aws-amplify';
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import {Auth} from '@aws-amplify/auth';

const Profile = (props) => {

    const values = ["topics", "every", "liked"];
    //const [topics, setTopics] = useState("topics");
    //const selectedValue = topics;
    //const setSelectedValue = setTopics;

    const [selectedValue, setSelectedValue] = useState("topics");


    const [users, setUsers] = useState( []);
    useEffect(() => {
        const fetchPost = async () => {
            // fetch all the posts
            try {
                
                const userInfo = await Auth.currentAuthenticatedUser();

                const response = await API.graphql(graphqlOperation(getUser, { id: userInfo.attributes.sub} )); 

                setUsers(response.data.getUser.ppImageUri);

                
            } catch (e) {
                console.error(e);
             }

        };
        fetchPost();
    }, []);

    const Data = [
        {
          id: 1,
          title: 'Item One',
        },
        {
          id: 2,
          title: 'Item Two',
        },
        {
          id: 3,
          title: 'Item Three',
        },
        {
          id: 4,
          title: 'Item Four',
        },
        {
          id: 5,
          title: 'Item Five',
        },
        {
          id: 6,
          title: 'Item Six',
        },
        {
          id: 7,
          title: 'Item Seven',
        },
        {
          id: 8,
          title: 'Item Eight',
        },
        {
          id: 9,
          title: 'Item Nine',
        },
        {
          id: 10,
          title: 'Item Ten',
        }
    ];

    const ItemRender = ({ title }) => (
        //<View onPress={funcTry} style={styles.item}>
        //  <Text  style={styles.itemText}>{title}</Text>
        //</View>

        <TouchableOpacity onPress={funcTry} style={styles.border}>
            <View style={styles.item}>
                <Text  style={styles.itemText}>{title}</Text>
            </View>
        </TouchableOpacity>
      );
     
      
    const funcTry = () => {

    }

    const renderElement = () => {
      // Topics, likes, posts başlıkları buradan şekillenecek
        if(selectedValue === "topics")
           return (
            <FlatList
                    data={Data}
                    renderItem={({ item }) => <ItemRender title={item.title} />}
                    keyExtractor={item => item.id}
                    style={{marginTop:20}}
                    //ItemSeparatorComponent={ItemDivider}
            />
           );
        return null;
     }
    
    return (
        <View style={styles.container}>
            <View>
                
                <Image style={styles.profilePicture} source={{uri: users}} />
                <Text>hello</Text>
            </View>




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
            


        </View>
    );
}

export default Profile;