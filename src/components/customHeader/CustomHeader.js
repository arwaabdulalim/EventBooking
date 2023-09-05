import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const CustomHeader = ({ arrowColor }) => { 
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const arrowImageSource = arrowColor
  ? arrowColor === 'white'
  ? require('../../assets/images/arrow-left-white.png')
  : require('../../assets/images/arrow-left-black.png')
: null;

if (!arrowImageSource) {
  return null;
}
  return (
    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
      <Image
        source={arrowImageSource}
        style={styles.backButtonImage}
      />
    </TouchableOpacity>
  );
};

export default CustomHeader;
