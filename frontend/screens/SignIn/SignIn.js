import { View, Text } from 'react-native';
import React from 'react';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import { styles } from './Style';
import FormContainer from '../../components/FormContainer/FormContainer';
import InputField from '../../components/InputField/InputField';

const SignIn = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.navContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back-outline' size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Sign In</Text>
      </View>
      <FormContainer>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View>
            <InputField label={'e-mail'} placeholder={'example@gmail.com'} />
            <InputField
              label={'password'}
              type={'password'}
              placeholder={'*****'}
            />
          </View>
        </ScrollView>
      </FormContainer>
    </Container>
  );
};

export default SignIn;