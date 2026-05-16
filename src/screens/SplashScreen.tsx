import React, {useEffect, useRef} from 'react';
import {Animated, Easing, ImageBackground, StyleSheet, View} from 'react-native';
import {images} from '../assets/images';
import type {RootScreenProps} from '../navigation/types';
import {getOnboardingSeen} from '../state/appStorage';

export function SplashScreen({navigation}: RootScreenProps<'Splash'>) {
  const rotation = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 4200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    const breathe = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 1400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    spin.start();
    breathe.start();

    return () => {
      spin.stop();
      breathe.stop();
    };
  }, [pulse, rotation]);

  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      getOnboardingSeen()
        .then(seen => {
          if (!mounted) {
            return;
          }
          navigation.reset({
            index: 0,
            routes: [{name: seen ? 'MainTabs' : 'Onboarding'}],
          });
        })
        .catch(() => {
          if (mounted) {
            navigation.reset({index: 0, routes: [{name: 'Onboarding'}]});
          }
        });
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [navigation]);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const reverseSpin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });
  const glowScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.94, 1.1],
  });
  const glowOpacity = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.42, 0.7],
  });

  return (
    <ImageBackground source={images.splashBackground} style={styles.root} resizeMode="cover" blurRadius={4}>
      <View style={styles.overlay} />
      <View style={styles.webView}>
        <Animated.View
          style={[
            styles.greenGlow,
            {
              opacity: glowOpacity,
              transform: [{scale: glowScale}],
            },
          ]}
        />
        <View style={styles.outerRing} />
        <Animated.View style={[styles.middleRing, {transform: [{rotate: spin}]}]} />
        <Animated.View style={[styles.innerRing, {transform: [{rotate: reverseSpin}]}]} />
        <Animated.View style={[styles.dashLine, {transform: [{rotate: spin}]}]} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 34, 27, 0.34)',
  },
  webView: {
    width: 232,
    height: 232,
    borderRadius: 116,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20, 42, 35, 0.38)',
    borderWidth: 1,
    borderColor: 'rgba(79, 64, 82, 0.72)',
    overflow: 'hidden',
  },
  greenGlow: {
    position: 'absolute',
    left: -58,
    bottom: -42,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: 'rgba(42, 198, 124, 0.78)',
  },
  outerRing: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 116,
    borderWidth: 2,
    borderColor: 'rgba(53, 47, 63, 0.82)',
  },
  middleRing: {
    width: 158,
    height: 158,
    borderRadius: 79,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(154, 149, 156, 0.5)',
  },
  innerRing: {
    position: 'absolute',
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(154, 149, 156, 0.5)',
  },
  dashLine: {
    position: 'absolute',
    left: 63,
    top: 128,
    width: 88,
    borderTopWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'rgba(190, 226, 210, 0.74)',
  },
});
