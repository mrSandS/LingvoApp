import {StyleSheet, Platform} from "react-native";
import {AppSizes, AppColors, AppFonts} from '@styles';

const LOGO_AREA_FLEX = 0.5;
const SIGN_UP_BUTTON_AREA_FLEX = 0.2;
const SIGN_IN_TEXT_AREA_FLEX = 0.1;
const SOCIAL_BUTTONS_AREA_FLEX = 1;

export const FACEBOOK_ICON_SIZE = 30;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  logoArea: {
    flex: LOGO_AREA_FLEX,
  },
  signUpButtonArea: {
    flex: SIGN_UP_BUTTON_AREA_FLEX
  },
  signUpButtonContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
  },
  signUpButton: {
    width: 300,
    height: 50,
    backgroundColor: 'transparent'
  },
  signUpButtonText: {
    color: AppColors.SECONDARY_BOLD,
    fontFamily: AppFonts.SEMI_BOLD
  },
  signInTextArea: {
    flex: SIGN_IN_TEXT_AREA_FLEX,
  },
  signInButton: {
    backgroundColor: 'transparent'
  },
  signInAreaText: {
    fontSize: AppSizes.TEXT_MEDIUM,
    color: AppColors.SECONDARY_MEDIUM,
  },
  signInButtonText: {
    fontSize: AppSizes.TEXT_POST_MEDIUM,
    color: AppColors.MAIN,
    fontFamily: AppFonts.SEMI_BOLD,
    marginLeft: 4,
  },
  socialButtonsArea: {
    flex: SOCIAL_BUTTONS_AREA_FLEX
  },
  socialButtonContainer: {
    marginVertical: 8,
    borderRadius: 20,
  },
  socialButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 240,
    height: 50
  },
  socialButtonText: {
    color: AppColors.SECONDARY_BOLD,
    fontSize: AppSizes.TEXT_PRE_MEDIUM,
    fontFamily: AppFonts.REGULAR,
    marginHorizontal: 10
  },
  googleButtonImage: {
    width: 40,
    height: 40,
  }
});