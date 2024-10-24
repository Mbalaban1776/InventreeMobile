import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Alert} from 'react-native';

const WorkOrdersScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement the search logic or function call
    Alert.alert('Search for: ' + searchTerm);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventree İş Emri Oluşturma</Text>
      <TextInput
        style={styles.input}
        placeholder="Parça Ara"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>ARA</Text>
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
    backgroundColor: '#fff',  // Adjust background color as needed
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    fontSize:20
  },
  button: {
    height: 50, // Increase the height
    width: '30%', // Increase the width
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, // Increase the text size
    fontWeight: 'bold',
  },
});

export default WorkOrdersScreen;
