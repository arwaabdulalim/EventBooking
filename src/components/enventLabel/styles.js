import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  detailWrapper: {
    height: Platform.OS === 'ios' ? calcHeight(28) : calcHeight(30),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? calcHeight(10) : calcHeight(7),
    marginHorizontal: calcWidth(10),
  },
  eventDetail: {
    fontSize: calcFont(13),
    fontFamily: 'Inter-Medium',
    color: colors.darkblue,
    marginLeft: calcWidth(10),
  },
});
export default styles;
