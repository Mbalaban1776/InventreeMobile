import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Modal, Text, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
  const [showPassword, setShowPassword] = useState<boolean>(false);  // Toggle password visibility
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
        style={[styles.input, styles.inputText]}  // Add custom font size for email
        placeholder="Enter your email "
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.inputPassword, styles.inputText]}  // Add custom font size for password
          placeholder="Enter your password "
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}  // Toggle password visibility
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowPassword(!showPassword)}  // Toggle the eye icon
        >
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}  // Change icon based on state
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Custom Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
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
  inputText: {
    fontSize: 18,  // Customize the font size of the input text
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,  // Take up the remaining space
    height: 50,
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
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
  // Custom styles for the login button
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,  // Increase padding for a larger button
    paddingHorizontal: 40, // Increase width for a larger button
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
