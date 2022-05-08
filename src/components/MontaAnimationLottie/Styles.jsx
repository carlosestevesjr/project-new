import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles =  StyleSheet.create({
    sampleStyle: {
        // flex:1,
        // marginBottom:'50%',
        width: windowWidth,
        height:windowHeight / 25,
     
    },
   
});

export default styles;