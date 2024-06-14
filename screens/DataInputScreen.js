// screens/DataInputScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DataInputScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      // Navigate to HomeScreen upon successful login
      navigation.navigate('Home');
    } else {
      // Show an alert for invalid credentials
      Alert.alert('Invalid Credentials', 'Please enter correct email and password.');
    }
  };

  return (
    <SafeAreaView flex={1} padding={20}>
        <Text style={styles.title}>Login</Text>

      <View style={styles.center}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button title="Login" onPress={handleLogin} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    marginBottom: 16,
  
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DataInputScreen;