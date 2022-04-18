import { StyleSheet } from 'react-native';

import  { 
    primary500,
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
        // height:60,
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
	}
});

export default styles;