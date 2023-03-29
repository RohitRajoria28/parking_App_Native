import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

  const Home = () => {
  const navigation = useNavigation();
  const [numberOfSpace, setNumberOfSpace] = useState<number | null>(null);

  const handleSubmit = () => {
    navigation.navigate('ParkingSpace', { numberOfSpace });
  };

  const updateName = (value: string) => {
    setNumberOfSpace(Number(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Park Pro 🚗</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter Number of Parking Spaces</Text>
        <TextInput
          testID="Parking-create-text-input"
          placeholder="Enter Number of Space"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={updateName}
        />
        <TouchableOpacity
          testID="Parking-create-submitbutton"
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default Home;