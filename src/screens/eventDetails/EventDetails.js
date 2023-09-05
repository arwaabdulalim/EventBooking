import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import CustomHeader from '../../components/customHeader/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../themes/colors';
import MainButton from '../../components/mainButton/MainButton';
import EventLabel from '../../components/enventLabel/EventLabel';
import {calcHeight} from '../../helpers/styles/responsive-helper.service';
import {useSelector} from 'react-redux';

const EventDetails = () => {
  const route = useRoute();
  const {eventId} = route.params;

  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {auth} = useSelector(state => state);
  const token = auth?.user?.jwt;

  const getEvents = async () => {
    try {
      const response = await fetch(
        `https://useful-sharing-fa87aa449a.strapiapp.com/api/event-details/${eventId}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  };

  const handleJoinEvent = async () => {
    fetch('https://useful-sharing-fa87aa449a.strapiapp.com/api/user-bookings', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          users_permissions_user: '1',
          event_details: [events?.data?.id],
        },
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json?.data) {
          Alert.alert('Success', 'Event joined successfully');
          navigation.navigate('Dashboard');
        } else {
          Alert.alert('Error', 'Error joining event');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CustomHeader arrowColor="white" />,
    });
  }, [navigation]);

  const renderItem = ({item}) => {
    return (
      <EventLabel iconName={item.iconName} title={item[0]} value={item[1]} />
    );
  };

  const fetchData = async () => {
    try {
      const eventsData = await getEvents();
      setEvents(eventsData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const joinEvent = async () => {
    try {
      handleJoinEvent();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={{uri: events?.data?.attributes?.imageUrl}}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>
            {events?.data?.attributes?.name}
          </Text>
          <FlatList
            scrollEnabled={false}
            data={
              events?.data?.attributes &&
              Object.entries(events?.data?.attributes)
            }
            renderItem={renderItem}
            keyExtractor={item => item}
          />
          <MainButton
            onPress={joinEvent}
            style={styles.button}
            title="Join Event"
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default EventDetails;
