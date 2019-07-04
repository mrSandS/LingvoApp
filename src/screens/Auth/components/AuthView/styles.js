import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from '@styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  logoText: {
    fontSize: 40,
    textAlign: 'center',
    color: AppColors.MAIN,
    fontFamily: AppFonts.LOGO,
  },
});