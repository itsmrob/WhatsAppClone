import { useState, useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsLoaded, setAppIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setAppIsLoaded(true), 2000);
    });

    const onLayout = useCallback(async () => {
      if (appIsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [appIsLoaded]);

    if (!appIsLoaded) {
      return null;
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <Text>Hi everyone!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
