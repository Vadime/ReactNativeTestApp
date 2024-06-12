// screens/AnimationProcessingPage.js
import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Rive from 'rive-react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>Animation Processing</Text>
      <View style={styles.animationContainer}>
        <Rive
          ref={riveRef}
          resourceName="soarus"
          artboardName="main"
          style={styles.animation}
        />
      </View>
      <Button title="Animate" onPress={togglePlay} />
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
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default AnimationProcessingPage;