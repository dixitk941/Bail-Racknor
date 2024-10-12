import React, { useState } from 'react';
import { auth, googleProvider } from './firebase'; // Ensure firebase is properly configured
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const LoginModal = ({ onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: 'YOUR_EXPO_CLIENT_ID',
        iosClientId: 'YOUR_IOS_CLIENT_ID',
        androidClientId: 'YOUR_ANDROID_CLIENT_ID',
        webClientId: 'YOUR_WEB_CLIENT_ID',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            const credential = GoogleAuthProvider.credential(authentication.idToken);
            signInWithCredential(auth, credential)
                .then(() => onLoginSuccess())
                .catch((err) => setError(err.message));
        }
    }, [response]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
            onLoginSuccess();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        promptAsync();
    };

    return (
        <View style={styles.container}>
            <Text>{isLogin ? 'Login' : 'Sign Up'}</Text>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleSubmit} disabled={loading} />
            <Button title="Login with Google" onPress={handleGoogleLogin} disabled={!request || loading} />
            <Button
                title={isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
                onPress={() => setIsLogin(!isLogin)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
    },
    error: {
        color: 'red',
    },
});

export default LoginModal;
