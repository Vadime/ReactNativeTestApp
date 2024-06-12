// utils/generateUsers.js
import User from '../models/User';

export const generateUsers = (count) => {
  const users = [
    new User(
      'John Doe',
      'john.doe@example.com',
      'https://i.pravatar.cc/150?img=1',
      25,
      '123-456-7890',
      '123 Main St, Anytown, USA',
      'Example Inc.',
      'Software Engineer',
      'John is a software engineer with 5 years of experience.',
      '1997-01-01'
    ),
    new User(
      'Jane Smith',
      'jane.smith@example.com',
      'https://i.pravatar.cc/150?img=2',
      30,
      '123-456-7891',
      '456 Elm St, Anytown, USA',
      'Example Inc.',
      'Product Manager',
      'Jane is a product manager who loves creating new products.',
      '1992-02-02'
    ),
    // Add more hardcoded users here
  ];

  // If more users are needed, duplicate the existing ones with slight modifications
  while (users.length < count) {
    users.push(...users.slice(0, count - users.length));
  }

  return users;
};