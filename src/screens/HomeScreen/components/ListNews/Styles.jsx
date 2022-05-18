import { StyleSheet} from 'react-native';
import  { 
    background, 
    light, 
    primary500,
    primary800,
    primary700,
    primary400,
    primary50,
} from "../../../../theme/index"

const styles = StyleSheet.create({
    container: {
		flex: 1,
	},
    boxNews:{
        width:'100%',
	},
    boxNewsTag:{
		width:'100%',
	},
	newsTag:{
        flexWrap:'wrap',
		flexDirection: "row",
	},
	newsTagName:{
        borderRadius:5,
        margin:3,
        padding:5,
        fontWeight:'bold',
		fontSize:theme.sizes.extraSmall,
        backgroundColor: primary400,
		color:light
	},
	news:{
		width:'100%',
        position:'relative' ,
	},
    newsContainerBanner:{
        marginTop: 5,
        marginBottom: 5,
	},
	newsBanner:{
		width:'100%',
	},
    newsBannerLoader:{
        zIndex:0,
        width:35,
        height:35,
        position:'absolute',
        marginTop:-17.5,
        marginLeft:-17.5,
        left:'50%',
        top:'50%'
    },
    newsBannerImage:{
        width: '100%',
        height: 110,
        position: 'relative',
        zIndex: 1,
        // backgroundColor:primary50,
        margin: '0%'
    },
    containerChannel:{
        width:'100%',
        flexDirection: "row",
        marginBottom:5,
        borderBottomColor:primary50,
		borderBottomWidth:1,
        padding:3 ,
    },
	newsChannelLogo:{
		width:'20%',
        padding:1,
        height:37,
	},
	newsChannelImage:{
		width:'100%',
		height:'100%'
	},
    containerChannelName:{
        width:'80%',
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
    newsData:{
        width:'100%',
		color:primary700,
		fontSize:theme.sizes.extraSmall,
        // fontWeight: 'bold',
        fontStyle: 'italic',
        paddingLeft: 10,
        paddingRight: 10,
	},
    newsTypeMedia:{
		position:'absolute',
		right:0,
		top:2,
		zIndex:9,
		backgroundColor :'#fff',
		borderColor:primary500,
		borderWidth:0.5,
		padding:3,
		borderRadius:50,
	},
    newsDescricao:{
		width:'100%',
        fontWeight:'bold',
        fontStyle: 'italic',
		lineHeight:18,
		textTransform:'uppercase',
        textAlign:"center",
        backgroundColor:primary50,
		padding:8,
		color:primary800,
		fontSize:theme.sizes.small,
        borderRadius:5,
        // borderBottomColor:'#d3d3d3',
		// borderBottomWidth:1,
	},
});

export default styles;