import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
    },
    safeArea: { 
		flex: 1, 
	},
    containerLoader:{
		position:'absolute',
		// marginTop:"1%",
		width:'100%',
		backgroundColor:'#FFF',
		bottom:0,
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
})

export default styles