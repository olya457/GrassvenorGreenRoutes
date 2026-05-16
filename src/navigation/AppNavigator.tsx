import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ExploreScreen} from '../screens/ExploreScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {MapScreen} from '../screens/MapScreen';
import {NoteDetailsScreen} from '../screens/NoteDetailsScreen';
import {NotesScreen} from '../screens/NotesScreen';
import {OnboardingScreen} from '../screens/OnboardingScreen';
import {PlaceDetailsScreen} from '../screens/PlaceDetailsScreen';
import {RouteDetailsScreen} from '../screens/RouteDetailsScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {SplashScreen} from '../screens/SplashScreen';
import {FloatingTabBar} from './FloatingTabBar';
import type {MainTabParamList, RootStackParamList} from './types';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function renderFloatingTabBar(props: BottomTabBarProps) {
  return <FloatingTabBar {...props} />;
}

function MainTabs() {
  return (
    <Tab.Navigator
      tabBar={renderFloatingTabBar}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          contentStyle: {backgroundColor: '#042f25'},
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} />
        <Stack.Screen name="RouteDetails" component={RouteDetailsScreen} />
        <Stack.Screen name="NoteDetails" component={NoteDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
