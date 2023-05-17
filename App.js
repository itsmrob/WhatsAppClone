import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Settings, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import { store } from "./src/store/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsLoaded, setAppIsLoaded] = useState(false);

    useEffect(() => {
        const prepare = async () => {
            try {
                await Font.loadAsync({
                    black: require("./assets/fonts/Roboto-Black.ttf"),
                    blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
                    bold: require("./assets/fonts/Roboto-Bold.ttf"),
                    boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
                    italic: require("./assets/fonts/Roboto-Italic.ttf"),
                    light: require("./assets/fonts/Roboto-Light.ttf"),
                    lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
                    medium: require("./assets/fonts/Roboto-Medium.ttf"),
                    mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
                    regular: require("./assets/fonts/Roboto-Regular.ttf"),
                    thin: require("./assets/fonts/Roboto-Thin.ttf"),
                    thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
                });
            } catch (error) {
                console.log(error);
            } finally {
                setAppIsLoaded(true);
            }
        };
        prepare();
    }, []);

    const onLayout = useCallback(async () => {
        if (appIsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [appIsLoaded]);

    if (!appIsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <SafeAreaProvider style={styles.container} onLayout={onLayout}>
                <AppNavigator />
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
