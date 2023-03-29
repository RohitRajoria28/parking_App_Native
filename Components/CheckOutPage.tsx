import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const CheckOutPage = ({route}) => {
  console.log(route);
  return (
    <View>
        <Text>Check Out Time : {route.params.Time}</Text>
        <Text>CheckOut Vehical: {route.params.vehicalData} </Text>
        <Text>Payable Amount : 30$</Text>
    </View>
  )
}

export default CheckOutPage