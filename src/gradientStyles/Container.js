import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView, StyleSheet } from 'react-native';

const Container = ({children}) => {
  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
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