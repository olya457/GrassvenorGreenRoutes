import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {CategoryPills} from '../components/CategoryPills';
import {PlaceCard} from '../components/PlaceCard';
import {ScreenShell} from '../components/ScreenShell';
import {PlaceCategory, places} from '../data/places';
import type {TabScreenProps} from '../navigation/types';
import {useSaved} from '../state/SavedContext';
import {colors, radius} from '../theme/theme';

type Filter = PlaceCategory | 'All';

export function ExploreScreen({navigation}: TabScreenProps<'Explore'>) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Filter>('All');
  const {isPlaceSaved, togglePlace} = useSaved();

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return places.filter(place => {
      const matchesCategory = category === 'All' || place.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        place.title.toLowerCase().includes(normalized) ||
        place.short.toLowerCase().includes(normalized) ||
        place.address.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <ScreenShell>
      <Text style={styles.title}>Green Explorer</Text>
      <Text style={styles.subtitle}>Browse nature places by mood, landscape, and walking style.</Text>
      <View style={styles.search}>
        <Text style={styles.searchIcon}>🔎</Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search parks, gardens, meadows..."
          placeholderTextColor={colors.textSoft}
          style={styles.input}
          autoCorrect={false}
        />
      </View>
      <CategoryPills value={category} onChange={setCategory} />
      <View style={styles.list}>
        {filtered.map(place => (
          <PlaceCard
            key={place.id}
            place={place}
            saved={isPlaceSaved(place.id)}
            onToggleSave={() => togglePlace(place.id)}
            onOpen={() => navigation.navigate('PlaceDetails', {placeId: place.id})}
          />
        ))}
      </View>
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
  search: {
    minHeight: 50,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 16,
    gap: 10,
  },
  searchIcon: {
    color: colors.textMuted,
    fontSize: 19,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    padding: 0,
  },
  list: {
    marginTop: 28,
  },
});
