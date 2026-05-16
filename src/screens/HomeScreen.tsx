import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScreenShell} from '../components/ScreenShell';
import {SectionTitle} from '../components/SectionTitle';
import {IconButton, PrimaryButton} from '../components/Buttons';
import {CompactPlaceRow} from '../components/PlaceCard';
import {categories, places} from '../data/places';
import {routes} from '../data/routes';
import type {TabScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors, radius, shadowStyle} from '../theme/theme';

export function HomeScreen({navigation}: TabScreenProps<'Home'>) {
  const {isPlaceSaved, togglePlace} = useSaved();
  const featuredRoute = routes[0];
  const featuredPlaces = places.slice(0, 4);

  return (
    <ScreenShell>
      <View style={styles.header}>
        <View style={styles.brand}>
          <Text style={styles.brandText}>G</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>Explore Green Spaces</Text>
          <Text style={styles.subtitle}>Parks, gardens, lawns, and quiet nature routes</Text>
        </View>
        <IconButton icon="⚙️" onPress={() => navigation.navigate('Saved')} />
      </View>

      <Pressable onPress={() => navigation.navigate('RouteDetails', {routeId: featuredRoute.id})}>
        <ImageBackground source={featuredRoute.image} style={[styles.featured, shadowStyle]} imageStyle={styles.featuredImage}>
          <View style={styles.imageShade} />
          <Text style={styles.badge}>FEATURED ROUTE</Text>
          <Text style={styles.featuredTitle}>{featuredRoute.title}</Text>
          <Text style={styles.featuredText} numberOfLines={2}>
            {featuredRoute.short}
          </Text>
          <PrimaryButton
            label="View Route"
            onPress={() => navigation.navigate('RouteDetails', {routeId: featuredRoute.id})}
            style={styles.featuredButton}
          />
        </ImageBackground>
      </Pressable>

      <SectionTitle title="Quick Categories" />
      <View style={styles.categories}>
        {categories.slice(0, 3).map(category => {
          const place = places.find(item => item.category === category) ?? places[0];
          return (
            <Pressable
              key={category}
              onPress={() => navigation.navigate('Explore')}
              style={({pressed}) => [styles.category, pressed && styles.pressed]}>
              <ImageBackground source={place.image} style={styles.categoryImage} imageStyle={styles.categoryImageRadius}>
                <View style={styles.categoryShade} />
                <Text style={styles.categoryText} numberOfLines={2}>
                  {category}
                </Text>
              </ImageBackground>
            </Pressable>
          );
        })}
      </View>

      <SectionTitle title="Nearby Nature Picks" />
      {featuredPlaces.map(place => (
        <CompactPlaceRow
          key={place.id}
          place={place}
          saved={isPlaceSaved(place.id)}
          onToggleSave={() => togglePlace(place.id)}
          onOpen={() => navigation.navigate('PlaceDetails', {placeId: place.id})}
        />
      ))}

      <View style={styles.tip}>
        <Text style={styles.tipEyebrow}>☀️ NATURE TIP OF THE DAY</Text>
        <Text style={styles.tipTitle}>Walk with the light</Text>
        <Text style={styles.tipText}>
          Morning and late afternoon create softer shadows, calmer routes, and better photo moments in green spaces.
        </Text>
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 22,
  },
  brand: {
    width: 40,
    height: 40,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.panelDeep,
  },
  brandText: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '900',
  },
  headerText: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '900',
  },
  subtitle: {
    marginTop: 4,
    color: colors.textSoft,
    fontSize: 13,
    lineHeight: 18,
  },
  featured: {
    minHeight: 166,
    borderRadius: radius.md,
    overflow: 'hidden',
    padding: 14,
    justifyContent: 'flex-end',
  },
  featuredImage: {
    borderRadius: radius.md,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 44, 33, 0.48)',
  },
  badge: {
    alignSelf: 'flex-start',
    color: colors.gold,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.7,
    backgroundColor: 'rgba(2, 37, 30, 0.65)',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    overflow: 'hidden',
  },
  featuredTitle: {
    color: colors.text,
    marginTop: 12,
    fontSize: 21,
    lineHeight: 26,
    fontWeight: '900',
  },
  featuredText: {
    color: colors.creamMuted,
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
  },
  featuredButton: {
    alignSelf: 'flex-start',
    minHeight: 40,
    paddingHorizontal: 14,
    marginTop: 12,
  },
  categories: {
    flexDirection: 'row',
    gap: 10,
  },
  category: {
    flex: 1,
    minWidth: 0,
  },
  categoryImage: {
    height: 78,
    justifyContent: 'flex-end',
    padding: 8,
    overflow: 'hidden',
  },
  categoryImageRadius: {
    borderRadius: radius.sm,
  },
  categoryShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 41, 32, 0.32)',
  },
  categoryText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '900',
  },
  tip: {
    marginTop: 12,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    backgroundColor: colors.panelSoft,
    padding: 16,
    gap: 8,
  },
  tipEyebrow: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  tipTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
  tipText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.76,
  },
});
