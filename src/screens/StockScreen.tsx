import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from './path-to-your-types-file';  // Ensure this path is correct


type RootStackParamList = {
  // Login: undefined;
  // Home: undefined;
  // YöneticiPaneli: undefined;
  InventreeStokTaşıma: undefined;
  // InventreeİşEmirleri: undefined;
  Camera: undefined;  // Add camera screen type
};


// Define the type for the navigation prop specific to StockScreen
type StockScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InventreeStokTaşıma'>;

const StockScreen = () => {
  const navigation = useNavigation<StockScreenNavigationProp>();  // Correctly typed navigation hook

  const handlePress = () => {
    navigation.navigate('Camera');  // Correct usage of navigate
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default StockScreen;
