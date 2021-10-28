import React from 'react';
import { Button, Text, View } from 'react-native';

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../../redux/slices/sampleSlice'
// import { Block } from 'galio-framework';

import styles from './Styles';

const Screen = ({ navigation }) => {

    const goToLoginScreen = () => navigation.navigate('Login');
    
    return (
        <View style={styles.sampleStyle}>
            <Text>HOME </Text>
            <Button  title="Ir para Login" onPress={goToLoginScreen}>Go to Login Screen</Button>
        </View>
    )
}

export default Screen;