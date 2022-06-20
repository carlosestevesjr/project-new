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
    boxNewsTag:{
		width:'100%',
	},
    containerChannel:{
        width:'100%',
        flexDirection: "row",
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:3,
        borderBottomColor:'#d3d3d3',
		borderBottomWidth:1,
    },
	newsChannelLogo:{
		width:'25%',
        padding:5,
        height:50,
	},
	newsChannelImage:{
		height:'100%'
	},
    containerChannelName:{
        width:'60%',
        // height: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
     
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