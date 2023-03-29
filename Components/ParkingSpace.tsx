import React, { useState } from 'react';
import {StyleSheet, View , Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
 

const ParkingSpace = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const numberOfSpace=route.params;

  const [addVehicalFlag, setAddVehicalFlag] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');
  const [availableSpace, setAvailableSpace] = useState<number>(10);
  const [registrationNumber, setRegistrationNumber] = useState<string | any>('');

  const [vehicalData, setVehicalData] = useState<string[] | any>([]);
                                                                                
  const handleAddVehicalClick = () => {
    setAddVehicalFlag(true);
  };

  const handleNewVehicalData = () => {
    setAddVehicalFlag(false);
    if (availableSpace !== 0) {
      const newValues = [...vehicalData];
      // console.log(newValues)
      if (newValues.length >= 10) {
        newValues.shift();
      }
      newValues.push(registrationNumber);
      // console.log(newValues)
      setVehicalData( newValues );
      console.log(vehicalData)
      setAvailableSpace(availableSpace - 1);
    } else {
      alert('Parking Space is full');
    }
  };

  const handleTime = (text: string) => {
    console.log("I am handle Time")
    setTime(text);
    console.log(time)
  };

  const handleRegistrationNumber = (text: string) => {
    console.log("I am handle Registration Numver")
    setRegistrationNumber(text);
    console.log(registrationNumber)
  };

  return (
    <View style={styles.main} >
      <Text style={styles.heading} >Parking Management System 📍</Text>
      <View  />
      <View style={styles.headingSpace} >
        <Text testID='available-space' style={styles.headingSpaceLabel} >Available Space : {availableSpace}</Text>
        <Text testID='parking-space-required' style={styles.headingSpaceLabel} >
          ParkingSpace Required:{' '}
          {route.params ? route.params.numberOfSpace : 0}
        </Text>
      </View>
      <View style={styles.parkingDrawingSpaceMain} >


        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[0],
              Time: time,
            })
          }
         
        >
          {vehicalData.length === 0 ? (
            <Text testID="parking-drawing-spacenumber-1">1</Text>
          ) : (
            <View style={styles.parkedCarBox} >
              <Text style={styles.parkingBoxNumber} >{vehicalData[0]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[0],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text style={styles.parkingSpaceButton} >Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity
         style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[1],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 1 ? (
            <Text testID="parking-drawing-spacenumber-1">2</Text>
          ) : (
            <View style={styles.parkedCarBox} >
              <Text style={styles.parkingBoxNumber} >{vehicalData[1]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[1],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text style={styles.parkingSpaceButton} >Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[2],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 2 ? (
            <Text testID="parking-drawing-spacenumber-1">3</Text>
          ) : (
            <View >
              <Text >{vehicalData[2]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[2],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[3],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 3 ? (
            <Text testID="parking-drawing-spacenumber-1">4</Text>
          ) : (
            <View >
              <Text >{vehicalData[3]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[3],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[4],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 4 ? (
            <Text testID="parking-drawing-spacenumber-1">5</Text>
          ) : (
            <View >
              <Text >{vehicalData[4]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[5],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[5],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 5 ? (
            <Text testID="parking-drawing-spacenumber-1">6</Text>
          ) : (
            <View >
              <Text >{vehicalData[5]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[5],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[6],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 6 ? (
            <Text testID="parking-drawing-spacenumber-1">7</Text>
          ) : (
            <View >
              <Text >{vehicalData[7]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[7],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[7],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 7 ? (
            <Text testID="parking-drawing-spacenumber-1">8</Text>
          ) : (
            <View >
              <Text >{vehicalData[7]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[7],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[8],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 8 ? (
            <Text testID="parking-drawing-spacenumber-1">9</Text>
          ) : (
            <View >
              <Text >{vehicalData[8]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[8],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.parkingItem}
          onPress={() =>
            navigation.navigate('CheckOutPage', {
              vehicalData: vehicalData[9],
              Time: time,
            })
          }
         
        >
          {vehicalData.length <= 9 ? (
            <Text testID="parking-drawing-spacenumber-1">10</Text>
          ) : (
            <View >
              <Text >{vehicalData[9]}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckOutPage', {
                    vehicalData: vehicalData[9],
                    Time: time,
                  })
                }
                // style={styles.parkingSpaceButton}
              >
                <Text>Tap To checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
         </View>
         <View>
            {
              !addVehicalFlag  && <Text style={styles.addVehicalButton} onPress={handleAddVehicalClick} > Add Vehical</Text>
               
            }
         </View>
         <View>
          {
            addVehicalFlag &&

            <View style={styles.carInfo} >
              <Text>Enter Time</Text>
              <TextInput   placeholder='Time' onChangeText={text => handleTime(text)} ></TextInput>
              <Text>Enter Vehical Number</Text>
              <TextInput  placeholder='Enter the Vehical number' onChangeText={text => handleRegistrationNumber(text)}   ></TextInput>
               <Text style={styles.submitButton}  onPress={handleNewVehicalData} >Submit</Text>
            </View>

          }
         </View>
     </View>
  )}
  const styles = StyleSheet.create({
    parkingItem: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
      width: '20vh',
      marginTop: 20,
      marginRight: 20,
      borderWidth: 2,
      borderColor: 'rgb(32, 103, 26)',
    },
    heading: {
      color: '#19751c',
    },
    carInfo: {
      marginTop: '5vh',
      marginBottom: '10vh',
      height: '10hv',
      width: '100%',
      borderWidth: 2,
      borderColor: 'green',
    },
    headingSpace: {
      justifyContent: 'center',
      flexDirection: 'column',
      flexWrap: 'wrap',
    },
    headingSpaceLabel: {
       
      fontWeight: '600',
      color: '#4CAF50',
    },
    addVehicalButton: {
      marginTop: '5vh',
      height: '5vh',
      width: '20vh',
      marginBottom: '5vh',
      borderRadius: 5,
      backgroundColor: 'rgb(46, 126, 197)',
    },
    main: {
      marginLeft: '10vh',
    },
    parkingSpaceButton: {
      height: '5vh',
      width: '10vh',
      borderRadius: 5,
      backgroundColor: '#4CAF50',
      color: '#fff',
      fontSize: 10,
      
      transition: 'all 0.3s ease',
    },
    parkingSpaceButtonHover: {
      backgroundColor: '#fff',
      color: '#4CAF50',
      borderWidth: 2,
      borderColor: '#4CAF50',
    },
    parkedCarBox: {
      backgroundColor: '#9bf19e',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
      width: '20vh',
    },
    parkingBoxNumber: {
      color: '#034a05',
    },
    parkingDrawingSpaceMain: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    input: {
      padding: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#ccc',
      fontSize: 16,
    },
    inputFocus: {
       
      borderColor: '#5D5D5D',
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      width: '100px',
      borderRadius: 5,
      marginBottom: '5px',
      marginLeft: '5px',
    },
    submitButtonHover: {
      backgroundColor: '#3e8e41',
    },
  });
  
  
  export default ParkingSpace;
