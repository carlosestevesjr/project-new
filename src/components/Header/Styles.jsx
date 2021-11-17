import { StyleSheet } from 'react-native';
import { light } from "../../theme/index"
import  theme  from "../../theme/index"

const styles =  StyleSheet.create({
    sampleStyle: {
        flex:1,
    },
    title: {
        color:light,
        fontSize:theme.sizes.small
    },
   
});

export default styles;