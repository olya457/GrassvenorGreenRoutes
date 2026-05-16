import React, {useMemo, useState} from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../assets/images';
import {PrimaryButton} from '../components/Buttons';
import type {RootScreenProps} from '../navigation/types';
import {setOnboardingSeen} from '../state/appStorage';
import {colors, platformTopInset} from '../theme/theme';

const slides = [
  {
    image: images.onboardingFind,
    title: 'Find Green Places',
    text: 'Discover parks, lawns, gardens, meadows, and peaceful outdoor spaces selected for slow walks and fresh air.',
    action: 'Start Exploring',
  },
  {
    image: images.onboardingRoutes,
    title: 'Follow Nature Routes',
    text: 'Choose calm walks, botanical routes, riverside greens, and scenic open spaces based on your travel mood.',
    action: 'View Routes',
  },
  {
    image: images.onboardingAtlas,
    title: 'Save Your Green Atlas',
    text: 'Keep your favorite parks, gardens, routes, and nature notes in one clean travel collection.',
    action: 'Open App',
  },
];

export function OnboardingScreen({navigation}: RootScreenProps<'Onboarding'>) {
  const [index, setIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const slide = slides[index];
  const compact = height < 740;
  const top = Math.max(insets.top + 12, platformTopInset);

  const complete = async () => {
    await setOnboardingSeen();
    navigation.reset({index: 0, routes: [{name: 'MainTabs'}]});
  };

  const next = () => {
    if (index === slides.length - 1) {
      complete();
      return;
    }
    setIndex(current => current + 1);
  };

  const dots = useMemo(
    () =>
      slides.map((_, dotIndex) => (
        <View key={dotIndex} style={[styles.dot, index === dotIndex && styles.dotActive]} />
      )),
    [index],
  );

  return (
    <ImageBackground source={slide.image} style={styles.root} resizeMode="cover">
      <Pressable style={[styles.skip, {top}]} onPress={complete}>
        <Text style={styles.skipText}>Skip</Text>
      </Pressable>
      <View style={[styles.content, compact && styles.contentCompact]}>
        <View style={styles.dots}>{dots}</View>
        <View style={[styles.textShade, compact && styles.textShadeCompact]}>
          <Text style={[styles.title, compact && styles.titleCompact]}>{slide.title}</Text>
          <Text style={[styles.text, compact && styles.textCompact]}>{slide.text}</Text>
        </View>
        <PrimaryButton label={slide.action} onPress={next} style={styles.button} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  skip: {
    position: 'absolute',
    right: 26,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: 'rgba(246, 242, 220, 0.12)',
  },
  skipText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  content: {
    position: 'absolute',
    left: 38,
    right: 38,
    bottom: 38,
    alignItems: 'center',
  },
  contentCompact: {
    bottom: 22,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 30,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(244, 240, 220, 0.42)',
  },
  dotActive: {
    width: 24,
    backgroundColor: colors.gold,
  },
  textShade: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(0, 38, 30, 0.56)',
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  textShadeCompact: {
    paddingVertical: 13,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
    textAlign: 'center',
  },
  titleCompact: {
    fontSize: 26,
    lineHeight: 31,
  },
  text: {
    marginTop: 14,
    color: colors.creamMuted,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
  },
  textCompact: {
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    marginTop: 28,
    alignSelf: 'stretch',
  },
});
