import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles =  StyleSheet.create({
    sampleStyle: {
        flex:1,
        zIndex:999,
        bottom: 0,
        position: 'absolute', 
        width: windowWidth ,
        height: windowHeight ,
        backgroundColor:"#d3d3d3"
    },
   
});

export default styles;