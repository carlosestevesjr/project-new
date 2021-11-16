import React , { useEffect, useRef, useState } from 'react';

import _ from 'lodash'
import { View, Text } from 'react-native';

//Styles
import styles from './Styles';

const Header = ({ navigation, route, options, back }) => {

    return (
        <View style={styles.sampleStyle} >
            <Text >Test</Text>
        </View>
    )
   
}

export default Header