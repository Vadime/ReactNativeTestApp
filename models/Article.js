// models/Article.js
export default class Article {
    
    constructor(image, title, description) {
      /**
       * @type {string}
       */
      this.image = image;
      
      /**
       * @type {string}
       */
      this.title = title;
      
      /**
       * @type {string}
       */
      this.description = description;
    }
  }