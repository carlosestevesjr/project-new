import { StyleSheet } from 'react-native'

import {
    primary500,
    primary800,
    background
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
    containerBox: {
        width:'100%',
      
    },
    containerAcoes:{
        flexWrap:'wrap',
		flexDirection:'row',
        justifyContent: 'space-around',
		alignItems: "center"
    },
    inputContainer: {
        backgroundColor:background,
        borderWidth: 1,
        borderColor:primary500 ,
        borderRadius:5,
        // height:45,
        marginTop:10,
        flexDirection: 'row',
        alignItems:'center',
        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputs:{
        width:'100%',
        fontWeight:'bold',
        color:primary800,
        height:45,
    },
    inputsMultline:{
        width:'100%',
        textAlignVertical: 'top',
        backgroundColor:background,
        height: 200,
        marginTop: 5,
        borderWidth: 1,
        borderColor:primary500 ,
        padding: 10,
        borderRadius:5,
    },
    inputIcon:{
        width:30,
        height:30,
        marginRight:15,
        justifyContent: 'center'
    },
    btnForgotPassword: {
        height:15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        backgroundColor:'transparent'
    },
    loginButton: {
        marginTop:15,
       
    },
    loginText: {
        color: 'white',
    },
    bgImage:{
        flex: 1,
        resizeMode : 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    buttonContainer: {
        color:'#FFF',
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:15,
        backgroundColor:'transparent',
        shadowColor: '#000',
		shadowOffset: { width: 15, height: 15 },
		shadowOpacity: 0.8,
		shadowRadius: 5, 
		elevation: 5,
    },
    btnText:{
        color:"white",
        fontWeight:'bold'
    },
    boxCheckbox:{
        flexWrap:'wrap',
		flexDirection:'row',
        justifyContent: 'space-around',
		alignItems: "center",
        marginBottom:10
    },
    checkboxContainer: {
        flexDirection: "row",
        flexWrap:"wrap",
    },
    checkBoxText: {
        borderRadius:5,
        backgroundColor: '#FFF',
        fontWeight: 'normal',
        fontSize:10
    },
    btnDefault:{
        borderBottomWidth:3,
        borderBottomColor:'#8c8c8c',
        backgroundColor:'#d4d4d4',
        color:'#000'
    },
    btnPrimary:{
        borderBottomWidth:3,
        borderBottomColor:'#122b40',
        backgroundColor:'#204d74'
    },
    btnSuccess:{
        borderBottomWidth:3,
        borderBottomColor:'#255625',
        backgroundColor:'#398439' 
    },
    btnInfo:{
        borderBottomWidth:3,
        borderBottomColor:'#1b6d85',
        backgroundColor:'#269abc'
    },
    btnWarning:{
        borderBottomWidth:3,
        borderBottomColor:'#985f0d',
        backgroundColor:'#d58512'
    },
    btnDanger:{
        borderBottomWidth:3,
        borderBottomColor:'#761c19',
        backgroundColor:'#ac2925' 
    },
    btnCustom1:{
        borderBottomWidth:3,
        borderBottomColor:'#750025',
        backgroundColor:'#A10032' 
    },
    btnCustom2:{
        borderBottomWidth:3,
        borderBottomColor:'#290A4D',
        backgroundColor:'#3F0F75' 
    }
})

export default styles