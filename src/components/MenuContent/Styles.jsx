import { StyleSheet } from 'react-native'
import { light } from "../../theme/index"
import {
    primary500,
    primary400,
    background
} from '../../theme/index'

const styles = StyleSheet.create({

	menuContent: {
		flex:1,
		backgroundColor: background,
	},
	bottomDrawerSection: {
		marginBottom: 35,
        padding:5 ,
        backgroundColor: '#eeeeee',
	},
	drawerContent: {
		flex: 1
	},
	drawerItem: {
        backgroundColor:primary400 ,
		
        marginLeft: 0,
		marginRight: 0,
        marginTop:0,
		marginBottom: 5,
        // borderRadius:15,
        borderBottomColor:primary500,
		// borderBottomWidth:1,
        // borderTopColor:primary500,
		// borderTopWidth:1,
	},
	drawerItemLabel: {
		fontSize: theme.sizes.extraSmall,
        // fontWeight:'bold',
		marginLeft: -20,
		color:light,
	},
})

export default styles
