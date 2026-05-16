import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius} from '../theme/theme';

export function InfoBox({children}: {children: React.ReactNode}) {
  return <View style={styles.info}>{children}</View>;
}

export function DetailSection({title, children}: {title: string; children: React.ReactNode}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export function Chip({label}: {label: string}) {
  return <Text style={styles.chip}>{label}</Text>;
}

export function ChipWrap({items}: {items: string[]}) {
  return (
    <View style={styles.chipWrap}>
      {items.map(item => (
        <Chip key={item} label={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    borderRadius: radius.md,
    backgroundColor: colors.panel,
    borderWidth: 1,
    borderColor: colors.line,
    padding: 16,
    marginBottom: 20,
  },
  section: {
    marginTop: 8,
    marginBottom: 18,
    gap: 9,
  },
  sectionTitle: {
    color: colors.gold,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    color: colors.textMuted,
    fontSize: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.lineStrong,
    backgroundColor: colors.panel,
    paddingHorizontal: 12,
    paddingVertical: 8,
    overflow: 'hidden',
  },
});
