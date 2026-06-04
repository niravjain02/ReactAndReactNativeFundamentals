import AsyncStorage from "@react-native-async-storage/async-storage";

const PROFILE_STORAGE_KEY = "day17.profileSettings";

export async function saveProfileSettings(settings) {
  // AsyncStorage stores strings, so objects need JSON.stringify before saving.
  const serializedSettings = JSON.stringify(settings);
  await AsyncStorage.setItem(PROFILE_STORAGE_KEY, serializedSettings);
}

export async function loadProfileSettings() {
  const serializedSettings = await AsyncStorage.getItem(PROFILE_STORAGE_KEY);

  if (!serializedSettings) {
    return null;
  }

  // JSON.parse turns the saved string back into a JavaScript object.
  return JSON.parse(serializedSettings);
}

export async function clearProfileSettings() {
  await AsyncStorage.removeItem(PROFILE_STORAGE_KEY);
}
