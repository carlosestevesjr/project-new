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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,
        position: 'absolute',
        width: "100%",
    },
    modalView: {
        borderColor: primary500,
        borderWidth: 2,
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
    buttonContent: {
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#d3d3d3',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor:primary400,
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