import React from 'react'
import { View, Text, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icon } from 'react-native-elements'

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

//Styles
import styles from './Styles';

import theme, { primary500, light, background} from '../../theme/index'

const MenuContent = (props) => {
 
    const { navigation } = props

	return (
		<View style={[styles.menuContent]}>
			<DrawerContentScrollView {...props}>
                <View style={[styles.cabecalho]}>
                    <View style={[styles.cabecalhoTitle]}>
                        <Image
                            resizeMode={'cover'}
                            source={require('../../assets/images/commons/logo_clear.png')}
                        />
                    </View>
                </View>
				<Drawer.Section style={[styles.bottomDrawerSection]}>
					<DrawerItem
						label={"Home"}
						onPress={() => { 
							navigation.navigate('Home') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='home'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>
                    <DrawerItem
						label={"Canais"}                                                                                                                                                                                                                                                                                                                                                                                                            
						onPress={() => { 
							navigation.navigate('Canais') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='desktop'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>
                    <DrawerItem
						label={"Tags"}                                                                                                                                                                                                                                                                                                                                                                                                            
						onPress={() => { 
							navigation.navigate('Tags') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='hashtag'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>
                    <DrawerItem
						label={'Buscar Notícias'}                                                                                                                                                                                                                                                                                                                                                                                                            
						onPress={() => { 
							navigation.navigate('Buscar Notícias') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='search'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>

                    
                    <DrawerItem
						label={'Doação'}                                                                                                                                                                                                                                                                                                                                                                                                            
						onPress={() => { 
							navigation.navigate('Donation') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='heart'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>
                     <DrawerItem
						label={'Contato'}                                                                                                                                                                                                                                                                                                                                                                                                            
						onPress={() => { 
							navigation.navigate('Contato') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='envelope'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>
                    <DrawerItem
						label={'Sobre'}                                                                                                                                                                                                                                                                                                                                                                                                            
						onPress={() => { 
							navigation.navigate('Sobre') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='info-circle'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/>
                    <DrawerItem
						label={"Login"}
						onPress={() => { 
							navigation.navigate('Login') 
						}}
						icon={() =>	<Icon
                                iconStyle={{ padding : 10, borderRadius:10, backgroundColor:background, color:primary500}}
                                name='home'
                                type='font-awesome'
                                color={light}
                                size={theme.sizes.extraSmall}  
                            />
                        } //home-outline
						labelStyle={styles.drawerItemLabel}
						style={styles.drawerItem}
					/> 
				</Drawer.Section>
			</DrawerContentScrollView>
		</View>
	)
}

export default MenuContent
