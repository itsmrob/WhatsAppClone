import React, { useCallback, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import backgroundImage from "../../assets/droplet.jpeg";
import Feather from "@expo/vector-icons/Feather";

import colors from "../constants/colors";

const ChatScreen = () => {
    const [textMessage, setTextMessage] = useState("");

    const sendMessage = useCallback(() => {
        setTextMessage("");
    }, [textMessage]);

    let { sendButton, mediaButton } = styles;

    return (
        <SafeAreaView
            style={styles.container}
            edges={["right", "left", "bottom"]}>
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={100}
                style={styles.screen}
            >
                <ImageBackground
                    style={styles.imageContainer}
                    source={backgroundImage}></ImageBackground>
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.mediaButton}>
                        <Feather name="plus" size={24} color={colors.blue} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputStyle}
                        value={textMessage}
                        onChangeText={(text) => setTextMessage(text)}
                        onSubmitEditing={sendMessage}
                    />
                    {textMessage !== "" && (
                        <TouchableOpacity
                            style={{ ...mediaButton, ...sendButton }}
                            onPress={sendMessage}>
                            <Feather name="send" size={20} color="white" />
                        </TouchableOpacity>
                    )}
                    {textMessage === "" && (
                        <TouchableOpacity style={mediaButton}>
                            <Feather
                                name="camera"
                                size={24}
                                color={colors.blue}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    screen: {
        flex: 1
    },
    imageContainer: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 50,
    },
    inputStyle: {
        flex: 1,
        height: 30,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.lightGrey,
        marginHorizontal: 15,
        paddingHorizontal: 12,
    },
    mediaButton: {
        alignItems: "center",
        justifyContent: "center",
        width: 35,
    },
    sendButton: {
        backgroundColor: colors.blue,
        borderRadius: 50,
    },
});
export default ChatScreen;
