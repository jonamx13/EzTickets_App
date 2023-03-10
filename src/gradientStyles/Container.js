import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, StyleSheet } from 'react-native';

const Container = ({children}) => {
  return (
    <LinearGradient
    colors={['#1e1e1e', '#121212', '#000000']}
    style={styles.gradient}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        // marginHorizontal: 0,
    },
});

export default Container;