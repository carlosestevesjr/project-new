import React from 'react';
import { Button, Text, View } from 'react-native';

// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../../redux/slices/sampleSlice'
// import { Block } from 'galio-framework';

import styles from './Styles';

const Screen = ({ navigation }) => {

    const goToHomeScreen = () => navigation.navigate('Home');
    
    return (
        <View style={styles.base}>
            <Text>LOGIN </Text>
            <Button  title="Ir para Home" onPress={goToHomeScreen}>Go to Home Screen</Button>
        </View>
    )
}

export default Screen;