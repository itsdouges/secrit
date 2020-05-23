import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const sheet = StyleSheet.create({
  heading: {
    fontSize: 24,
  },
});

export const Queue = () => {
  return (
    <View>
      <Text style={sheet.heading}>Teams in Space</Text>
    </View>
  );
};
