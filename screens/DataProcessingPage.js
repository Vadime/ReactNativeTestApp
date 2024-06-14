// screens/DataProcessingPage.js
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateUsers } from '../utils/generateUsers';

const DataProcessingPage = () => {
  const [dataList, setDataList] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const users = generateUsers(100);
    setDataList(users);
    setFilteredDataList(users);
  }, []);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setFilteredDataList(dataList);
    } else {
      const filteredList = dataList.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDataList(filteredList);
    }
  };

  const handleSort = (criteria) => {
    const sortedList = [...filteredDataList];
    if (criteria === 'name') {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'age') {
      sortedList.sort((a, b) => a.age - b.age);
    } else if (criteria === 'jobTitle') {
      sortedList.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
    }
    setFilteredDataList(sortedList);
    setFilterValue(criteria);
  };

  const renderUser = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userJobTitle}>{item.jobTitle}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView flex={1} padding={20}>
      <Text style={styles.title}>Data</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          onChangeText={handleSearch}
        />
        <View style={styles.dropdown}>
          <Text onPress={() => handleSort('name')}>Name</Text>
          <Text onPress={() => handleSort('age')}>Age</Text>
          <Text onPress={() => handleSort('jobTitle')}>Job Title</Text>
        </View>
      </View>
      <FlatList
        data={filteredDataList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderUser}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  dropdown: {
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userJobTitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default DataProcessingPage;