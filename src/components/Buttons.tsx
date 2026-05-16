import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {colors, radius} from '../theme/theme';

type PillButtonProps = {
  label: string;
  icon?: string;
  active?: boolean;
  onPress: () => void;
  style?: ViewStyle;
};

export function PillButton({label, icon, active, onPress, style}: PillButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.pill,
        active && styles.pillActive,
        pressed && styles.pressed,
        style,
      ]}>
      {icon ? <Text style={[styles.icon, active && styles.activeText]}>{icon}</Text> : null}
      <Text style={[styles.label, active && styles.activeText]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

export function IconButton({
  icon,
  onPress,
  active,
  style,
}: {
  icon: string;
  onPress: () => void;
  active?: boolean;
  style?: ViewStyle;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.iconButton,
        active && styles.iconButtonActive,
        pressed && styles.pressed,
        style,
      ]}>
      <Text style={[styles.iconButtonText, active && styles.activeText]}>{icon}</Text>
    </Pressable>
  );
}

export function PrimaryButton({
  label,
  icon,
  onPress,
  style,
}: {
  label: string;
  icon?: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.primary, pressed && styles.pressed, style]}>
      {icon ? <Text style={styles.primaryLeadingIcon}>{icon}</Text> : null}
      <Text style={styles.primaryText} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.82}>
        {label}
      </Text>
      <Text style={styles.primaryArrow}>➡️</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    minHeight: 34,
    maxWidth: 190,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
  },
  pillActive: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  label: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  icon: {
    color: colors.textMuted,
    fontSize: 13,
  },
  activeText: {
    color: colors.text,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: radius.sm,
    backgroundColor: 'rgba(5, 42, 33, 0.76)',
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonActive: {
    borderColor: colors.lineStrong,
    backgroundColor: 'rgba(81, 128, 55, 0.36)',
  },
  iconButtonText: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '700',
  },
  primary: {
    minHeight: 56,
    borderRadius: 14,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
  primaryText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
    flexShrink: 1,
    textAlign: 'center',
    includeFontPadding: false,
  },
  primaryLeadingIcon: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '800',
    marginRight: 10,
  },
  primaryArrow: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 14,
  },
  pressed: {
    opacity: 0.78,
    transform: [{scale: 0.99}],
  },
});
