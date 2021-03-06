import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { LoginScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS, SCREENS_NAMES } from '../constants';
import { StackParamList } from './types';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Stack = createStackNavigator<StackParamList>();

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.BLACKCURRANT,
  },
});

export const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen
              name={SCREENS_NAMES.HOME}
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen
              name={SCREENS_NAMES.LOGIN}
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
