import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, radius, shadowStyle, spacing, tabBarBottomGap} from '../theme/theme';

const icons: Record<string, string> = {
  Home: '🏡',
  Explore: '🧭',
  Map: '🗺️',
  Saved: '🔖',
  Notes: '📖',
};

export function FloatingTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View style={[styles.wrap, shadowStyle]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? String(options.tabBarLabel)
            : options.title !== undefined
              ? options.title
              : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable key={route.key} onPress={onPress} style={styles.item}>
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Text style={[styles.icon, focused && styles.active]}>{icons[route.name]}</Text>
            </View>
            <Text style={[styles.label, focused && styles.active]} numberOfLines={1}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: tabBarBottomGap,
    height: spacing.tabHeight,
    borderRadius: radius.md,
    backgroundColor: 'rgba(3, 32, 26, 0.96)',
    borderWidth: 1,
    borderColor: colors.line,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 0,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: 'rgba(77, 151, 58, 0.28)',
  },
  icon: {
    color: colors.textSoft,
    fontSize: 20,
    fontWeight: '900',
  },
  label: {
    color: colors.textSoft,
    fontSize: 11,
    fontWeight: '700',
  },
  active: {
    color: colors.greenBright,
  },
});
