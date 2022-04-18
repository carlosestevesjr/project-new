import React from 'react';
import styles from './styles'

import { View, Text } from 'react-native'

const Card = ({children, title}) => {
  return (
      <View style={[styles.container]} >
          {children}
      </View >
  )
}

export default Card