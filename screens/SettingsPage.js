// screens/SettingsPage.js
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const SettingsPage = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement your logout logic here
    navigation.reset({
      index: 0,
      routes: [{ name: 'DataInput' }],
    });
  };

  return (
    <SafeAreaView >
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.listItem} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="black" />
        <Text style={styles.listItemText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    margin: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal: 20,
  },
  listItemText: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default SettingsPage;