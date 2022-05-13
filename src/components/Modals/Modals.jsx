import React from 'react'
import { View, Text, Modal, Pressable } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from 'react-native-elements'
import { alteraModalDisclemer } from '../../redux/slices/geralPersistSlice'

// import { 
// 	BoxedIcon 
// } from '../Icon/index'
import {
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer'
import {
	Drawer,
} from 'react-native-paper'

//Dispatchs
import { useSelector, useDispatch } from 'react-redux';

//Styles
import styles from './Styles';

import theme, { primary500, light, background} from '../../theme/index'

const ModalsContent = (props,  {children}) => {
    
    const { navigation } = props
    
    const dispatch = useDispatch()
    const fecharModal = (open) => {
        dispatch(
            alteraModalDisclemer(
                {
                    open: open,
                }
            ),
        )
    }

    const modalDisclemer = useSelector((state) => {
        return state.geral_persist.modalDisclemer.open
    } )

	return (
        <View>
            {children}
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalDisclemer}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTextDestaque}>
                                Oi, que legal ver você aqui, antes de começar gostaria de pontuar algumas coisas:
                            </Text>
                        
                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>
                                    Produtor de conteúdo: &nbsp;
                                </Text>
                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.modalTextBold}>
                                    Usuário: &nbsp;
                                </Text>
                                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <View style={styles.buttonContent}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => fecharModal(false)}
                                >
                                    <Text style={styles.textStyle}>Entendido</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            {/* <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => fecharModal(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable> */}

		</View>
	)
}

export default ModalsContent
