import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {storageKeys} from './appStorage';

type SavedState = {
  placeIds: string[];
  routeIds: string[];
  noteIds: string[];
};

type SavedContextValue = SavedState & {
  hydrated: boolean;
  isPlaceSaved: (id: string) => boolean;
  isRouteSaved: (id: string) => boolean;
  isNoteSaved: (id: string) => boolean;
  togglePlace: (id: string) => void;
  toggleRoute: (id: string) => void;
  toggleNote: (id: string) => void;
  removePlace: (id: string) => void;
  removeRoute: (id: string) => void;
  removeNote: (id: string) => void;
};

const emptyState: SavedState = {
  placeIds: [],
  routeIds: [],
  noteIds: [],
};

const SavedContext = createContext<SavedContextValue | undefined>(undefined);

function toggleId(list: string[], id: string) {
  return list.includes(id) ? list.filter(item => item !== id) : [...list, id];
}

export function SavedProvider({children}: {children: React.ReactNode}) {
  const [saved, setSaved] = useState<SavedState>(emptyState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem(storageKeys.savedState)
      .then(value => {
        if (!mounted || !value) {
          return;
        }
        const parsed = JSON.parse(value) as Partial<SavedState>;
        setSaved({
          placeIds: Array.isArray(parsed.placeIds) ? parsed.placeIds : [],
          routeIds: Array.isArray(parsed.routeIds) ? parsed.routeIds : [],
          noteIds: Array.isArray(parsed.noteIds) ? parsed.noteIds : [],
        });
      })
      .catch(() => undefined)
      .finally(() => {
        if (mounted) {
          setHydrated(true);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    AsyncStorage.setItem(storageKeys.savedState, JSON.stringify(saved)).catch(() => undefined);
  }, [hydrated, saved]);

  const togglePlace = useCallback((id: string) => {
    setSaved(current => ({...current, placeIds: toggleId(current.placeIds, id)}));
  }, []);

  const toggleRoute = useCallback((id: string) => {
    setSaved(current => ({...current, routeIds: toggleId(current.routeIds, id)}));
  }, []);

  const toggleNote = useCallback((id: string) => {
    setSaved(current => ({...current, noteIds: toggleId(current.noteIds, id)}));
  }, []);

  const removePlace = useCallback((id: string) => {
    setSaved(current => ({...current, placeIds: current.placeIds.filter(item => item !== id)}));
  }, []);

  const removeRoute = useCallback((id: string) => {
    setSaved(current => ({...current, routeIds: current.routeIds.filter(item => item !== id)}));
  }, []);

  const removeNote = useCallback((id: string) => {
    setSaved(current => ({...current, noteIds: current.noteIds.filter(item => item !== id)}));
  }, []);

  const value = useMemo<SavedContextValue>(
    () => ({
      ...saved,
      hydrated,
      isPlaceSaved: id => saved.placeIds.includes(id),
      isRouteSaved: id => saved.routeIds.includes(id),
      isNoteSaved: id => saved.noteIds.includes(id),
      togglePlace,
      toggleRoute,
      toggleNote,
      removePlace,
      removeRoute,
      removeNote,
    }),
    [hydrated, removeNote, removePlace, removeRoute, saved, toggleNote, togglePlace, toggleRoute],
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved() {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used inside SavedProvider');
  }
  return context;
}
