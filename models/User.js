// models/User.js
export default class User {
    constructor(name, email, imageUrl, age, phone, address, company, jobTitle, bio, dateOfBirth) {
      this.name = name;
      this.email = email;
      this.imageUrl = imageUrl;
      this.age = age;
      this.phone = phone;
      this.address = address;
      this.company = company;
      this.jobTitle = jobTitle;
      this.bio = bio;
      this.dateOfBirth = dateOfBirth;
    }
  }