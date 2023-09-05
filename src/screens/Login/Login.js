import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import InputField from '../../components/inputField/inputField';
import MainButton from '../../components/mainButton/MainButton';
import CustomHeader from '../../components/customHeader/CustomHeader';
import colors from '../../themes/colors';
import {signup, clearError, login} from '../../config/Redux/slices/auth';

const Login = ({navigation}) => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(6, 'Password must be at least 6 characters.'),
  });
  const dispatch = useDispatch();

  const {auth} = useSelector(state => state);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputFieldsData = [
    {id: '2', name: 'email', placeholder: 'Email'},
    {
      id: '3',
      name: 'password',
      placeholder: 'Password',
      icon: showPassword ? 'eye-off-outline' : 'eye-outline',
    },
  ];

  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = values => {
    fetch('https://useful-sharing-fa87aa449a.strapiapp.com/api/auth/local', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: values.email,
        password: values.password,
      }),
    })
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
        onSubmit={handleLogin}>
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
              title="Login"
              style={styles.loginButton}
              onPress={handleSubmit}
            />
            <View style={styles.signupTxtView}>
              <Text style={styles.noAccountTxt}>
                Don’t have an account yet?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupTxt}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
