import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const EventCard = ({item, navigation}) => {
  useEffect(() => {
  }, []);
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('EventDetails', {eventId: item.id});
      }}>
      <Image
        source={{uri: item.attributes.imageUrl}}
        style={styles.eventImage}
      />
      <View>
        <Text style={styles.eventTitle}>{item.attributes.name}</Text>
        <Text style={styles.eventDate}>{item.attributes.date}</Text>
        <Text style={styles.eventPrice}>{item.attributes.price}</Text>
        <Text style={styles.eventLocation}>{item.attributes.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
