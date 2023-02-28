import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native'
import { colors, dimensions, font } from '../../config/constant'
import { TaskWorkerTypes } from '../../config/type'


const DetailTask = () => {

    const data: TaskWorkerTypes = {
        id: '1',
        title: "Programer",
        descriptions: "Full Stack Programer",
        typeWork: 'bulanan',
        region: 'Yogyakarta',
        gender: 'Laki Laki',
        age: '21',
        date: '10/03/2023',
        price: '35000000'
    }

    let detail: Array<any> = [{
        label: 'Judul Pekerjaan',
        colon: ':',
        value: data.title
    },
    {
        label: 'Deskripsi',
        colon: ':',
        value: data.descriptions
    },
    {
        label: 'Jenis',
        colon: ':',
        value: data.typeWork
    },
    {
        label: 'Wilayah',
        colon: ':',
        value: "Sleman, Daerah Istimewa Yogyakarta"
    },
    {
        label: 'Gender',
        colon: ':',
        value: data.gender
    },
    {
        label: 'Umur',
        colon: ':',
        value: data.age
    },
    {
        label: 'Tanggal',
        colon: ':',
        value: data.date
    },
    {
        label: 'Waktu',
        colon: ':',
        value: '08:00:00 s/d 16:00:00'
    },
    {
        label: 'Harga',
        colon: ':',
        value: data.price
    },

    ]


    return (
        <SafeAreaView>
            <View style={styles.content}>
                <Text style={{ fontSize: font.size.title, fontWeight: '700', marginBottom: 8, color: font.color.black }}>Deskripsi Pekerjaan</Text>
                <FlatList data={detail} contentContainerStyle={styles.viewContent}
                    renderItem={({ item }) => (
                        <View style={styles.valueContent}>
                            <View style={{ flex: 2, flexDirection: 'row', justifyContent: "space-between" }}>
                                <Text style={styles.label}>{item.label}</Text>
                                <Text style={styles.colon}>{item.colon}</Text>
                            </View>
                            <Text style={styles.value}>{item.value}</Text>
                        </View>)}
                ></FlatList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: colors.background
    },
    content: {
        padding: 10,
    },
    viewContent: {
        width: dimensions.width * 0.9,
        height: dimensions.height * 0.9,
        paddingVertical: 20
    },
    valueContent: {
        width: dimensions.width * 0.9,
        flexDirection: 'row',
        // backgroundColor: colors.white
    },
    label: {
        color: colors.gray
    },
    colon: {
        color: font.color.black,
        fontWeight: '800',
        paddingRight: 8
    },
    value: {
        flex: 3,
        color: font.color.black
    }
})
export default DetailTask