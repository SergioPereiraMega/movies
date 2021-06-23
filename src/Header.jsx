import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Movies App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "gray",
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20
    }
})
