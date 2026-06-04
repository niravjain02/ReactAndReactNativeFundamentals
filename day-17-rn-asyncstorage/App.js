import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import ProfileForm from "./components/ProfileForm";
import ProfilePreview from "./components/ProfilePreview";
import { clearProfileSettings, loadProfileSettings, saveProfileSettings } from "./storage/profileStorage";

const DEFAULT_PROFILE = {
  name: "Nirav Jain",
  role: "React Native Learner",
  darkMode: false
};

export default function App() {
  const [name, setName] = useState(DEFAULT_PROFILE.name);
  const [role, setRole] = useState(DEFAULT_PROFILE.role);
  const [darkMode, setDarkMode] = useState(DEFAULT_PROFILE.darkMode);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("Loading saved profile...");

  useEffect(() => {
    restoreSavedProfile();
  }, []);

  async function restoreSavedProfile() {
    try {
      // Restore flow: read the saved string from AsyncStorage, parse it, then
      // use the values to rebuild the screen state when the app launches.
      const savedProfile = await loadProfileSettings();

      if (savedProfile) {
        setName(savedProfile.name || DEFAULT_PROFILE.name);
        setRole(savedProfile.role || DEFAULT_PROFILE.role);
        setDarkMode(Boolean(savedProfile.darkMode));
        setMessage("Restored saved profile.");
      } else {
        setMessage("No saved profile yet. Edit the form and save it locally.");
      }
    } catch (error) {
      setMessage("Could not restore saved profile.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);

    try {
      // Save flow: collect the current screen state, convert it to JSON in the
      // storage helper, and write it to the device so it survives app restarts.
      await saveProfileSettings({
        name,
        role,
        darkMode
      });
      setMessage("Saved locally. Restart the app to see it restore.");
    } catch (error) {
      setMessage("Could not save profile.");
    } finally {
      setSaving(false);
    }
  }

  async function handleClear() {
    try {
      // Clear flow: remove the saved key from AsyncStorage and reset the screen
      // to beginner-friendly defaults.
      await clearProfileSettings();
      setName(DEFAULT_PROFILE.name);
      setRole(DEFAULT_PROFILE.role);
      setDarkMode(DEFAULT_PROFILE.darkMode);
      setMessage("Saved data cleared.");
    } catch (error) {
      setMessage("Could not clear saved profile.");
    }
  }

  const isDark = darkMode;

  return (
    <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.eyebrow, isDark && styles.darkMutedText]}>Day 17</Text>
        <Text style={[styles.heading, isDark && styles.darkText]}>AsyncStorage & Local Persistence</Text>
        <Text style={[styles.subheading, isDark && styles.darkMutedText]}>
          AsyncStorage saves small pieces of data on the device. Persistence matters in mobile apps because users expect settings and profile details to stay available after the app closes.
        </Text>

        <View style={styles.stack}>
          <View style={[styles.statusBox, isDark && styles.darkStatusBox]}>
            <Text style={[styles.statusText, isDark && styles.darkMutedText]}>
              {loading ? "Restoring saved data..." : message}
            </Text>
            {!loading && (
              <Pressable style={({ pressed }) => [styles.restoreButton, pressed && styles.pressed]} onPress={restoreSavedProfile}>
                <Text style={styles.restoreButtonText}>Restore Saved Data</Text>
              </Pressable>
            )}
          </View>

          <ProfilePreview name={name} role={role} darkMode={darkMode} />

          <ProfileForm
            name={name}
            role={role}
            darkMode={darkMode}
            saving={saving}
            onChangeName={setName}
            onChangeRole={setRole}
            onToggleDarkMode={setDarkMode}
            onSave={handleSave}
            onClear={handleClear}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fb",
    flex: 1
  },
  darkContainer: {
    backgroundColor: "#111827"
  },
  content: {
    padding: 20,
    paddingBottom: 32
  },
  eyebrow: {
    color: "#2563eb",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
    textTransform: "uppercase"
  },
  heading: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8
  },
  subheading: {
    color: "#4b5563",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 18
  },
  darkText: {
    color: "#f9fafb"
  },
  darkMutedText: {
    color: "#d1d5db"
  },
  stack: {
    gap: 12
  },
  statusBox: {
    backgroundColor: "#eef2ff",
    borderColor: "#c7d2fe",
    borderRadius: 8,
    borderWidth: 1,
    padding: 14
  },
  darkStatusBox: {
    backgroundColor: "#1f2937",
    borderColor: "#374151"
  },
  statusText: {
    color: "#374151",
    fontSize: 15,
    lineHeight: 21
  },
  restoreButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#111827",
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  restoreButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800"
  },
  pressed: {
    opacity: 0.75
  }
});
