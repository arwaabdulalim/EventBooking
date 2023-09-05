import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {flex: 1},
  loginButton: {
    marginVertical: calcHeight(40),
  },
  signupTxtView: {flexDirection: 'row', alignSelf: 'center'},
  noAccountTxt: {
    fontSize: calcFont(14),
    alignSelf: 'center',
    fontFamily: 'Inter-bold',
    color: colors.mediumLight,
  },
  signupTxt: {
    fontSize: calcFont(14),
    color: colors.primary,
    fontFamily: 'Inter-Bold',
    textDecorationLine: 'underline',
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: calcWidth(34),
    marginVertical: 5,
  },
});

export default styles;
