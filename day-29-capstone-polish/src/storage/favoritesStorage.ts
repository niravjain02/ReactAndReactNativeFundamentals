import AsyncStorage from '@react-native-async-storage/async-storage';
import type { User } from '../models/User';

const STORAGE_KEY = '@user_directory/favorites';

export async function loadFavorites(): Promise<User[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? (JSON.parse(json) as User[]) : [];
  } catch {
    return [];
  }
}

export async function saveFavorites(users: User[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  } catch {
    // Persistence failure should not crash the UI — fail silently.
  }
}
