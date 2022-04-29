import { StyleSheet } from 'react-native'

import {
    primary500,
    primary400,
    background,
    secundaryA200,
    dark,
    light,
    primary300
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
        marginLeft:0,
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
    cabecalho: {
		fontSize: theme.sizes.extraSmall,
        // fontWeight:'bold',
        marginTop: 15,
		marginBottom: 15,
		color:light,
	},
    cabecalhoTitle: {
		fontSize: theme.sizes.extraSmall,
        textAlign:'center',
        fontWeight:'bold',
		color:light,
        paddingTop:25,
        paddingBottom:25,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:primary300 ,
	},
})

export default styles
