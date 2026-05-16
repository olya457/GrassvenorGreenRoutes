import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {Place} from '../data/places';
import {colors, radius, shadowStyle} from '../theme/theme';
import {IconButton, PrimaryButton} from './Buttons';

type PlaceCardProps = {
  place: Place;
  saved: boolean;
  onToggleSave: () => void;
  onOpen: () => void;
};

export function PlaceCard({place, saved, onToggleSave, onOpen}: PlaceCardProps) {
  return (
    <View style={[styles.card, shadowStyle]}>
      <ImageBackground source={place.image} style={styles.image} imageStyle={styles.imageRadius}>
        <View style={styles.imageShade} />
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>{place.category}</Text>
          <Text style={styles.badge}>{place.distance}</Text>
        </View>
        <IconButton icon={saved ? '✅' : '🔖'} active={saved} onPress={onToggleSave} style={styles.save} />
      </ImageBackground>
      <Pressable onPress={onOpen} style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {place.title}
        </Text>
        <Text style={styles.short} numberOfLines={2}>
          {place.short}
        </Text>
        <Text style={styles.address} numberOfLines={1}>
          📍 {place.address}
        </Text>
        <PrimaryButton label="View Details" onPress={onOpen} style={styles.button} />
      </Pressable>
    </View>
  );
}

export function CompactPlaceRow({
  place,
  saved,
  onToggleSave,
  onOpen,
}: PlaceCardProps) {
  return (
    <Pressable onPress={onOpen} style={({pressed}) => [styles.compactRow, pressed && styles.pressed]}>
      <ImageBackground source={place.image} style={styles.compactImage} imageStyle={styles.compactImageRadius}>
        <View style={styles.imageShade} />
      </ImageBackground>
      <View style={styles.compactContent}>
        <Text style={styles.compactTitle} numberOfLines={1}>
          {place.title}
        </Text>
        <Text style={styles.compactCategory} numberOfLines={1}>
          {place.category}
        </Text>
        <Text style={styles.compactShort} numberOfLines={1}>
          {place.short}
        </Text>
      </View>
      <IconButton icon={saved ? '✅' : '🔖'} active={saved} onPress={onToggleSave} style={styles.compactIcon} />
      <Text style={styles.chevron}>➡️</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.panel,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    height: 150,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
  },
  imageShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 45, 35, 0.32)',
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 12,
  },
  badge: {
    color: colors.text,
    backgroundColor: 'rgba(3, 43, 33, 0.72)',
    borderRadius: 9,
    paddingHorizontal: 9,
    paddingVertical: 5,
    fontSize: 11,
    overflow: 'hidden',
  },
  save: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  body: {
    padding: 14,
    gap: 7,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  short: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  address: {
    color: colors.textSoft,
    fontSize: 12,
  },
  button: {
    minHeight: 44,
    marginTop: 8,
    backgroundColor: colors.panelDeep,
    borderWidth: 1,
    borderColor: colors.line,
  },
  compactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 86,
    padding: 10,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    marginBottom: 12,
    gap: 12,
  },
  compactImage: {
    width: 64,
    height: 64,
    overflow: 'hidden',
  },
  compactImageRadius: {
    borderRadius: 10,
  },
  compactContent: {
    flex: 1,
    gap: 3,
  },
  compactTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  compactCategory: {
    color: colors.greenBright,
    fontSize: 12,
  },
  compactShort: {
    color: colors.textMuted,
    fontSize: 12,
  },
  compactIcon: {
    width: 36,
    height: 36,
  },
  chevron: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.78,
  },
});
