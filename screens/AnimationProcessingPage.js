// screens/AnimationProcessingPage.js
import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimationProcessingPage = () => {
  const riveRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Load and play the animation on mount
    riveRef.current?.play('Run');
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      riveRef.current?.pause();
    } else {
      riveRef.current?.play('Run');
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Animation</Text>
      <Image source={require('../assets/animations/sourus.png')} style={styles.animationContainer}/>
      
      <Button title="Animate" onPress={togglePlay} />
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
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    width: '100%',
    resizeMode: 'contain',
  },

});

export default AnimationProcessingPage;