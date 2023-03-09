import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const ChatListScreen = (props) => {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text>Chat List Screen</Text>
            <Button
                title="Go to Chat Screen"
                onPress={() => navigation.navigate("ChatScreen")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default ChatListScreen;
