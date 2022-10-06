import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    countText: {
      color: "#FF00FF"
    },
    profilePicture : {
      width:50,
      height:50,
      borderRadius:25,
      borderWidth:2,
      borderColor:'#fff',

    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button12: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: "oldlace",
      marginHorizontal: "1%",
      marginBottom: 6,
      marginTop:20,
      minWidth: "30%",
      textAlign: "center",
    },
    selected: {
      backgroundColor: "coral",
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: "500",
      color: "coral",
    },
    selectedLabel: {
      color: "white",
    },
    button: {
      marginBottom: 30,
      marginTop: 30,
      width: 360,
      alignItems: 'center',
      backgroundColor: '#2196F3',
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    },

    item: {
      paddingLeft: 15,
      paddingTop: 8,
      paddingBottom: 8,
      marginBottom: 15,
    },
   
    itemText:{
      fontSize: 24,
      color: 'black'
    },
    border:{
      borderColor: 'blue', 
      borderWidth: 1, 
      borderRadius: 4,
      marginBottom: 10,
    }
    
  });

  export default styles;