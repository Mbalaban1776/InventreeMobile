import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Correct Import

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false); // Toggle state for showing password

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    Alert.alert('Logged In', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
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
        textContentType="emailAddress"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}  // Initially hide password
          textContentType="password"
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowPassword(!showPassword)}  // Toggle password visibility
        >
          <MaterialIcons
            name={showPassword ? 'visibility' : 'visibility-off'}  // Change icon based on visibility state
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />
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
    borderRadius: 5,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
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
});

export default LoginScreen;
