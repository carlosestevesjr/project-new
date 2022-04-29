import { StyleSheet } from 'react-native';

import  { 
    background, 
    primary500,
    primary700,
    secundary200
}  from "../../theme/index"

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor:primary500,
        borderTopColor:primary500,
	},
	web:{
		marginLeft:'1%',
		marginRight:'1%',
		marginBottom:60,
		width:'98%',
		// height:'100%'
	},
	
	title_link:{
        fontSize:15,
        color:"#FFF",
        padding:10,
    },
	boxBottons:{
		zIndex:9,
		position:'absolute',
		bottom:10,
		color:'#FFF',
		width:'100%',
            flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:2,
        backgroundColor:'transparent',
	},
	btn:{
		marginLeft:20,
		marginRight:20,
	},
	containerLoader:{
		marginTop:"1%",
		width:'100%',
		padding:5,
		backgroundColor:'#f3f3f3',
		bottom:70,
		flexDirection: 'row',
        justifyContent: 'center',
	},
	containerLoaderImage:{
		width:20,
		height:20,
		margin:5
	},
	containerLoaderText:{
		margin:5,
		color:'#a10032',
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
    newsContainerBanner:{
        marginTop: 5,
        marginBottom: 5,
	},
	newsBanner:{
		width:'100%',
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