import React , { useState, useEffect } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';

import _ from 'lodash'

import { useSelector, useDispatch } from 'react-redux';
import { buscaPokemon } from '../../redux/slices/pokemonSlice'

import styles from './Styles';


const Screen = ({ navigation }) => {

    const [namePokemon, setNamePokemon] = useState(null);


    const dispatch = useDispatch()

    useEffect(() => {
        
    });
    
    const goToLoginScreen = () => navigation.navigate('Login');

    const clickBuscar = () => dispatch(
        buscaPokemon(
            { 
                params:{
                    id:namePokemon,
                } 
            } 
        ) 
    );

    const pokemon = useSelector((state) => state.pokemon.single)
    // console.log('pokemon', pokemon)
    
    return (
        <View style={styles.sampleStyle}>
            <Text>HOME </Text>
            {
                !_.isEmpty(pokemon) && 
                <Text>Nome Pokemon : { pokemon } </Text>
            }
            <TextInput
                style={styles.input}
                onChangeText={setNamePokemon}
                value={namePokemon}
                placeholder="Id ou Nome do pokemon"
                // keyboardType="numeric"
            />

            <Button  title="Buscar" onPress={() => clickBuscar()}></Button>
            {/* <Button  title="Ir para Login" onPress={goToLoginScreen}>Go to Login Screen</Button> */}
        </View>
    )
}

export default Screen;