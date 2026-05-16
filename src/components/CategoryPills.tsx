import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PillButton} from './Buttons';
import {categories, PlaceCategory} from '../data/places';

type CategoryFilter = PlaceCategory | 'All';

export function CategoryPills({
  value,
  onChange,
}: {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}>
      <PillButton label="All" active={value === 'All'} onPress={() => onChange('All')} />
      {categories.map(category => (
        <PillButton
          key={category}
          label={category}
          active={value === category}
          onPress={() => onChange(category)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 9,
    paddingRight: 24,
  },
});
