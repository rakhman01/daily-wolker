import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../config/constant'


const Profile = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ color: colors.gray }}>Profile</Text>
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

export default Profile