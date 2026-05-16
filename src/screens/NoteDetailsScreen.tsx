import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconButton, PrimaryButton} from '../components/Buttons';
import {DetailSection} from '../components/DetailPieces';
import {ScreenShell} from '../components/ScreenShell';
import {noteById} from '../data/notes';
import {placeById} from '../data/places';
import type {RootScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors, platformTopInset, radius} from '../theme/theme';

export function NoteDetailsScreen({navigation, route}: RootScreenProps<'NoteDetails'>) {
  const note = noteById[route.params.noteId];
  const insets = useSafeAreaInsets();
  const {isNoteSaved, isPlaceSaved, toggleNote, togglePlace} = useSaved();
  const top = Math.max(insets.top + 14, platformTopInset);

  if (!note) {
    return null;
  }

  const saved = isNoteSaved(note.id);

  return (
    <ScreenShell contentStyle={styles.shellContent}>
      <ImageBackground source={note.image} style={styles.hero}>
        <View style={styles.heroShade} />
        <View style={[styles.heroTop, {top}]}>
          <IconButton icon="⬅️" onPress={() => navigation.goBack()} />
          <IconButton icon={saved ? '✅' : '🔖'} active={saved} onPress={() => toggleNote(note.id)} />
        </View>
        <View style={styles.heroText}>
          <Text style={styles.read}>⏱️ {note.readMinutes} min read</Text>
          <Text style={styles.title}>{note.title}</Text>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <Text style={styles.subtitle}>{note.subtitle}</Text>
        {note.paragraphs.map(paragraph => (
          <Text key={paragraph.slice(0, 32)} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}

        <PrimaryButton
          label={saved ? 'Saved Note' : 'Save Note'}
          icon={saved ? '✅' : '🔖'}
          onPress={() => toggleNote(note.id)}
          style={saved ? styles.savedButton : styles.saveButton}
        />

        <DetailSection title="Related Places">
          {note.relatedPlaceIds.map(placeId => {
            const place = placeById[placeId];
            if (!place) {
              return null;
            }
            const placeSaved = isPlaceSaved(place.id);
            return (
              <View key={place.id} style={styles.placeRow}>
                <Image source={place.image} style={styles.placeImage} />
                <View style={styles.placeText}>
                  <Text style={styles.placeTitle} numberOfLines={1}>
                    {place.title}
                  </Text>
                  <Text style={styles.placeCategory}>{place.category}</Text>
                </View>
                <IconButton
                  icon={placeSaved ? '✅' : '🔖'}
                  active={placeSaved}
                  onPress={() => togglePlace(place.id)}
                  style={styles.placeIcon}
                />
                <IconButton
                  icon="➡️"
                  onPress={() => navigation.navigate('PlaceDetails', {placeId: place.id})}
                  style={styles.placeIcon}
                />
              </View>
            );
          })}
        </DetailSection>
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
    backgroundColor: 'rgba(0, 44, 34, 0.44)',
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
  read: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 10,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '900',
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 22,
  },
  subtitle: {
    color: colors.textSoft,
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 24,
    marginBottom: 22,
  },
  paragraph: {
    color: colors.creamMuted,
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 18,
  },
  saveButton: {
    marginTop: 2,
    marginBottom: 22,
  },
  savedButton: {
    marginTop: 2,
    marginBottom: 22,
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: colors.lineStrong,
  },
  placeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 74,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 10,
    gap: 10,
    marginBottom: 10,
  },
  placeImage: {
    width: 56,
    height: 56,
    borderRadius: 9,
  },
  placeText: {
    flex: 1,
  },
  placeTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '900',
  },
  placeCategory: {
    color: colors.textSoft,
    marginTop: 4,
    fontSize: 12,
  },
  placeIcon: {
    width: 36,
    height: 36,
  },
});
