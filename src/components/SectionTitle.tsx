import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/theme';

export function SectionTitle({title}: {title: string}) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginTop: 26,
    marginBottom: 14,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },
});
