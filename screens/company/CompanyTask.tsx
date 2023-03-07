import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import CardItemsProvider from '../../components/company/CardItems'
import { colors, dimensions, font } from '../../config/constant'

const CompanyTask = () => {

    const tasks: Array<any> = [
        {
            title: "Full Stack Multital",
            id: 1,
            no: 1,
            timeWork: "Bulanan",
            workNedds: 2,
            startDate: "10/02/2023",
            endDate: '10/03/2023',
            price: '35000000',
            status: "active"
        },
        {
            title: "Full Stack Multital",
            id: 2,
            no: 2,
            timeWork: "Bulanan",
            workNedds: 1,
            startDate: "10/02/2023",
            endDate: '10/03/2023',
            price: '35000000',
            status: "active"
        },
        {
            title: "Full Stack Multital",
            id: 3,
            no: 3,
            timeWork: "Bulanan",
            workNedds: 1,
            startDate: "10/02/2023",
            endDate: '10/03/2023',
            price: '35000000',
            status: "active"
        },
        {
            title: "Full Stack Multital",
            id: 4,
            no: 4,
            timeWork: "Bulanan",
            workNedds: 2,
            startDate: "10/02/2023",
            endDate: '10/03/2023',
            price: '35000000',
            status: "active"
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: dimensions.width * 0.9, marginVertical: 8 }}>
                <Text style={{
                    fontSize: font.size.large,
                    fontWeight: 'bold',
                    color: font.color.black
                }}>Task Tersedia</Text>
            </View>
            <FlatList data={tasks} renderItem={({ item }) => (
                <CardItemsProvider.TaskProvider task={item}></CardItemsProvider.TaskProvider>
            )}>
            </FlatList>
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

export default CompanyTask