import { AsyncStorage } from 'react-native';

import {
    FACEBOOK_LOGIN_SUCCESS
} from './types';

export const facebookLogin = async dispacth => {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        // Dispacth an action saying FB login is done
    } else {
        // Start up FB Login Process
    }
};