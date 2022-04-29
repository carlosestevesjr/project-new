import { StyleSheet } from 'react-native';
import  { 
    background, 
    dark, 
    primary500,
    primary700,
    light
}  from "../../../theme/index"

const styles = StyleSheet.create({
    container: {
		flex: 1,
	},
    containerTag:{
        backgroundColor:background,
        paddingTop:50,
        shadowColor: dark,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius:3,
	},
    headerTag:{
        width: '98%',
        borderBottomWidth:3,
        borderBottomColor:primary500,
        marginTop: 2,
        marginLeft: '1%',
        marginRight: '1%',
        fontWeight:'bold',
        fontSize:theme.sizes.small,
        color: primary500,
        padding: 10,
        position:'absolute',
        top:1,
        left:0 ,
        zIndex:9999,
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
		backgroundColor:primary500,
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
        height: 130,
        position: 'relative',
        zIndex: 1,
        backgroundColor: '#d3d3d3',
        margin: '0%'
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
		width:'20%',
        padding:5,
        height:50,
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
		bottom:5,
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
        // backgroundColor:primary500,
		padding:8,
		color:primary500,
		fontSize:theme.sizes.extraSmall,
        borderBottomColor:'#d3d3d3',
		borderBottomWidth:1,
	},
});

export default styles;