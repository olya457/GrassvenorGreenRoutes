import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageKeys = {
  onboardingSeen: 'grassvenor:onboarding-seen',
  savedState: 'grassvenor:saved-state',
};

export async function getOnboardingSeen() {
  return (await AsyncStorage.getItem(storageKeys.onboardingSeen)) === 'true';
}

export async function setOnboardingSeen() {
  await AsyncStorage.setItem(storageKeys.onboardingSeen, 'true');
}
