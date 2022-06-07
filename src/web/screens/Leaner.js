import React from 'react';
import { Text, View, Button } from 'react-native';

const Leaner = () => {
    return (
        <View style={styles.container}>
        <Text> Leaner Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }
})

export default Leaner;

