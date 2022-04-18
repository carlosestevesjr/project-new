import { StyleSheet } from 'react-native'

import {
    surface,
    primary500
} from '../../theme/index'

const styles = StyleSheet.create({
	container: {
        backgroundColor:surface,
        margin:5,
        borderBottomColor:primary500,
		borderBottomWidth:3,
		paddingLeft:'2%',
        paddingRight:'2%',
		backgroundColor:'#FFF',
        shadowColor: primary500,
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius:3

	}
})

export default styles