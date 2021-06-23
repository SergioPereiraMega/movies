import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Made with React Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "black",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white"
    }
})
