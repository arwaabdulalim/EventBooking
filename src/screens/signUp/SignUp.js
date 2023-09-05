import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {signup, clearError, login} from '../../config/Redux/slices/auth';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import colors from '../../themes/colors';
import InputField from '../../components/inputField/inputField';
import MainButton from '../../components/mainButton/MainButton';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required.'),
    email: Yup.string().email('Invalid email').required('Email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(6, 'Password must be at least 6 characters.'),
  });

  const [showPassword, setShowPassword] = useState(false);
  const isLoading = false;
  const error = false;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputFieldsData = [
    {id: '1', name: 'name', placeholder: 'Name'},
    {id: '2', name: 'email', placeholder: 'Email'},
    {
      id: '3',
      name: 'password',
      placeholder: 'Password',
      icon: showPassword ? 'eye-off-outline' : 'eye-outline',
    },
  ];

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSignUp = async values => {
    fetch(
      'https://useful-sharing-fa87aa449a.strapiapp.com/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.name,
          email: values.email,
          password: values.password,
        }),
      },
    )
      .then(response => response.json())
      .then(json => {
        if (json.jwt) {
          dispatch(login(json));
        } else {
          Alert.alert(json?.error?.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View>
            <FlatList
              scrollEnabled={false}
              data={inputFieldsData}
              renderItem={({item}) => (
                <View>
                  <InputField
                    id={item.id}
                    placeholder={item.placeholder}
                    icon={item.icon}
                    placeholderTextColor={colors.mediumLight}
                    value={values[item.name]}
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    secureTextEntry={item.name === 'password' && !showPassword}
                    onPress={
                      item.name === 'password'
                        ? togglePasswordVisibility
                        : undefined
                    }
                  />
                  {touched[item.name] && errors[item.name] && (
                    <Text style={styles.errorMsg}>{errors[item.name]}</Text>
                  )}
                </View>
              )}
              keyExtractor={item => item.id}
            />
            <MainButton
              title="Sign Up"
              style={styles.signUpButton}
              onPress={handleSubmit}
              disabled={isLoading}
            />
            {isLoading && <ActivityIndicator />}
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.alreadyTxt}>
                Already have an account?
                <Text
                  onPress={() => navigation.navigate('Login')}
                  style={[
                    styles.alreadyTxt,
                    {
                      color: colors.primary,
                      textDecorationLine: 'underline',
                      fontWeight: 'bold',
                    },
                  ]}>
                  {` Login`}
                </Text>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
