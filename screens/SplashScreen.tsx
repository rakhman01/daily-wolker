import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
import { StackActions } from '@react-navigation/native'
import { colors, font } from '../config/constant';

interface INavigation {
    navigation: any
}

const SplashScreen = ({ navigation }: INavigation) => {
    // const navigation: INavigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('SelectRoles'));
        }, 3000);
    }, []);



    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Image source={require('../assets/Company.png')} alt="Logo" />
                <Text style={styles.title}>Daily Wolker</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray
    },
    title: {
        fontSize: font.size.title,
        fontWeight: 'bold',
        color: font.color.yellow,
    }
});

export default SplashScreen