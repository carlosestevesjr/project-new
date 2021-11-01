import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    sampleStyle: {
        flex:1, 
        // flexDirection:'row',
    },
    scrollV: {
        backgroundColor: 'pink',
       
    },
    
    boxButtons: {
        backgroundColor:'#000',
        width: '100%',
        height: 200,
    },
    boxInput: {
        width: '100%',
        height: 800,
        backgroundColor:'#d3d3d3',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    imagePokemon: {
        width: '50%',
        height: '50%',
    },
    name: {
       fontSize:25
    },
});

export default styles;