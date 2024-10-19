import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation prop types
type RootStackParamList = {
  Home: undefined;
  YöneticiPaneli: undefined;
  InventreeStokTaşıma: undefined;
  InventreeİşEmirleri: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
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
  text: {
    fontSize: 20,
    marginVertical: 15,
    color: '#fff',
    backgroundColor:'#3399FF',
    padding:15,
    borderRadius:10
  },
});

export default HomeScreen;
