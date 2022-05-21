import React, { useEffect, useState } from 'react';

import { WebView } from 'react-native-webview'
import { Image, View, Share, TouchableOpacity, Text, Linking, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import Components from './../../components'

import MontaAnimationLottie from './../../components/MontaAnimationLottie/MontaAnimationLottie'

import { formataDataBr } from '../../utils/index'

//Config
import Config from '../../config'

import styles from './Styles';

const Screen = ({ navigation, route }) => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        // console.log('dsdsadas', route.params)
       
            abri_webview()
    
    }, [])

    const typeImage = (image, channel_type) => {
        return Config.LOCAL_HOST_NOCINEMA + image
    }

    const createButtonAlert = () =>
        Alert.alert(
            "Alerta Podcast",
            "Não foi possivel abrir este conteúdo dentro do Meu Hype, vamos direcioná-lo ao site original.",
            [
                {
                    text: "Cancelar",
                    onPress: () => navigation.goBack(),
                    style: "cancel"
                },
                { text: "OK", onPress: () => Linking.openURL(route.params.url).catch((err) => console.error('An error occurred', err)) }
            ]
        );

    const loadShow = () => {
        return (
            <View style={styles.containerLoader}>
                <MontaAnimationLottie nameLottie={require("../../assets/lottie/animation-1.json")} />
                {/* <Image
                    style={styles.containerLoaderImage}
                    source={require('../../assets/images/commons/loader.gif')}
                />
                <Text style={styles.containerLoaderText} >Carregando...</Text> */}
            </View>
        )
    }

    const abri_webview = () => {
        navigation.addListener('focus', () => {
            // if (route.params.type === "podcast") {
            //     return (
            //         conteudoCard()
            //     )
            // } else {
                return <WebView
                    style={styles.web}
                    javaScriptEnabled={true}
                    domStorageEnabled={false}
                    source={{ uri: route.params.url }}
                    renderLoading={loadShow}
                    startInLoadingState={true}
                    showDialog={false}
                    useWebKit={true}
                />
            // }
        });


        // if (route.params.type === "podcast") {
        //     createButtonAlert()
        //     return (conteudoCard())
        // } else {
            return (<WebView
                style={styles.web}
                javaScriptEnabled={true}
                domStorageEnabled={false}
                source={{ uri: route.params.url }}
                renderLoading={loadShow}
                startInLoadingState={true}
                showDialog={false}
                useWebKit={true}
            />
            )
        // }
    }

    const conteudoCard = () => {
        return (
            <Components.Card >
                <View style={styles.boxNews}>
                    <View style={styles.news}>
                        <View style={styles.containerChannel}>
                            <TouchableOpacity
                                style={styles.newsChannelLogo}
                            >
                                <Image
                                    style={styles.newsChannelImage}
                                    resizeMode={'contain'}
                                    source={{
                                        uri: Config.LOCAL_HOST_NOCINEMA + route.params.data.channel_logo,
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerChannelName} >
                                <Text style={styles.ChannelName}>
                                    {route.params.data.channel}
                                    -{route.params.data.id}
                                </Text>
                                <Text style={styles.newsData} >
                                    {formataDataBr(route.params.data.data)}
                                </Text>
                                {
                                    route.params.data.channel_type == "podcast" &&
                                    <View style={styles.newsTypeMedia} >
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require('../../assets/images/commons/type_podcast.png')}
                                        />
                                    </View>
                                }
                                {
                                    route.params.data.channel_type == "site" &&
                                    <View style={styles.newsTypeMedia} >
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require('../../assets/images/commons/type_site.png')}
                                        />
                                    </View>
                                }
                                {
                                    route.params.data.channel_type == "youtube" &&
                                    <View style={styles.newsTypeMedia} >
                                        <Image
                                            style={{ width: 25, height: 25 }}
                                            source={require('../../assets/images/commons/type_youtube.png')}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.newsContainerBanner}
                        >
                            <View style={styles.newsBanner}>
                                <Image
                                    style={styles.newsBannerImage}
                                    resizeMode={'contain'}
                                    source={{
                                        uri: typeImage(route.params.data.image, route.params.data.channel_type),
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.newsTitle}>
                            <Text style={styles.newsDescricao}>
                                {route.params.data.title}
                            </Text>
                        </View>
                    </View>
                </View>
            </Components.Card>
        )
    }

    const onShare = async (title, url) => {
        try {
            const result = await Share.share({
                title: 'No Cinema',
                message: 'Compartilhado por No Cinema \n' + route.params.title + '\n ' + route.params.url,
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
                {abri_webview()}
                <View style={styles.boxBottons} >
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            iconStyle={{ padding: 10, width: 39, borderRadius: 50, backgroundColor: '#dc3545', color: '#FFF' }}
                            name='chevron-left'
                            type='font-awesome'
                            color='#390147'
                            size={18}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => onShare(route.params.title, route.params.link)}
                    >
                        <Icon
                            iconStyle={{ padding: 10, width: 39, borderRadius: 50, backgroundColor: '#FFF', color: '#290133' }}
                            name='share-alt'
                            type='font-awesome'
                            color='#290133'
                            size={18}
                        />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => Linking.openURL(route.params.url)}
                    >
                        <Icon
                            // raised
                            iconStyle={{ padding: 10, width: 39, borderRadius: 50, backgroundColor: '#35b653', color: '#FFF' }}
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

