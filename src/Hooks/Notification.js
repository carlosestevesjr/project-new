import { Platform } from 'react-native'
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { useState, useEffect, useRef } from 'react';
import { Request } from '@services';

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
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

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

function salvarTokenNotificacao(token) {

    return Request('post','/notificacao/set-token?t='+token, {os: Platform.OS})
          .then(res => {
          }).catch(function(e) {
              throw e.message;
          })
}