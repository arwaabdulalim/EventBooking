import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: calcWidth(15),
    width: calcWidth(315),
    height: Platform.OS === 'ios' ? calcHeight(53) : calcHeight(60),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: 'Inter',
    fontSize: calcFont(15),
    fontWeight: '700',
    lineHeight: calcHeight(22),
  },
});

export default styles;
