// navigation/BottomTabNavigator.js
import { Ionicons } from '@expo/vector-icons'; // Import icons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AnimationProcessingPage from '../screens/AnimationProcessingPage';
import ArticleListPage from '../screens/ArticleListPage';
import DataProcessingPage from '../screens/DataProcessingPage';
import ImageProcessingPage from '../screens/ImageProcessingPage';
import SettingsPage from '../screens/SettingsPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

         if (route.name === 'Articles') {
            iconName = 'book-outline';
          } else if (route.name === 'Image') {
            iconName = 'image-outline';
          } else if (route.name === 'Animation') {
            iconName = 'film-outline';
          } else if (route.name === 'Data') {
            iconName = 'cog-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: 'flex' }, null],
      })}
    >
      <Tab.Screen name="Articles" component={ArticleListPage} options={{ headerShown: false }}/>
      <Tab.Screen name="Image" component={ImageProcessingPage} options={{ headerShown: false }}/>
      <Tab.Screen name="Animation" component={AnimationProcessingPage} options={{ headerShown: false }}/>
      <Tab.Screen name="Data" component={DataProcessingPage} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsPage} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;