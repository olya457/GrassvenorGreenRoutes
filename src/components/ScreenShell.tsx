import React from 'react';
import {Platform, ScrollView, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {bottomContentInset, colors, platformTopInset, spacing} from '../theme/theme';

type ScreenShellProps = {
  children: React.ReactNode;
  scroll?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};

export function ScreenShell({children, scroll = true, style, contentStyle}: ScreenShellProps) {
  const insets = useSafeAreaInsets();
  const paddingTop = Math.max(insets.top + 12, platformTopInset);
  const paddingBottom = bottomContentInset + (Platform.OS === 'android' ? 0 : Math.max(insets.bottom - 16, 0));

  if (!scroll) {
    return (
      <View style={[styles.root, {paddingTop}, style]}>
        {children}
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.root, style]}
      contentContainerStyle={[styles.content, {paddingTop, paddingBottom}, contentStyle]}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.screen,
  },
});
