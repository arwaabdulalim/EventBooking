import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../themes/colors';

const InputField = ({
  navigation,
  icon,
  width,
  type,
  textStyle,
  keyboardType,
  forgotText,
  iconStyle,
  onPress,
  containerStyle,
  placeholderStyle,
  placeholderTextColor,
  editable,
  ...otherProps
}) => {
  const [isSecure, setIsSecure] = useState(type === 'Password');

  const iconName = isSecure ? 'eye-off-outline' : 'eye-outline';

  return (
    <View>
      <View style={[styles.container, {...containerStyle}]}>
        <TextInput
          editable={editable}
          placeholderTextColor={placeholderTextColor}
          style={[styles.text, {...textStyle}, placeholderStyle]}
          {...otherProps}
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
        />
        <TouchableOpacity
          onPress={() => {
            setIsSecure(!isSecure);
            onPress();
          }}>
          <MaterialCommunityIcons
            name={icon}
            size={25}
            style={[styles.icon, {...iconStyle}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default InputField;
