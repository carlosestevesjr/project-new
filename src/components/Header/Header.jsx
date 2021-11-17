import React , { useEffect, useRef, useState } from 'react';

import _ from 'lodash'
import { View, Text } from 'react-native';

//Styles
import styles from './Styles';

const Header = (props) => {
 
    // console.log('Teste props', props)
    return (
        <View style={styles.sampleStyle}>
            <Text style={styles.title}>{props.children}</Text>
        </View>
    )
   
}

export default Header