import React, {useEffect, useState} from 'react';
import { WebView } from 'react-native-webview'
import { Image, View, Share,  TouchableOpacity, Text, Linking } from 'react-native'
import { Icon } from 'react-native-elements'
import Components from './../../components'

import styles from './Styles';

const Screen = ({ navigation, route }) => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
		abri_webview()
	},[])

    const loadShow = () => {
		return (
			<View style={styles.containerLoader}>
				<Image
					style={styles.containerLoaderImage}
					source={require('../../assets/images/commons/loader.gif')}
				/>
				<Text style={styles.containerLoaderText} >Carregando...</Text>
			</View>
		)
	}

    const abri_webview = () => {
        return	<WebView
                   style={styles.web}
                    javaScriptEnabled={true}
                    domStorageEnabled={false}
                    source={{uri:route.params.url}}
                    renderLoading={loadShow} 
                    startInLoadingState={true}  
                />
    }

    const onShare = async (title, url) => {
		try {
			const result = await Share.share({
				title: 'No Cinema',
				message: 'Compartilhado por No Cinema \n'+ route.params.title  + '\n '+route.params.url, 
				url: 'app://deeplink'
			});
			if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
			} else if (result.action === Share.dismissedAction) {
			// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	}
    
    // const goToLoginScreen = () => navigation.navigate('Login');
    
    // const count = useSelector((state) => state.sample.value)
    // const dispatch = useDispatch()
    
    return (
        <Components.Container title="home">
            <View
                style={styles.container}
            >
                { abri_webview() }
                <View style={styles.boxBottons} >
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={()=> navigation.goBack() }  
                    >
                        <Icon
                            iconStyle={{ padding : 10, width:39, borderRadius:50,backgroundColor:'#dc3545',color:'#FFF'}}
                            name='chevron-left'
                            type='font-awesome'
                            color='#390147'
                            size={18}  
                        />
                    
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => onShare(route.params.title, route.params.link) }
                    >
                        <Icon
                            iconStyle={{ padding : 10, width:39, borderRadius:50,backgroundColor:'#FFF',color:'#290133'}}
                            name='share-alt'
                            type='font-awesome'
                            color='#290133'
                            size={18}  
                        />
                    
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={()=> Linking.openURL(route.params.url)}  
                    >
                        <Icon
                            // raised
                            iconStyle={{ padding : 10, width:39, borderRadius:50,backgroundColor:'#35b653',color:'#FFF'}}
                            name='external-link'
                            type='font-awesome'
                            color='#390147'
                            size={18}  
                        />
                    
                    </TouchableOpacity>
                </View>
            </View>
        </Components.Container>
		
	)
}

export default Screen;

