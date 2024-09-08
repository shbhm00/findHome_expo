import React from 'react';
import {  SafeAreaView, StyleSheet } from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode; // Correct typing for children
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
