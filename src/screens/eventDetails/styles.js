import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: 'white'},
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImage: {
    width: '90%',
    height: calcHeight(160),
    marginTop: Platform.OS === 'ios' ? calcHeight(15) : calcHeight(65),
    marginBottom: calcHeight(15),
    borderRadius: 30,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: colors.dark,
    marginBottom: calcHeight(8),
  },
  detailWrapper: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: calcHeight(10),
  },
  eventDetail: {
    fontSize: calcFont(13),
    fontFamily: 'Inter-Medium',
    color: colors.darkblue,
    marginLeft: calcWidth(10),
  },
  button: {
    width: '65%',
    borderRadius: 40,
    marginTop: calcHeight(18),
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
