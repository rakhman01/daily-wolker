import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/constant'


const Chat = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{ color: colors.gray }}>chat</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})

export default Chat