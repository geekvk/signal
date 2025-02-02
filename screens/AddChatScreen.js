import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet,  View, Text } from 'react-native'
import {Button, Icon, Input } from "react-native-elements";
import { db } from '../firebase';
const AddChatScreen = ({ navigation }) => {
    const[input, setInput] = useState("");

    const createChat = async() => {
            await db.collection('chats').add({
                chatName: input
            }).then(() => {
                navigation.goBack();
            }).catch((error) => alert(error));
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a New Chat",
            headerBackTitle: "Chats",
        })
    }, []);
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a Chat name"
                value={input} 
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon
                        name="wechat"
                        type="antdesign"
                        size={24}
                        color="black"
                        
                        />
                }
                />
                <Button 
                    disabled={!input}
                    onPress={createChat}
                    title="Create New Chat"
                    />
        </View>
    )
}

export default AddChatScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        padding: 30,
        height:"100%"
    },
});
