import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {flex: 1},
  termsTxtView: {
    width: 291,
    height: 36,
    backgroundColor: 'red',
    flexDirection: 'row',
    marginLeft: 26,
    marginTop: 17,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  termsTxt: {
    fontFamily: 'Inter-Medium',
    fontSize: calcFont(12),
    color: colors.black,
  },
  textStyle: {
    color: colors.black,
    paddingLeft: calcWidth(62),
    paddingRight: calcWidth(32),
  },
  alreadyTxt: {
    marginVertical: calcHeight(19),
    fontFamily: 'Inter-Bold',
    color: colors.mediumLight,
    fontSize: calcFont(13),
  },
  signUpButton: {
    marginVertical: calcHeight(20),
  },
  errorMsg: {
    color: 'red',
    fontSize: 14,
    marginHorizontal: calcWidth(34),
    marginVertical: 5,
  },
});
export default styles;
