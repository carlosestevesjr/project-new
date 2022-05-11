import { StyleSheet,Dimensions } from 'react-native'

import  { 
    primary500,
    background
}  from "../../theme/index"

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
    },
    safeArea: { 
		flex: 1, 
	},
    containerLoader:{
        // flex: 1, 
		position:'absolute',
		// marginTop:"1%",
        alignContent:'center',
		width:'20%',
        marginLeft:'40%',
        marginRight:'40%',
        borderWidth:2,
        borderColor: primary500,
		backgroundColor:'#fff',
		bottom:10,
		flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            padding:10,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 10,
        borderRadius:15
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