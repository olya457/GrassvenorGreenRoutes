import {Platform} from 'react-native';

export const colors = {
  background: '#042f25',
  backgroundDeep: '#01251e',
  panel: '#103f33',
  panelSoft: '#164b3e',
  panelDeep: '#073126',
  cream: '#efe7cb',
  creamMuted: '#d8cfb2',
  text: '#f4f0dc',
  textMuted: '#abc6a6',
  textSoft: '#7fa06f',
  green: '#4f973a',
  greenBright: '#68b94a',
  gold: '#d4b263',
  line: 'rgba(188, 217, 160, 0.2)',
  lineStrong: 'rgba(212, 178, 99, 0.42)',
  shadow: 'rgba(0, 0, 0, 0.35)',
  danger: '#ff4d68',
};

export const radius = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
};

export const spacing = {
  screen: 24,
  gap: 14,
  tabHeight: 74,
};

export const platformTopInset = Platform.OS === 'android' ? 30 : 0;
export const tabBarBottomGap = Platform.OS === 'android' ? 30 : 20;
export const bottomContentInset = spacing.tabHeight + tabBarBottomGap + 28;

export const shadowStyle = Platform.select({
  ios: {
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 16},
    shadowOpacity: 0.28,
    shadowRadius: 24,
  },
  android: {
    elevation: 16,
  },
  default: {},
});
