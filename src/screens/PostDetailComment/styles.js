import {StyleSheet, Dimensions} from 'react-native';
import SafeArea from 'react-native-safe-area';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({

    container: {
        justifyContent:"space-between",
        paddingBottom:20,
        marginBottom:5,
        paddingTop:5,
        borderBottomColor:"gray",
        borderBottomWidth:1,
    },

    item: {
        width:Dimensions.get('window').width+300,
        height:Dimensions.get('window').width+300,
        //backgroundColor:"pink",
        marginTop:2,
        alignSelf:"center",
        justifyContent:"space-between",
        marginBottom:5,
    },
    profilePicture : {
        width:45,
        height:45,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#fff',
        marginLeft:15,

    },
    description: {
        color:'#black',
        fontSize: 15,
        fontWeight:'400',
        marginTop:4,
        marginLeft:10,
        marginBottom:4,       
    },
    userName: {
        color:'black',
        fontSize: 16,
        fontWeight:'550',
        marginTop:4,
        marginLeft:3,
        marginBottom:0,
        fontWeight:'600'
    },

    hashTag: {
        color:'#black',
        fontSize: 16,
        fontWeight:'550',
        marginTop:4,
        marginLeft:5,
        marginBottom:0,
        fontWeight:'600'
    },
  });

  export default styles;