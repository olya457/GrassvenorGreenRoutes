import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconButton, PrimaryButton} from '../components/Buttons';
import {DetailSection} from '../components/DetailPieces';
import {ScreenShell} from '../components/ScreenShell';
import {placeById} from '../data/places';
import {routeById} from '../data/routes';
import type {RootScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors, platformTopInset, radius} from '../theme/theme';

export function RouteDetailsScreen({navigation, route}: RootScreenProps<'RouteDetails'>) {
  const greenRoute = routeById[route.params.routeId];
  const insets = useSafeAreaInsets();
  const {isRouteSaved, toggleRoute} = useSaved();
  const top = Math.max(insets.top + 14, platformTopInset);

  if (!greenRoute) {
    return null;
  }

  const saved = isRouteSaved(greenRoute.id);

  return (
    <ScreenShell contentStyle={styles.shellContent}>
      <ImageBackground source={greenRoute.image} style={styles.hero}>
        <View style={styles.heroShade} />
        <View style={[styles.heroTop, {top}]}>
          <IconButton icon="⬅️" onPress={() => navigation.goBack()} />
          <IconButton icon={saved ? '✅' : '🔖'} active={saved} onPress={() => toggleRoute(greenRoute.id)} />
        </View>
        <View style={styles.heroText}>
          <Text style={styles.badge}>{greenRoute.category.toUpperCase()}</Text>
          <Text style={styles.title}>{greenRoute.title}</Text>
          <Text style={styles.short}>{greenRoute.short}</Text>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <View style={styles.metrics}>
          {[
            ['⏱️', 'Duration', greenRoute.duration],
            ['🌿', 'Mood', greenRoute.mood],
            ['☀️', 'Best time', greenRoute.bestTime],
            ['🥾', 'Difficulty', greenRoute.difficulty],
          ].map(item => (
            <View key={item[1]} style={styles.metric}>
              <Text style={styles.metricIcon}>{item[0]}</Text>
              <View>
                <Text style={styles.metricLabel}>{item[1]}</Text>
                <Text style={styles.metricValue}>{item[2]}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.description}>{greenRoute.description}</Text>

        <DetailSection title="Route Stops">
          <View style={styles.timeline}>
            {greenRoute.stops.map((stop, index) => (
              <View key={stop.title} style={styles.stopRow}>
                <View style={styles.stopNumber}>
                  <Text style={styles.stopNumberText}>{index + 1}</Text>
                </View>
                <View style={styles.stopBody}>
                  <Text style={styles.stopTitle}>{stop.title}</Text>
                  <Text style={styles.stopText}>{stop.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </DetailSection>

        <DetailSection title="Related Places">
          {greenRoute.placeIds.map(id => {
            const place = placeById[id];
            if (!place) {
              return null;
            }
            return (
              <Text
                key={place.id}
                onPress={() => navigation.navigate('PlaceDetails', {placeId: place.id})}
                style={styles.related}>
                ➡️ {place.title}
              </Text>
            );
          })}
        </DetailSection>

        <PrimaryButton
          label={saved ? 'Saved Route' : 'Save Route'}
          icon={saved ? '✅' : '🔖'}
          onPress={() => toggleRoute(greenRoute.id)}
          style={saved ? styles.savedButton : styles.saveButton}
        />
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  shellContent: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  hero: {
    height: 276,
    justifyContent: 'flex-end',
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 44, 34, 0.46)',
  },
  heroTop: {
    position: 'absolute',
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroText: {
    padding: 24,
  },
  badge: {
    color: colors.gold,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  title: {
    color: colors.text,
    marginTop: 10,
    fontSize: 27,
    lineHeight: 33,
    fontWeight: '900',
  },
  short: {
    color: colors.creamMuted,
    marginTop: 6,
    fontSize: 14,
    lineHeight: 21,
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 22,
  },
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  metric: {
    width: '48%',
    minHeight: 56,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  metricIcon: {
    color: colors.greenBright,
    fontSize: 18,
  },
  metricLabel: {
    color: colors.textSoft,
    fontSize: 10,
  },
  metricValue: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  description: {
    color: colors.creamMuted,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },
  timeline: {
    gap: 18,
  },
  stopRow: {
    flexDirection: 'row',
    gap: 14,
  },
  stopNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopNumberText: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 13,
  },
  stopBody: {
    flex: 1,
  },
  stopTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
  stopText: {
    color: colors.textMuted,
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
  },
  related: {
    color: colors.text,
    fontSize: 15,
    paddingVertical: 8,
  },
  saveButton: {
    marginTop: 10,
  },
  savedButton: {
    marginTop: 10,
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: colors.lineStrong,
  },
});
