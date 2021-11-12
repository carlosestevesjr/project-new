import React , { useEffect, useRef, useState } from 'react';

import _ from 'lodash'
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

//Styles
import styles from './Styles';

const LoaderGeral = () => {

    const animation = useRef(null);

    //Cicle Life
    useEffect(() => {
        animation.current.play();
    })
    
    return (
        <View style={styles.sampleStyle} >
            <LottieView
                ref={animation}
                source={require('./../../assets/lottie/loader-geral.json')}
                loop
            />
        </View>
    )
   
}

export default LoaderGeral