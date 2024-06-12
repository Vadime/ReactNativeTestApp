// screens/ImageProcessingPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Picker } from 'react-native';
import { Grayscale, Sepia, Blur } from 'react-native-image-filter-kit';

const ImageProcessingPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('None');

  const renderImage = () => {
    switch (selectedFilter) {
      case 'Grayscale':
        return <Grayscale image={<Image source={require('../assets/images/test2.jpg')} style={styles.image} />} />;
      case 'Sepia':
        return <Sepia image={<Image source={require('../assets/images/test2.jpg')} style={styles.image} />} />;
      case 'Blur':
        return <Blur image={<Image source={require('../assets/images/test2.jpg')} style={styles.image} />} blurRadius={10} />;
      default:
        return <Image source={require('../assets/images/test2.jpg')} style={styles.image} />;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Processing</Text>
      <View style={styles.imageContainer}>
        {renderImage()}
      </View>
      <Picker
        selectedValue={selectedFilter}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedFilter(itemValue)}
      >
        <Picker.Item label="None" value="None" />
        <Picker.Item label="Grayscale" value="Grayscale" />
        <Picker.Item label="Sepia" value="Sepia" />
        <Picker.Item label="Blur" value="Blur" />
      </Picker>
    </View>
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
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  picker: {
    height: 50,
    width: 200,
    alignSelf: 'center',
  },
});

export default ImageProcessingPage;