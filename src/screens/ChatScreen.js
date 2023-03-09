import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "../../assets/droplet.jpeg";
import Feather from "@expo/vector-icons/Feather";

import colors from "../constants/colors";

const ChatScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.imageContainer}
                source={backgroundImage}></ImageBackground>
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <Feather name="plus" size={24} color={colors.blue} />
                </TouchableOpacity>
                <TextInput />
                <TouchableOpacity>
                    <Feather name="camera" size={24} color={colors.blue} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    imageContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50,
    },

});
export default ChatScreen;
