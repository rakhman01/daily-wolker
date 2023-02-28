import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CardItems from '../../components/worker/CardItems'
import { colors, dimensions, font } from '../../config/constant'
import { TaskWorkerTypes } from '../../config/type'

interface INavigation {
    navigation: any
}

const Dashboard = ({ navigation }: INavigation) => {

    const Tasks: Array<TaskWorkerTypes> = [
        {
            id: '1',
            title: "Programer",
            descriptions: "Full Stack Programer",
            typeWork: 'bulanan',
            region: 'Yogyakarta',
            gender: 'Laki Laki',
            age: '21',
            date: '10/03/2023',
            price: '35000000'
        },
        {
            id: '2',
            title: "Programer",
            descriptions: "Full Stack Programer",
            typeWork: 'bulanan',
            region: 'Yogyakarta',
            gender: 'Laki Laki',
            age: '21',
            date: '10/03/2023',
            price: '35000000'
        },
        {
            id: '3',
            title: "Marketing",
            descriptions: "Full Stack Marketing",
            typeWork: 'Mingguan',
            region: 'Yogyakarta',
            gender: 'Perempuan',
            age: '21',
            date: '10/03/2023',
            price: '20000000'
        },
        {
            id: '4',
            title: "Programer",
            descriptions: "Front End Programer",
            typeWork: 'bulanan',
            region: 'Yogyakarta',
            gender: 'Laki Laki',
            age: '2o',
            date: '21/03/2023',
            price: '35000000'
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
            <FlatList
                data={Tasks}
                renderItem={({ item }) => (
                    <CardItems.Task task={item} action={() => navigation.navigate("WorkerDetailTask")}></CardItems.Task>
                )}
                keyExtractor={item => item.id}
            >
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

export default Dashboard