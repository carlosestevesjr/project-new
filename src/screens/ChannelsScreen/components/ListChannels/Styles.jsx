import { StyleSheet} from 'react-native';
import  { 
    background, 
    primary500,
    primary700,
    secundary200
}  from "../../../../theme/index"

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
        margin:3,
        padding:5,
		fontSize:theme.sizes.extraSmall,
		color:'#a10032'
	},
	news:{
		width:'100%',
        position:'relative' ,
	},
    containerChannel:{
        width:'100%',
        flexDirection: "row",
        marginBottom:5,
        borderBottomColor:'#d3d3d3',
		borderBottomWidth:1,
        padding:5 ,
    },
	newsChannelLogo:{
		width:'30%',
        padding:5,
        height:80,
	},
	newsChannelImage:{
		width:'100%',
		height:'100%'
	},
    containerChannelName:{
        width:'65%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
	ChannelName:{
        width:'100%',
		textTransform:'uppercase',
        color:primary500,
		fontSize:theme.sizes.extraSmall,
        fontWeight:'bold',
        paddingLeft: 10,
        paddingRight: 10,
	},
    newsDescricao:{
		width:'100%',
        fontWeight:'bold',
        fontStyle: 'italic',
		textTransform:'uppercase',
		padding:8,
		color:primary500,
		fontSize:theme.sizes.extraSmall,
	},
});

export default styles;