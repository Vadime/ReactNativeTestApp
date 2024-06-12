// screens/ArticleScreen.js
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <Image source={  article.image } style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.description}>{article.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 16,
  },
});

export default ArticleScreen;