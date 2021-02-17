import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text} from "react-native-elements";
import { auth } from "../firebase";
const RegisterScreen = ({ navigation }) => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[imgURL, setImgURL] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
         
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageURL || "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",

            })

        }).catch((error) => alert(error.message));
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
            <StatusBar style="light" />
            <Text h3 style={{marginBottom: 50}}>
                Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
                    <Input placeholder="Full Name" 
                        autoFocus type="text" 
                        value={name} 
                        onChangeText={(text) => setName(text)}/>
                    <Input placeholder="Email" 
                        type="text" 
                        value={email} 
                        onChangeText={(text) => setEmail(text)}/>
                    <Input placeholder="Password" 
                        type="password" 
                        secureTextEntry
                        value={password} 
                        onChangeText={(text) => setPassword(text)}/>
                    <Input placeholder="Profile Picture URL (Optional)" 
                        type="text" 
                        value={imgURL} 
                        onChangeText={(text) => setImgURL(text)}
                        onSubmitEditing={register}
                        />

            </View>
            <Button 
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Register"
                />
            <View style={{height: 10 }} />
        </KeyboardAvoidingView>
    );
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",

    },
    button:{
        width: 200,
        marginTop: 10,

    },
    inputContainer:{
        width: 300,
    }
});