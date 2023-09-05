import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import colors from '../../themes/colors';
import styles from './styles';
import CustomHeader from '../../components/customHeader/CustomHeader';

const Dashboard = () => {
  const navigation = useNavigation();
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {auth} = useSelector(state => state);
  const token = auth?.user?.jwt;
  const fetchRegisteredEvents = async () => {
    try {
      const response = await fetch(
        'https://useful-sharing-fa87aa449a.strapiapp.com/api/user-bookings?populate=%2A',
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
        console.error('API Error:', response.status);
        Alert.alert('Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const eventsData = await fetchRegisteredEvents();
      setRegisteredEvents(eventsData.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useFocusEffect(() => {
    fetchData();
  });

  const renderEventItem = ({item}) => {
    const eventData = item.attributes?.event_details?.data[0]?.attributes;
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.eventItem}>
          <Image
            source={{
              uri: eventData?.imageUrl,
            }}
            style={styles.eventImage}
          />
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{eventData?.name}</Text>
            <Text style={styles.eventDate}>{eventData?.date}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Registered Events</Text>
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={registeredEvents ?? []}
          keyExtractor={item => item.id.toString()}
          renderItem={renderEventItem}
          contentContainerStyle={styles.eventList}
        />
      )}
    </View>
  );
};

export default Dashboard;
