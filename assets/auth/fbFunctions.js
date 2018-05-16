import React from 'react';
import {Alert} from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';


const FB_APP_ID = '639131359759717'

export async function FBlogIn() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
      permissions: ['public_profile'] // TODO: Add 'user_events' after app review
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);

    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name()}!`,
    );

    //Build Firebase Credentials
    /*
    const credential = firebase.auth.FacebookAuthProvider.credential(token)
    firebase.auth().signInWithCredential(credential).catch((error) =>{
      console.log(error)
    })
    */
    //return(response.json()) //This is stil in the if statement btw
  }
}
