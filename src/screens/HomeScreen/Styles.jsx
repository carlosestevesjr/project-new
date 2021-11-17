import { StyleSheet} from 'react-native';
import  { background }  from "../../theme/index"

const styles = StyleSheet.create({
    base: {
        flex:1, 
        backgroundColor: background
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