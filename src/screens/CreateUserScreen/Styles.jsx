import { StyleSheet } from 'react-native';
import  { 
    background,
    light,
    primary800,
    primary900
 }  from "../../theme/index"
const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:primary900,
    },
    containerScrow:{
    },
    containerLogo: {
        width:'100%',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cabecalhoLogo: {
        width:300,
        margin:'2%'
	},
    containerBox: {
       
        width:'80%',
        marginLeft:'10%'
    },
    containerAcoes:{
        flexWrap:'wrap',
		flexDirection:'row',
        justifyContent: 'space-around',
		alignItems: "center"
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius:5,
        borderBottomWidth: 1,
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
        fontWeight:'bold',
        color:primary800,
        height:45,
        marginLeft:0,
        borderBottomColor: '#FFFFFF',
        flex:1,
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
        margin:5,
        paddingLeft:25,
        paddingRight:25,
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
});

export default styles;