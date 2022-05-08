import React , { useEffect, useRef, useState } from 'react';

import _ from 'lodash'
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

//Styles
import styles from './Styles';

const MontaAnimationLottie = (props) => {

    const animation = useRef(null);
  
    //Cicle Life
    useEffect(() => {
        animation.current.play();
    })
    
    return (
        <View >
            <LottieView
                style={styles.sampleStyle}
                ref={animation}
                source={props.nameLottie}
                loop
            />
        </View>
    )
   
}

export default MontaAnimationLottie