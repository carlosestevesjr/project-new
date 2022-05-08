import { StyleSheet} from 'react-native';
import  { 
    background, 
    primary500,
    primary700,
    secundary200
}  from "../../../theme/index"

const styles = StyleSheet.create({
    container: {
		flex: 1,
	},
    boxNews:{
        // backgroundColor:primary500,
	},
    boxNewsTag:{
		width:'100%',
	},
	newsTag:{
		flexDirection: "row",
	},
	newsTagName:{
        borderRadius:5,
        // margin:3,
        // padding:5,
		fontSize:theme.sizes.small,
		color:'#a10032'
	},
	news:{
		width:'100%',
        position:'relative' ,
	},
    containerChannel:{
        width:'100%',
        flexDirection: "row",
        marginBottom:3,
        borderBottomColor:'#d3d3d3',
		borderBottomWidth:1,
        // padding:5 ,
    },

	newsChannelImage:{
		width:'100%',
		height:'100%'
	},
    newsChannelLogo:{
		width:50,
        height:50,
        padding:5,
	},
    containerChannelName:{
        width:'65%',
        flexDirection: 'column',
        justifyContent: 'center',
       
    },
	ChannelName:{
        width:'100%',
		textTransform:'uppercase',
        color:primary500,
		fontSize:theme.sizes.exrtraSmall,
        fontWeight:'bold',
        paddingLeft: 10,
        paddingRight: 10,
	},
});

export default styles;