import React from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {NatureNote} from '../data/notes';
import {colors, radius, shadowStyle} from '../theme/theme';
import {IconButton, PrimaryButton} from './Buttons';

export function NoteCard({
  note,
  saved,
  onOpen,
  onToggleSave,
}: {
  note: NatureNote;
  saved: boolean;
  onOpen: () => void;
  onToggleSave: () => void;
}) {
  return (
    <View style={[styles.card, shadowStyle]}>
      <ImageBackground source={note.image} style={styles.image} imageStyle={styles.imageRadius}>
        <View style={styles.shade} />
        <Text style={styles.read}>⏱️ {note.readMinutes} min read</Text>
        <IconButton icon={saved ? '✅' : '🔖'} active={saved} onPress={onToggleSave} style={styles.save} />
      </ImageBackground>
      <Pressable onPress={onOpen} style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {note.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={2}>
          {note.subtitle}
        </Text>
        <PrimaryButton label="Read Article" onPress={onOpen} style={styles.button} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.md,
    overflow: 'hidden',
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    marginBottom: 16,
  },
  image: {
    height: 142,
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
  },
  shade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 45, 35, 0.24)',
  },
  read: {
    color: colors.textMuted,
    fontSize: 12,
    padding: 12,
  },
  save: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  body: {
    padding: 14,
    gap: 8,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    minHeight: 44,
    marginTop: 8,
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: colors.line,
  },
});
