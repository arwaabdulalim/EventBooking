import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {
  calcHeight,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventList: {
    paddingHorizontal: 20,
  },

  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
