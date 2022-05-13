import { StyleSheet } from 'react-native'

import {
    primary500,
} from '../../theme/index'

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: "100%",
    },
    contentView: {
        margin: 5,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        // textAlign: "center"
    },
    modalTextDestaque: {
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: "center"
    },
    modalTextBold: {
        fontWeight: 'bold',
    }
})

export default styles