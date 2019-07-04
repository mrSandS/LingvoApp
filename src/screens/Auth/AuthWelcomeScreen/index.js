// @flow

import React, {Component} from 'react';
import {AppStyles, AppColors} from '@styles';
import styles, {FACEBOOK_ICON_SIZE} from './styles';
import {TouchableOpacity, View, Image} from 'react-native';
import Text from '@components/Text';
import AuthView from '../components/AuthView';
import { Button } from 'react-native-elements';
import GOOGLE_LOGO from '@assets/images/google_logo.png';

type Props = {

};
export default class AuthWelcomeScreen extends Component<Props> {
  render() {
    return (
      <AuthView logoAreaStyle={styles.logoArea}>

        <View style={[AppStyles.columnEnd, styles.signUpButtonArea]}>
          <Button
            title='Create Account'
            raised
            buttonStyle={styles.signUpButton}
            containerStyle={styles.signUpButtonContainer}
            titleStyle={styles.signUpButtonText}
          />
        </View>

        <View style={[AppStyles.rowCenter, styles.signInTextArea]}>
          <Text style={styles.signInAreaText}>Already have an account?</Text>
          <TouchableOpacity children={<Text style={styles.signInButtonText}>Sign in</Text>} />
        </View>

        <View style={[AppStyles.columnCenter, styles.socialButtonsArea]}>
          <Button
            title='Sign in with Facebook'
            raised
            icon={{type: 'font-awesome', name: 'facebook-f', color: AppColors.FACEBOOK, size: FACEBOOK_ICON_SIZE}}
            containerStyle={styles.socialButtonContainer}
            buttonStyle={styles.socialButton}
            titleStyle={styles.socialButtonText}
          />
          <Button
            containerStyle={styles.socialButtonContainer}
            raised
            ViewComponent={() => (
              <View style={[AppStyles.rowCenter, styles.socialButton]}>
                <Image
                  source={GOOGLE_LOGO}
                  style={styles.googleButtonImage}
                />
                <Text style={styles.socialButtonText}>Sign in with Google</Text>
              </View>
            )}
          />
        </View>
      </AuthView>
    );
  }
}
