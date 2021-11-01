import React , { useState, useEffect } from 'react';

//Utils
import _ from 'lodash'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';
import { buscaPokemon } from '../../redux/slices/pokemonSlice'
import { alteraStatusLoaderGeral } from '../../redux/slices/geralSlice'

//Components
import { Button, Text, TextInput, View, Image, ScrollView, SafeAreaView } from 'react-native';

import Components  from './../../components'

//Styles
import styles from './Styles';

const Screen = ({ navigation }) => {

    //Variables Default
    const dispatch = useDispatch()

    //States
    const [namePokemon, setNamePokemon] = useState(null);
    const [numberPokemon, setNumberPokemon] = useState(1);

    //Cicle Life
    useEffect(() => {
        
    })

    //Functions
    const regularId = (id) => {
        // console.log(id.toString().length)
        if(id.toString().length === 1 ){
            return '00'
        }else if(id.toString().length === 2){
            return '0'
        }else{
            return ''
        }
    }

    const clickBuscar = (id = null) => {
        
        dispatch(
            alteraStatusLoaderGeral(true),
            buscaPokemon(
                { 
                    params:{
                        id: id == null ? namePokemon : id,
                    } 
                } 
            ) 
        )
        
    }

    const mudaNomePokemon = (number) => {
        setNumberPokemon(number)
        clickBuscar(number)
    }
    
    //Go Screen
    const goToLoginScreen = () => navigation.navigate('Login');

    //Get State
    const pokemon = useSelector((state) => state.pokemon.single)
    const statusLoader = useSelector((state) => state.geral.loaderGeral.open )
    
        
    return (
        <SafeAreaView style={styles.sampleStyle}>
            <ScrollView style={styles.scrollV} >

                <Text>HOME </Text>
                
                {
                    !_.isEmpty(pokemon.name) && 
                    <Text style={styles.name} >Nome : { pokemon.name } </Text>
                }

                {
                    numberPokemon && 
                    <Text>Number Pokemon : { numberPokemon } </Text>
                }

                {
                    !_.isEmpty(pokemon.sprites.front_default) && 
                    <Image
                        style={styles.imagePokemon}
                        resizeMode={'contain'}
                        source={{
                            uri:  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+ regularId(pokemon.id) + pokemon.id+'.png',
                        }}
                    
                    />
                }
                
                <View style={styles.boxButtons}>
                    <Button  title="+" onPress={() => mudaNomePokemon(numberPokemon + 1 )}></Button>  
                    <Button  title="-" onPress={() => mudaNomePokemon(numberPokemon - 1)}></Button>       
                    <Button  title="Buscar" onPress={() => clickBuscar()}></Button>
                </View>

                <View style={styles.boxInput}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNamePokemon}
                        value={namePokemon}
                        placeholder="Id ou Nome do pokemon"
                        // keyboardType="numeric"
                    /> 
                </View>

                {/* <Button  title="Ir para Login" onPress={goToLoginScreen}>Go to Login Screen</Button> */}
                
                {/* Componentes Padõres */}
            </ScrollView>
            {
                statusLoader && 
                <Components.LoaderGeral />
            }

        </SafeAreaView>
    )
}

export default Screen;