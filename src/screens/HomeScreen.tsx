import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Alert } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop and route params
type RootStackParamList = {
  Home: { email: string };
  YöneticiPaneli: undefined;
  InventreeStokTaşıma: undefined;
  InventreeİşEmirleri: undefined;
  Login: { signedOut: boolean };  // Pass signedOut parameter to Login screen
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Access the email passed from LoginScreen
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const { email } = route.params;

  // Extract the first letter of the email
  const firstLetter = email.charAt(0).toUpperCase();

  // Modal visibility state
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Handle sign out
  const handleSignOut = () => {
    // Close the profile modal first
    setModalVisible(false);

    // Wait briefly to ensure the modal closes smoothly, then navigate
    setTimeout(() => {
      // Use navigation.replace() to reset the Login screen and pass signedOut parameter
      navigation.replace('Login', { signedOut: true });
    }, 300); // 300ms delay to close the modal smoothly
  };

  // Handle change password
  const handleChangePassword = () => {
    setModalVisible(false);
    Alert.alert('Change Password functionality to be implemented.');
  };

  return (
    <View style={styles.container}>
      {/* Circle with the first letter of the email */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.circle}>
        <Text style={styles.circleText}>{firstLetter}</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Profile</Text>

            {/* Wrapped buttons with margin */}
            <View style={styles.buttonWrapper}>
              <Button title="Sign Out" onPress={handleSignOut} />
            </View>

            <View style={styles.buttonWrapper}>
              <Button title="Change Password" onPress={handleChangePassword} />
            </View>

            <View style={styles.buttonWrapper}>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Clickable texts */}
      <TouchableOpacity onPress={() => navigation.navigate('YöneticiPaneli')}>
        <Text style={styles.text}>Yönetici Paneli</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('InventreeStokTaşıma')}>
        <Text style={styles.text}>Inventree Stok Taşıma</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('InventreeİşEmirleri')}>
        <Text style={styles.text}>Inventree İş Emirleri</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  circle: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
  },
  modalContent: {
    width: 250,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonWrapper: {
    marginVertical: 10,  // Add margin to buttons
    width: '100%',
  },
  text: {
    fontSize: 20,
    marginVertical: 15,
    color: '#fff',
    backgroundColor: '#3399FF',
    padding: 15,
    borderRadius: 10,
  },
});

export default HomeScreen;
