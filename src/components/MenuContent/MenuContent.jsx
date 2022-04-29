import React from 'react'
import { View, Text } from 'react-native'
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
                    <Text style={[styles.cabecalhoTitle]}>MEU HYPE</Text>
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

// import React from 'react'
// import { View } from 'react-native'
// import styles from './styles'
// import { 
// 	BoxedIcon 
// } from '../Icon'
// import {
// 	DrawerContentScrollView,
// 	DrawerItem,
// } from '@react-navigation/drawer'
// import {
// 	Drawer,
// } from 'react-native-paper'

// export function MenuContent(props) {

// 	const { navigation } = props

// 	return (
// 		<View style={[styles.menuContent]}>
// 			<DrawerContentScrollView {...props}>
// 				<Drawer.Section style={[styles.bottomDrawerSection]}>
// 					<DrawerItem
// 						label={"Home"}
// 						onPress={() => { 
// 							navigation.closeDrawer()
// 							navigation.navigate('Home') 
// 						}}
// 						icon={() => <BoxedIcon iconName="clover" />}//home-outline
// 						labelStyle={styles.drawerItemLabel}
// 						style={styles.drawerItem}
// 					/>
// 					<DrawerItem
// 						label="Estatisticas"
// 						onPress={() => { 
// 							navigation.navigate('Statistics') 
// 						}}
// 						icon={() => <BoxedIcon iconName="poll"/>}
// 						style={styles.drawerItem}
// 						labelStyle={styles.drawerItemLabel}
// 					/>
// 					<DrawerItem
// 						label="Concursos"
// 						onPress={() => { 
// 							navigation.navigate('Contests') 
// 						}}
// 						icon={() => <BoxedIcon iconName="table-large"/>}
// 						style={styles.drawerItem}
// 						labelStyle={styles.drawerItemLabel}
// 					/>
// 					<DrawerItem
// 						label="Comportamento"
// 						onPress={() => { 
// 							navigation.navigate('NumbersPositions') 
// 						}}
// 						icon={() => <BoxedIcon iconName="table-star"/>}
// 						style={styles.drawerItem}
// 						labelStyle={styles.drawerItemLabel}
// 					/>
// 					<DrawerItem
// 						label="Como jogar"
// 						onPress={() => { 
// 							navigation.navigate('HowToPlay') 
// 						}}
// 						icon={() => <BoxedIcon iconName="help-circle-outline"/>}
// 						style={styles.drawerItem}
// 						labelStyle={styles.drawerItemLabel}
// 					/>
// 					<DrawerItem
// 						label="Contribuição"
// 						onPress={() => { 
// 							navigation.navigate('Contribution') 
// 						}}
// 						icon={() => <BoxedIcon iconName="heart"/>}
// 						style={styles.drawerItem}
// 						labelStyle={styles.drawerItemLabel}
// 					/>
// 				</Drawer.Section>
// 			</DrawerContentScrollView>
// 			{/* <Drawer.Section style={styles.bottomDrawerSection}>
// 				<DrawerItem
// 					label="Sair"
// 					onPress={() => {}}
// 					icon={() => <BoxedIcon iconName="exit-to-app"/>}
// 					style={styles.drawerItem}
// 					labelStyle={styles.drawerItemLabel}
// 				/>
// 			</Drawer.Section> */}
// 		</View>
// 	)
// }