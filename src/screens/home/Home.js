import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import EventCard from '../../components/eventCard/EventCard';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../components/customHeader/CustomHeader';
import styles from './styles';
import colors from '../../themes/colors';

import {useSelector} from 'react-redux';

const Home = () => {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {auth} = useSelector(state => state);
  const token = auth?.user?.jwt;

  const getEvents = () => {
    return fetch(
      'https://useful-sharing-fa87aa449a.strapiapp.com/api/event-details',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        return json;
      });
  };

  useEffect(() => {
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

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <EventCard item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          style={styles.eventList}
          data={events.data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
