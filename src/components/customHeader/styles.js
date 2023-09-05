import { StyleSheet} from 'react-native'
import { calcHeight, calcWidth } from '../../helpers/styles/responsive-helper.service';


const styles = StyleSheet.create({
    backButton: {
      marginLeft: 10,
    },
    backButtonImage: {
      width: calcWidth(32),
      height: calcHeight(32),
    },
  });

  export default styles
