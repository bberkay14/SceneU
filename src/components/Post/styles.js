import {StyleSheet, Dimensions} from 'react-native';
import SafeArea from 'react-native-safe-area';
import { getStatusBarHeight } from 'react-native-status-bar-height';

console.log(getStatusBarHeight());

const styles =  StyleSheet.create({
    container:{
        width:'100%',
        height:Dimensions.get('window').height - getStatusBarHeight() - 75,
    },
    video : {
        position:'absolute',
        top: 0,
        left:0,
        bottom:0,
        right:0,
    },
    uiContainer : {
        height: '100%',
        justifyContent: 'flex-end'
    },
    rightContainer : {
        alignSelf : "flex-end",
        height:280,
        justifyContent:"space-between",
        marginRight:5
    },
    bottomContainer : {
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    handle :{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        marginBottom:5
    },
    description : {
        color:'#fff',
        fontSize:16,
        fontWeight:'300',
        marginBottom:5
    },
    
    songRow : {
        flexDirection : 'row',
        alignItems:'center'
    },
    songName : {
        color:'#fff',
        fontSize:16,
        marginLeft:5
    },
    songImage : {
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:10,
        borderColor:'#4c4c4c',
        transform:[{rotate: '90deg'}],
    },
    profilePicture : {
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#fff',

    },
    statsLabel : {
        color:'#fff',
        fontSize: 16,
        fontWeight:'600',
        marginTop:5
    },
    iconContainer : {
        alignItems:'center',
    }
});

export default styles;