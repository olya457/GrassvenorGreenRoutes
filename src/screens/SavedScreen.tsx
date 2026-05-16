import React, {useMemo, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components/Buttons';
import {ScreenShell} from '../components/ScreenShell';
import {noteById} from '../data/notes';
import {placeById} from '../data/places';
import {routeById} from '../data/routes';
import type {TabScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors, radius} from '../theme/theme';

type SavedTab = 'Places' | 'Routes' | 'Notes';

export function SavedScreen({navigation}: TabScreenProps<'Saved'>) {
  const [tab, setTab] = useState<SavedTab>('Places');
  const saved = useSaved();

  const placeItems = useMemo(() => saved.placeIds.map(id => placeById[id]).filter(Boolean), [saved.placeIds]);
  const routeItems = useMemo(() => saved.routeIds.map(id => routeById[id]).filter(Boolean), [saved.routeIds]);
  const noteItems = useMemo(() => saved.noteIds.map(id => noteById[id]).filter(Boolean), [saved.noteIds]);

  const empty =
    (tab === 'Places' && placeItems.length === 0) ||
    (tab === 'Routes' && routeItems.length === 0) ||
    (tab === 'Notes' && noteItems.length === 0);

  return (
    <ScreenShell>
      <Text style={styles.title}>Saved Green Places</Text>
      <Text style={styles.subtitle}>Your collected parks, routes, and nature notes.</Text>

      <View style={styles.segment}>
        {(['Places', 'Routes', 'Notes'] as SavedTab[]).map(item => (
          <Pressable key={item} onPress={() => setTab(item)} style={[styles.segmentItem, tab === item && styles.segmentActive]}>
            <Text style={[styles.segmentText, tab === item && styles.segmentTextActive]}>{item}</Text>
          </Pressable>
        ))}
      </View>

      {empty ? (
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
          <Text style={styles.emptyIconText}>🔖</Text>
          </View>
          <Text style={styles.emptyTitle}>No green {tab.toLowerCase()} saved yet</Text>
          <Text style={styles.emptyText}>Save parks, gardens, routes, and nature notes to build your personal green travel atlas.</Text>
          <PrimaryButton
            label={tab === 'Notes' ? 'Open Notes' : 'Explore Places'}
            icon={tab === 'Notes' ? '📖' : '🧭'}
            onPress={() => navigation.navigate(tab === 'Notes' ? 'Notes' : 'Explore')}
            style={styles.emptyButton}
          />
        </View>
      ) : null}

      {tab === 'Places'
        ? placeItems.map(place => (
            <View key={place.id} style={styles.row}>
              <Image source={place.image} style={styles.image} />
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle} numberOfLines={1}>
                  {place.title}
                </Text>
                <Text style={styles.badge}>{place.category}</Text>
                <Text style={styles.rowText} numberOfLines={1}>
                  {place.short}
                </Text>
                <View style={styles.rowActions}>
                  <Pressable onPress={() => saved.removePlace(place.id)} style={[styles.smallButton, styles.remove]}>
                    <Text style={styles.removeText}>🗑️ Remove</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate('PlaceDetails', {placeId: place.id})}
                    style={styles.smallButton}>
                    <Text style={styles.smallButtonText}>View ➡️</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))
        : null}

      {tab === 'Routes'
        ? routeItems.map(route => (
            <View key={route.id} style={styles.row}>
              <Image source={route.image} style={styles.image} />
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle} numberOfLines={1}>
                  {route.title}
                </Text>
                <Text style={styles.badge}>{route.category}</Text>
                <Text style={styles.rowText} numberOfLines={1}>
                  {route.short}
                </Text>
                <View style={styles.rowActions}>
                  <Pressable onPress={() => saved.removeRoute(route.id)} style={[styles.smallButton, styles.remove]}>
                    <Text style={styles.removeText}>🗑️ Remove</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate('RouteDetails', {routeId: route.id})}
                    style={styles.smallButton}>
                    <Text style={styles.smallButtonText}>View ➡️</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))
        : null}

      {tab === 'Notes'
        ? noteItems.map(note => (
            <View key={note.id} style={styles.row}>
              <Image source={note.image} style={styles.image} />
              <View style={styles.rowBody}>
                <Text style={styles.rowTitle} numberOfLines={1}>
                  {note.title}
                </Text>
                <Text style={styles.badge}>{note.readMinutes} min read</Text>
                <Text style={styles.rowText} numberOfLines={1}>
                  {note.subtitle}
                </Text>
                <View style={styles.rowActions}>
                  <Pressable onPress={() => saved.removeNote(note.id)} style={[styles.smallButton, styles.remove]}>
                    <Text style={styles.removeText}>🗑️ Remove</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate('NoteDetails', {noteId: note.id})}
                    style={styles.smallButton}>
                    <Text style={styles.smallButtonText}>Read ➡️</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))
        : null}
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
    marginBottom: 18,
    fontSize: 14,
    lineHeight: 21,
  },
  segment: {
    height: 44,
    borderRadius: radius.sm,
    backgroundColor: colors.panel,
    flexDirection: 'row',
    padding: 3,
    marginBottom: 22,
  },
  segmentItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  segmentActive: {
    backgroundColor: colors.green,
  },
  segmentText: {
    color: colors.textSoft,
    fontSize: 14,
    fontWeight: '700',
  },
  segmentTextActive: {
    color: colors.text,
  },
  empty: {
    minHeight: 420,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  emptyIconText: {
    color: colors.greenBright,
    fontSize: 30,
    fontWeight: '900',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 10,
  },
  emptyButton: {
    minWidth: 180,
    marginTop: 28,
  },
  row: {
    minHeight: 132,
    flexDirection: 'row',
    borderRadius: radius.md,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: 92,
    height: '100%',
  },
  rowBody: {
    flex: 1,
    padding: 12,
    gap: 5,
  },
  rowTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  badge: {
    alignSelf: 'flex-start',
    color: colors.greenBright,
    fontSize: 11,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    paddingHorizontal: 8,
    paddingVertical: 3,
    overflow: 'hidden',
  },
  rowText: {
    color: colors.textMuted,
    fontSize: 12,
  },
  rowActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 5,
  },
  smallButton: {
    flex: 1,
    minHeight: 32,
    borderRadius: 8,
    backgroundColor: colors.panelSoft,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  remove: {
    backgroundColor: 'rgba(115, 36, 46, 0.35)',
    borderColor: 'rgba(255, 77, 104, 0.32)',
  },
  smallButtonText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '900',
  },
  removeText: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: '900',
  },
});
