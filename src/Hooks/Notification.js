import { Platform } from 'react-native'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';
import { API }   from '../services/api'

export default function usePushNotification () {

	Notifications.setNotificationHandler({
	  handleNotification: async () => ({
	    shouldShowAlert: true,
	    shouldPlaySound: false,
	    shouldSetBadge: false,
	  }),
	});

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  useEffect(() => {
    registerForPushNotificationsAsync()
    .then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
        });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    
    salvarTokenNotificacao(token);

  } else {
    console.log('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

async function salvarTokenNotificacao(token) {
    console.log('token notification', token )

    try {
        const { setTokenPush } = API
        
        params = {
            "token": token,
            "platform": Platform.OS
        }

        payload = {
            token:'',
            params
        }
        const resp = await setTokenPush(payload)
        // console.log('retorno',resp)
        if(resp.status == 200) {
          console.log(resp.data);
        }

    } catch (error) {
        console.log('errou token insert')
        console.log(error)
        // dispatch(loginFailed());
    }

    return false
}