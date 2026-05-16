import React from 'react';
import {ImageBackground, Share, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ChipWrap, DetailSection, InfoBox} from '../components/DetailPieces';
import {IconButton, PrimaryButton} from '../components/Buttons';
import {placeById} from '../data/places';
import type {RootScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {bottomContentInset, colors, platformTopInset, radius} from '../theme/theme';
import {ScreenShell} from '../components/ScreenShell';

export function PlaceDetailsScreen({navigation, route}: RootScreenProps<'PlaceDetails'>) {
  const place = placeById[route.params.placeId];
  const insets = useSafeAreaInsets();
  const {isPlaceSaved, togglePlace} = useSaved();
  const top = Math.max(insets.top + 14, platformTopInset);

  if (!place) {
    return null;
  }

  const saved = isPlaceSaved(place.id);
  const sharePlace = () => {
    Share.share({
      title: place.title,
      message: `${place.title}\n${place.address}\n${place.short}`,
    });
  };

  return (
    <View style={styles.root}>
      <ScreenShell contentStyle={styles.shellContent}>
        <ImageBackground source={place.image} style={styles.hero} imageStyle={styles.heroImage}>
          <View style={styles.heroShade} />
          <View style={[styles.heroTop, {top}]}>
            <IconButton icon="⬅️" onPress={() => navigation.goBack()} />
            <IconButton icon={saved ? '✅' : '🔖'} active={saved} onPress={() => togglePlace(place.id)} />
          </View>
          <View style={styles.heroText}>
            <Text style={styles.badge}>{place.category.toUpperCase()}</Text>
            <Text style={styles.title}>{place.title}</Text>
          </View>
        </ImageBackground>

        <View style={styles.body}>
          <InfoBox>
            <Text style={styles.location}>📍 {place.address}</Text>
            <Text style={styles.coords}>
              {place.coordinates.latitude.toFixed(4)}°N, {Math.abs(place.coordinates.longitude).toFixed(4)}°W
            </Text>
          </InfoBox>

          <Text style={styles.long}>{place.long}</Text>

          <DetailSection title="Why Visit">
            <Text style={styles.copy}>{place.whyVisit}</Text>
          </DetailSection>

          <DetailSection title="Best Time To Go">
            <Text style={styles.copy}>{place.bestTime}</Text>
          </DetailSection>

          <DetailSection title="Good For">
            <ChipWrap items={place.goodFor} />
          </DetailSection>

          <PrimaryButton
            label={saved ? 'Saved' : 'Save Place'}
            icon={saved ? '✅' : '🔖'}
            onPress={() => togglePlace(place.id)}
            style={saved ? styles.savedButton : styles.saveButton}
          />
          <View style={styles.actions}>
            <PrimaryButton
              label="View on Map"
              icon="🗺️"
              onPress={() => navigation.navigate('MainTabs', {screen: 'Map', params: {placeId: place.id}})}
              style={styles.actionButton}
            />
            <PrimaryButton label="Share" icon="🔗" onPress={sharePlace} style={styles.actionButton} />
          </View>
        </View>
      </ScreenShell>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  hero: {
    height: 292,
    justifyContent: 'flex-end',
  },
  shellContent: {
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: bottomContentInset,
  },
  heroImage: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 44, 34, 0.38)',
  },
  heroTop: {
    position: 'absolute',
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroText: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    color: colors.text,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    backgroundColor: 'rgba(72, 142, 58, 0.44)',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 6,
    overflow: 'hidden',
  },
  title: {
    marginTop: 10,
    color: colors.text,
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '900',
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 22,
  },
  location: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  coords: {
    color: colors.textSoft,
    fontSize: 12,
    marginTop: 6,
  },
  long: {
    color: colors.creamMuted,
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 8,
  },
  copy: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
  saveButton: {
    marginTop: 4,
  },
  savedButton: {
    marginTop: 4,
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: colors.lineStrong,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    paddingBottom: 20,
  },
  actionButton: {
    flex: 1,
    minHeight: 52,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radius.sm,
  },
});
