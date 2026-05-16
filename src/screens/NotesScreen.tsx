import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {NoteCard} from '../components/NoteCard';
import {ScreenShell} from '../components/ScreenShell';
import {notes} from '../data/notes';
import type {TabScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors} from '../theme/theme';

export function NotesScreen({navigation}: TabScreenProps<'Notes'>) {
  const {isNoteSaved, toggleNote} = useSaved();

  return (
    <ScreenShell>
      <Text style={styles.title}>Nature Notes</Text>
      <Text style={styles.subtitle}>Short guides for calmer green travel.</Text>
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          saved={isNoteSaved(note.id)}
          onToggleSave={() => toggleNote(note.id)}
          onOpen={() => navigation.navigate('NoteDetails', {noteId: note.id})}
        />
      ))}
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textSoft,
    marginTop: 8,
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 21,
  },
});
