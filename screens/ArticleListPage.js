// screens/ArticleListPage.js
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateArticleList } from '../utils/generateArticles';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setArticles(generateArticleList(100));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.articleTile}
      onPress={() => navigation.navigate('Article', { article: item })}
    >
      <Image source={ item.image } style={styles.articleImage} />
      <View style={styles.articleTextContainer}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListHeaderComponent={
      <SafeAreaView edges={['top']}>
              <Text style={styles.header}>Articles</Text>
      </SafeAreaView>
}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    padding: 20,
  },
  articleTile: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  articleImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  articleTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default ArticleListPage;