import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, Region} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CategoryPills} from '../components/CategoryPills';
import {IconButton, PrimaryButton} from '../components/Buttons';
import {categoryColors, PlaceCategory, places} from '../data/places';
import type {TabScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors, platformTopInset, radius, shadowStyle} from '../theme/theme';

type Filter = PlaceCategory | 'All';

const londonRegion: Region = {
  latitude: 51.5158,
  longitude: -0.1586,
  latitudeDelta: 0.17,
  longitudeDelta: 0.2,
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#06372d'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#9eba94'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#03251f'}]},
  {featureType: 'road', elementType: 'geometry', stylers: [{color: '#0c4b3c'}]},
  {featureType: 'water', elementType: 'geometry', stylers: [{color: '#0f6b5b'}]},
  {featureType: 'poi.park', elementType: 'geometry', stylers: [{color: '#0b5639'}]},
];

export function MapScreen({navigation, route}: TabScreenProps<'Map'>) {
  const insets = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);
  const [category, setCategory] = useState<Filter>('All');
  const [selectedId, setSelectedId] = useState(route.params?.placeId ?? places[8].id);
  const [currentRegion, setCurrentRegion] = useState<Region>(londonRegion);
  const {isPlaceSaved, togglePlace} = useSaved();
  const top = Math.max(insets.top + 12, platformTopInset);

  const visiblePlaces = useMemo(
    () => places.filter(place => category === 'All' || place.category === category),
    [category],
  );

  const selectedPlace = selectedId ? places.find(place => place.id === selectedId) : undefined;

  const focusRegion = useCallback((region: Region, duration = 320) => {
    setCurrentRegion(region);
    mapRef.current?.animateToRegion(region, duration);
  }, []);

  useEffect(() => {
    if (!route.params?.placeId) {
      return;
    }
    setSelectedId(route.params.placeId);
  }, [route.params?.placeId]);

  useEffect(() => {
    if (!selectedPlace) {
      return;
    }
    focusRegion(
      {
        latitude: selectedPlace.coordinates.latitude,
        longitude: selectedPlace.coordinates.longitude,
        latitudeDelta: 0.055,
        longitudeDelta: 0.06,
      },
      450,
    );
  }, [focusRegion, selectedPlace]);

  const zoomBy = (factor: number) => {
    const nextRegion = {
      ...currentRegion,
      latitudeDelta: Math.max(0.012, Math.min(0.32, currentRegion.latitudeDelta * factor)),
      longitudeDelta: Math.max(0.012, Math.min(0.36, currentRegion.longitudeDelta * factor)),
    };
    focusRegion(nextRegion);
  };

  const focusSelected = () => {
    if (selectedPlace) {
      focusRegion({
        latitude: selectedPlace.coordinates.latitude,
        longitude: selectedPlace.coordinates.longitude,
        latitudeDelta: 0.055,
        longitudeDelta: 0.06,
      });
      return;
    }
    focusRegion(londonRegion);
  };

  return (
    <View style={styles.root}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={londonRegion}
        customMapStyle={mapStyle}
        showsCompass={false}
        showsUserLocation={false}
        toolbarEnabled={false}
        onRegionChangeComplete={setCurrentRegion}>
        {visiblePlaces.map(place => {
          const active = place.id === selectedPlace?.id;
          const color = categoryColors[place.category];
          return (
            <Marker
              key={place.id}
              coordinate={place.coordinates}
              onPress={() => setSelectedId(place.id)}
              anchor={{x: 0.5, y: 1}}>
              <View style={[styles.pinGlow, active && styles.pinGlowActive]}>
                <View style={[styles.pin, {backgroundColor: color}, active && styles.pinActive]}>
                  <Text style={styles.pinDot}>•</Text>
                </View>
              </View>
            </Marker>
          );
        })}
      </MapView>

      <View style={[styles.header, {paddingTop: top}]}>
        <Text style={styles.title}>Grass Map</Text>
        <Text style={styles.subtitle}>Tap a pin to preview a green location.</Text>
        <CategoryPills value={category} onChange={setCategory} />
      </View>

      <View style={[styles.legend, {top: top + 300}]}>
        {Object.entries(categoryColors).map(([label, color]) => (
          <View key={label} style={styles.legendRow}>
            <View style={[styles.legendDot, {backgroundColor: color}]} />
            <Text style={styles.legendText} numberOfLines={1}>
              {label.replace(' Grasslands', '').replace(' Corners', '').replace(' Parks', '').replace(' Greens', '')}
            </Text>
          </View>
        ))}
      </View>

      <View style={[styles.controls, {top: top + 148}]}>
        <Pressable onPress={() => zoomBy(0.62)} style={({pressed}) => [styles.controlButton, pressed && styles.pressed]}>
          <Text style={styles.controlText}>＋</Text>
        </Pressable>
        <Pressable onPress={() => zoomBy(1.62)} style={({pressed}) => [styles.controlButton, pressed && styles.pressed]}>
          <Text style={styles.controlText}>－</Text>
        </Pressable>
        <Pressable onPress={focusSelected} style={({pressed}) => [styles.controlButton, pressed && styles.pressed]}>
          <Text style={styles.controlEmoji}>📍</Text>
        </Pressable>
      </View>

      {selectedPlace ? (
        <View style={[styles.preview, shadowStyle]}>
          <Image source={selectedPlace.image} style={styles.previewImage} />
          <View style={styles.previewBody}>
            <Text style={styles.previewTitle} numberOfLines={1}>
              {selectedPlace.title}
            </Text>
            <Text style={styles.previewCategory}>{selectedPlace.category}</Text>
            <Text style={styles.previewText} numberOfLines={2}>
              {selectedPlace.short}
            </Text>
            <View style={styles.previewActions}>
              <IconButton
                icon={isPlaceSaved(selectedPlace.id) ? '✅' : '🔖'}
                active={isPlaceSaved(selectedPlace.id)}
                onPress={() => togglePlace(selectedPlace.id)}
                style={styles.previewIcon}
              />
              <PrimaryButton
                label="View Details"
                onPress={() => navigation.navigate('PlaceDetails', {placeId: selectedPlace.id})}
                style={styles.previewButton}
              />
            </View>
          </View>
          <Pressable onPress={() => setSelectedId('')} style={styles.close}>
            <Text style={styles.closeText}>×</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundDeep,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: 'rgba(2, 35, 29, 0.96)',
  },
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSoft,
    marginTop: 8,
    marginBottom: 18,
    fontSize: 14,
  },
  legend: {
    position: 'absolute',
    right: 12,
    padding: 10,
    borderRadius: radius.sm,
    backgroundColor: 'rgba(3, 34, 28, 0.84)',
    borderWidth: 1,
    borderColor: colors.line,
    gap: 6,
    maxWidth: 116,
  },
  controls: {
    position: 'absolute',
    right: 16,
    borderRadius: 18,
    backgroundColor: 'rgba(3, 34, 28, 0.86)',
    borderWidth: 1,
    borderColor: colors.line,
    padding: 6,
    gap: 6,
  },
  controlButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    color: colors.text,
    fontSize: 25,
    lineHeight: 28,
    fontWeight: '900',
  },
  controlEmoji: {
    color: colors.text,
    fontSize: 20,
    lineHeight: 24,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 10,
  },
  pinGlow: {
    width: 36,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinGlowActive: {
    shadowColor: colors.greenBright,
    shadowOpacity: 0.9,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 0},
  },
  pin: {
    width: 30,
    height: 36,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 2,
    borderColor: 'rgba(244, 240, 220, 0.75)',
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinActive: {
    width: 40,
    height: 46,
    borderRadius: 20,
    borderBottomLeftRadius: 20,
  },
  pinDot: {
    transform: [{rotate: '-45deg'}],
    color: colors.text,
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '900',
  },
  preview: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: '50%',
    minHeight: 168,
    borderRadius: radius.md,
    backgroundColor: 'rgba(5, 44, 36, 0.96)',
    borderWidth: 1,
    borderColor: colors.line,
    padding: 14,
    flexDirection: 'row',
    gap: 12,
    transform: [{translateY: -84}],
  },
  previewImage: {
    width: 86,
    height: 86,
    borderRadius: 12,
    marginTop: 6,
  },
  previewBody: {
    flex: 1,
    gap: 6,
  },
  previewTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    paddingRight: 30,
  },
  previewCategory: {
    alignSelf: 'flex-start',
    color: colors.greenBright,
    fontSize: 11,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    paddingHorizontal: 8,
    paddingVertical: 4,
    overflow: 'hidden',
  },
  previewText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  previewActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 8,
  },
  previewIcon: {
    width: 50,
    height: 44,
    flexDirection: 'row',
  },
  previewButton: {
    flex: 1,
    minHeight: 44,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    color: colors.textMuted,
    fontSize: 24,
    lineHeight: 26,
  },
  pressed: {
    opacity: 0.78,
  },
});
