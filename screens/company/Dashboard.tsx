import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors, dimensions, font } from '../../config/constant'

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                width: dimensions.width * 0.9,
                paddingVertical: 8
            }}>
                <Text style={{ fontSize: font.size.title, fontWeight: '700', color: font.color.black }}>Selamat Datang</Text>
                <Text style={{ fontSize: font.size.medium, fontWeight: '400', color: font.color.gray }}>Anda Login Sebagai PT.Omah Indonesia</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background
    }
})

export default Dashboard