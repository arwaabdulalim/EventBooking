import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
} from '../../helpers/styles/responsive-helper.service';

const styles = {
  card: {
    borderWidth: 2,
    borderColor: colors.lightgray,
    borderRadius: 8,
    padding: 10,
    marginTop: calcHeight(20),
  },
  eventImage: {
    width: '100%',
    height: calcHeight(120),
    borderRadius: 8,
    marginBottom: calcHeight(10),
  },
  eventTitle: {
    color: colors.dark,
    fontSize: calcFont(15),
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Inter-Bold',
  },
  eventDate: {
    color: colors.mediumLight,
    fontSize: calcFont(12),
    fontFamily: 'Inter-Medium',
  },
  eventPrice: {
    color: colors.primary,
    fontSize: calcFont(13),
    marginTop: calcHeight(5),
    fontFamily: 'Inter-Medium',
  },
  eventLocation: {
    color: colors.mediumLight,
    fontSize: calcFont(12),
    fontFamily: 'Inter-Medium',
  },
};
export default styles;
