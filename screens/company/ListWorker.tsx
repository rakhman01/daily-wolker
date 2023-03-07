import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CardItemsProvider from '../../components/company/CardItems'
import { colors, dimensions, font } from '../../config/constant'

interface INavigation {
    navigation: any
}

const ListWorker = ({ navigation }: INavigation) => {

    const listWorker: Array<any> = [
        {
            id: "1",
            name: "Wakhid Hidayatur",
            work: "Front End Developer",
            long: "bulanan",
            startDate: '01/02/2023',
            price: "450000000",
            status: 'Accepted'
        },
        {
            id: "2",
            name: "Wakhid Hidayatur",
            work: "Front End Developer",
            long: "bulanan",
            startDate: '01/02/2023',
            price: "450000000",
            status: 'Accepted'
        },
        {
            id: "3",
            name: "Wakhid Hidayatur",
            work: "Front End Developer",
            long: "bulanan",
            startDate: '01/02/2023',
            price: "450000000",
            status: 'Accepted'
        },
        {
            id: "4",
            name: "Wakhid Hidayatur",
            work: "Front End Developer",
            long: "bulanan",
            startDate: '01/02/2023',
            price: "450000000",
            status: 'Accepted'
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: dimensions.width * 0.9, marginVertical: 8 }}>
                <Text style={{
                    fontSize: font.size.large,
                    fontWeight: 'bold',
                    color: font.color.black
                }}>Daftar Pekerja</Text>
            </View>
            <FlatList data={listWorker} renderItem={({ item }) => (
                <CardItemsProvider.ListWorker list={{ item, navigation }}></CardItemsProvider.ListWorker>
            )}></FlatList>
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

export default ListWorker