import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, dimensions, font } from "../../config/constant";


const DetailWorker = () => {
    const [tab, setTab] = React.useState<string>("dataDiri")
    // const data: any = {
    //     nama: "Wakhid Hidayatullah",
    //     numberPhone: 089898989898,
    //     email: 'wakhid@gmail.com',
    //     lastEducation: 'SMK',
    //     age: 20,
    //     lastExperience: "FrontEnd 5 Tahun",
    //     addres: "Pakuwon Mall Jogja, Jl. Ring Road Utara, Kaliwaru, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
    //     KTPimg: '../../images1',
    //     CerticateImg: '../../images2',
    //     // scope work
    //     work: 'Front End Developer',
    //     descriptionsWork: 'Membuat layout Website',
    //     type: "Bulanan",
    //     date: "2023-02-01 s/d 2023-02-28",
    //     time: "08:00:00 s/d 16:00:00",
    //     status: 'accepted'
    // }

    let title = 'scopeWork'
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}>
                    <Text>Detail </Text>
                    <TouchableOpacity onPress={() => setTab("dataDiri")}>
                        <Text style={styles.titlePage}>Data Diri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab("ruangLingkup")}>
                        <Text style={styles.titlePage}>Ruang Lingkup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background
    },
    content: {
        width: dimensions.width * 0.9,
        backgroundColor: colors.white,
        padding: 8
    },
    titlePage: {
        fontSize: font.size.normal,
        fontWeight: '400',
        color: font.color.gray
    }
})


export default DetailWorker