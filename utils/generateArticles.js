// utils/generateArticles.js
import Article from '../models/Article';

const images = [
    require('../assets/images/test1.jpg'),
    require('../assets/images/test2.jpg'),
    require('../assets/images/test3.jpg'),
    // Add more images as needed
  ];

export const generateArticleList = (count) => {
  const articles = [];
  for (let i = 0; i < count; i++) {
    articles.push(
      new Article(
        images[i % images.length],
        `Article Title ${i + 1}`,
        `This is a sample description for Article ${i + 1}. It provides some details about the article content.`
      )
    );
  }
  return articles;
};