import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text , Image} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native';
import styles from './styles'

import { gradientStart, gradientEnd } from '../../theme/index'

//Dispatchs
import { useSelector } from 'react-redux';

import MontaAnimationLottie from './../../components/MontaAnimationLottie/MontaAnimationLottie'

const Container = ({ children, title }) => {

    const statusLoader = useSelector((state) =>  state.geral.loaderGeral.open )

    return (
        <>
            <LinearGradient
                style={[styles.container]}
                colors={[gradientStart, gradientEnd]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 1 }}
            >
                <SafeAreaView  style={[styles.safeArea]}>
                    {children}
                    {
                        (statusLoader) && 
                        <View style={styles.containerLoader}>
                            <MontaAnimationLottie nameLottie={require("../../assets/lottie/animation-1.json")} />
                        </View>
                    }   
                </SafeAreaView>
            </LinearGradient >
        </>

    )
}

export default Container