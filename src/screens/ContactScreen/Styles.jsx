import { StyleSheet } from 'react-native'

import {
    primary500,
    primary400
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
        color:primary500,
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: 'bold',
        fontSize:theme.sizes.small,
        marginBottom: 15,
        textAlign: "center"
    },
    modalTextBold: {
        fontWeight: 'bold',
    },
    containerBox: {
        width:'100%',
    },
   
    scrollView: {
        // marginHorizontal: 20,
    },
    inputs:{
        height: 40,
        marginBottom: 5,
        borderWidth: 2,
        borderColor:primary500 ,
        padding: 10,
        borderRadius:5,
    },
    inputsMultline:{
        textAlignVertical: 'top',
        height: 200,
        marginBottom: 5,
        borderWidth: 2,
        borderColor:primary500 ,
        padding: 10,
        borderRadius:5,
    },
    buttonContent: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: primary400,
    },
})

export default styles