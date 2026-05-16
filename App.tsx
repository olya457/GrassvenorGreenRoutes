import React from 'react';
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './src/navigation/AppNavigator';
import {SavedProvider} from './src/state/SavedContext';

enableScreens();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SavedProvider>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <AppNavigator />
      </SavedProvider>
    </SafeAreaProvider>
  );
}

export default App;
