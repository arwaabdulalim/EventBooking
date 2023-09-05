import {StyleSheet, Platform} from 'react-native';
import colors from '../../themes/colors';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
  },
  title: {
    fontSize: calcFont(22),
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: calcHeight(70),
    alignSelf: 'center',
  },
  eventList: {
    flexGrow: 1,
    marginTop: calcHeight(35),
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: calcHeight(18),
    padding: 10,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  eventImage: {
    width: calcWidth(80),
    height: calcHeight(80),
    borderRadius: 10,
  },
  eventDetails: {
    marginLeft: calcWidth(10),
  },
  eventTitle: {
    fontSize: calcFont(14),
    fontWeight: 'bold',
    color: colors.dark,
  },
  eventDate: {
    color: colors.mediumLight,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
