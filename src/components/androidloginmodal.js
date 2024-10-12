import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { auth, googleProvider } from './firebase'; // Ensure Firebase is properly configured
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; // Note: signInWithPopup is not applicable in React Native

const LoginModal = ({ visible, onClose, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setError('');
        setLoading(true);
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
            onLoginSuccess();
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        try {
            // Use Firebase Google auth for mobile (requires additional setup)
            const result = await auth.signInWithPopup(googleProvider); // Note: signInWithPopup is not for mobile
            onLoginSuccess();
            onClose();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={handleGoogleLogin}
                            style={styles.googleButton}
                        >
                            <Text style={styles.googleButtonText}>{isLogin ? 'Login' : 'Sign Up'} with Google</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.orText}>Or {isLogin ? 'login' : 'sign up'} with email</Text>

                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        disabled={loading}
                        style={[styles.submitButton, loading && styles.disabledButton]}
                    >
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.submitButtonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
                        )}
                    </TouchableOpacity>

                    {error && <Text style={styles.errorText}>{error}</Text>}
                    <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.switchText}>{isLogin ? 'Switch to Sign Up' : 'Switch to Login'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    googleButton: {
        backgroundColor: '#4285F4',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    googleButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'gray',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: '#4285F4',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    switchText: {
        color: '#4285F4',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default LoginModal;
