import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { View } from 'react-native'

const DefaultIcon = ({iconName, color, size, style}) => {

	return (
		<Icon
			name={iconName}
			size={60}
            color="#900"
		/>
	)
}

const BoxedIcon = ({iconName, color, size}) => {

	return (
		<View style={styles.blocoDefaultIcon}>
			<DefaultIcon
				iconName={iconName}
                size={60}
                color="#900"
			/>
		</View>
	)
}

export {
	DefaultIcon,
	BoxedIcon
}


