import { StyleSheet } from 'react-native';

import  { 
    background, 
    primary300,
    primary500,
    secundary700,
    primary700,
    secundary200,
    primary50,
    light,
    dark,
    surface,
    secundary900
}  from "../../theme/index"

const styles =  StyleSheet.create({
    sampleStyle: {
        width:'100%',
    },
    title: {
        // height:75,
        color:primary700,
        fontSize:theme.sizes.small,
        fontWeight:'bold',
        fontStyle: 'italic',
    },
    tagsListas:{
        backgroundColor:surface,
        margin:5,
		paddingLeft:'2%',
        paddingRight:'2%',
		backgroundColor:'#FFF',
        shadowColor: primary500,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius:3,
        paddingBottom:8,
       
    },
    item:{
        marginTop:2,
        marginLeft:2,
        marginBottom:5,
        marginRight:2,
        paddingTop:2,
        paddingBottom:2,
        backgroundColor:dark,
        width:100,
        borderRadius:3,
        borderColor:primary700,
        borderWidth:1,
    },
    itemImage:{
        height:130,
        width:'100%',
    },
    itemText:{
        position:'absolute',
        bottom:"0%",
        padding:2,
        width:"100%",
        textAlign:  'center',
        backgroundColor:'rgba(106, 39, 126, 0.9)',
        color:light,
        fontSize:theme.sizes.ultraSmall,
        fontWeight:'bold',
    },
   
});

export default styles;