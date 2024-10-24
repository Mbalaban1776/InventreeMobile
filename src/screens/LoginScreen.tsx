import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Modal, Text, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for your stack routes
type RootStackParamList = {
  Login: { signedOut: boolean } | undefined;
  Home: { email: string };  // Pass email to HomeScreen
};

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');  // Email state
  const [password, setPassword] = useState<string>('');  // Password state
  const [showPassword, setShowPassword] = useState<boolean>(false);  // Show password state
  const [showSignedOutModal, setShowSignedOutModal] = useState(false); // Modal state for signed out message

  const route = useRoute<RouteProp<RootStackParamList, 'Login'>>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Show signed out modal if user comes from sign out
  useEffect(() => {
    if (route.params?.signedOut) {
      setShowSignedOutModal(true);
      setTimeout(() => {
        setShowSignedOutModal(false);
      }, 2000);
    }
  }, [route.params?.signedOut]);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    // Navigate to HomeScreen and pass the email
    navigation.replace('Home', { email });

    // Clear email and password after successful login
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {/* Signed Out Modal */}
      <Modal transparent visible={showSignedOutModal} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Signed Out Successfully</Text>
          </View>
        </View>
      </Modal>

      {/* Logo Image */}
      <Image 
        source={require('../assets/logo.png')}  // Path to your logo
        style={styles.logo} 
        resizeMode="contain"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}  // Initially hide password
      />

      {/* Login Button */}
      <Button
        title="Login"
        onPress={handleLogin} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
