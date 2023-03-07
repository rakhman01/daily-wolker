import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CardItemsProvider from '../../components/company/CardItems'
import { colors, dimensions, font } from '../../config/constant'

const ListPayment = () => {
    const listPayment: Array<any> = [{
        id: "4",
        name: "Wakhid Hidayatur",
        work: "Front End Developer",
        long: "bulanan",
        startDate: '01/02/2023',
        price: "450000000",
        status: 'Accepted'
    }]
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: dimensions.width * 0.9, marginVertical: 8 }}>
                <Text style={{
                    fontSize: font.size.large,
                    fontWeight: 'bold',
                    color: font.color.black
                }}>Riwayat Pembayaran</Text>
            </View>
            <FlatList data={listPayment} renderItem={({ item }) => (
                <CardItemsProvider.ListPayment list={item}></CardItemsProvider.ListPayment>
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

export default ListPayment