import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { colors, dimensions, font } from '../config/constant'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface INavigation {
    navigation: any
}

const SelectRoles = ({ navigation }: INavigation) => {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Silahkan Pilih Jenis Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login', { role: "USER" })}>
                <View style={style.card}>
                    <Icon name="briefcase-search" size={24} color={font.color.black} />
                    <Text style={style.contentTitle}>Login Sebagai Pekerja</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login', { role: "PROVIDER" })}>
                <View style={style.card}>
                    <Icon name="account-search" size={24} color={font.color.black} />
                    <Text style={style.contentTitle}>Login Sebagai Penyedia</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login', { role: "ADMIN" })}>
                <View style={style.card}>
                    <Icon name="office-building-cog" size={24} color={font.color.black} />
                    <Text style={style.contentTitle}>Login Sebagai Admin</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.background
    },
    title: {
        fontSize: font.size.title,
        fontWeight: 'bold',
        color: font.color.gray,
        marginBottom: 8
    },
    card: {
        width: dimensions.width * 0.9,
        height: dimensions.height * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 4
    },
    contentTitle: {
        fontSize: font.size.normal,
        fontWeight: 'bold',
        color: font.color.black,
        marginLeft: 4,
    }
})

export default SelectRoles