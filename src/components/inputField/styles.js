import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.baseLight,
    borderRadius: 16,
    flexDirection: 'row',
    marginTop: calcHeight(22),
    marginBottom: 12,
    width: calcWidth(315),
    height: calcHeight(50),
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'flex-end',
    top: Platform.OS === 'ios' ? calcHeight(15) : calcHeight(11),
    right: calcWidth(40),
    marginRight: 12,
    color: colors.mediumLight,
  },
  text: {
    fontSize: calcFont(12),
    paddingLeft: 20,
    width: '100%',
  },
  forgotPass: {
    fontFamily: 'Inter',
    fontSize: calcFont(12),
    color: colors.medium,
    alignSelf: 'flex-end',
    marginRight: 25,
  },
});

export default styles;
