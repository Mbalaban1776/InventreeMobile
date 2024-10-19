import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop and route params
type RootStackParamList = {
  Home: { email: string };
  YöneticiPaneli: undefined;
  InventreeStokTaşıma: undefined;
  InventreeİşEmirleri: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  // Access the email passed from LoginScreen
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const { email } = route.params;

  // Extract the first letter of the email
  const firstLetter = email.charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      {/* Circle with the first letter of the email */}
      <View style={styles.circle}>
        <Text style={styles.circleText}>{firstLetter}</Text>
      </View>

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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    marginVertical: 15,
    color: '#fff',
    backgroundColor:'#3399FF',
    padding: 15,
    borderRadius: 10
  },
});

export default HomeScreen;
