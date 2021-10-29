import React from 'react'
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

//Styles
import styles from './Styles';

const LoaderGeral = () => {

    return (
        
        <View style={styles.sampleStyle} >
            <LottieView
                source={require('./../../assets/lottie/loader-geral.json')}
                loop
                autoPlay
            />
        </View>
    )
    
}

export default LoaderGeral