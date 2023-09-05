import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../themes/colors';
import styles from './styles';

const EventLabel = ({title, value}) => {
  const excludedFields = [
    'id',
    'price',
    'location',
    'description',
    'capacity',
    'spots',
    'date',
    'speakers',
  ];

  const iconMapping = {
    id: 'plus',
    price: 'currency-usd',
    location: 'map-marker',
    description: 'text',
    capacity: 'account-group',
    spots: 'seat',
    date: 'calendar',
    speakers: 'microphone',
  };

  if (excludedFields.includes(title)) {
    const iconName = iconMapping[title];

    return (
      <View style={styles.detailWrapper}>
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={colors.primary}
        />
        <Text
          style={[
            styles.eventDetail,
            {color: colors.dark, fontFamily: 'Inter-Bold'},
          ]}>
          {title}:
        </Text>
        <Text style={styles.eventDetail}>{value}</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default EventLabel;
