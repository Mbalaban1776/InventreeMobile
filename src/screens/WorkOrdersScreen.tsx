import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WorkOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventree İş Emirleri</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WorkOrdersScreen;
