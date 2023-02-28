import { Formik } from 'formik'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import CardModal from '../../components/Modal'
import CardItems from '../../components/worker/CardItems'
import { colors, dimensions, font } from '../../config/constant'

const BankAccount = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    const data = [
        {
            id: '1',
            nomor: 1,
            nomorRekening: '1231231231231',
            namaBank: 'Mandiri',
            AtasNama: 'Wakhid HR'
        },
        {
            id: '2',
            nomor: 2,
            nomorRekening: '1231231231231',
            namaBank: 'Mandiri',
            AtasNama: 'Wakhid HR'
        },
        {
            id: '3',
            nomor: 3,
            nomorRekening: '1231231231231',
            namaBank: 'Mandiri',
            AtasNama: 'Wakhid HR'
        },
        {
            id: '4',
            nomor: 4,
            nomorRekening: '1231231231231',
            namaBank: 'Mandiri',
            AtasNama: 'Wakhid HR'
        },
        {
            id: '5',
            nomor: 5,
            nomorRekening: '1231231231231',
            namaBank: 'Mandiri',
            AtasNama: 'Wakhid HR'
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: dimensions.width * 0.9, marginVertical: 8 }}>
                <Text style={{
                    fontSize: font.size.large,
                    fontWeight: 'bold',
                    color: font.color.black
                }}>Nomor Rekening Milikmu</Text>
                {/* <Text style={{ color: font.color.black }}>Masukan Rekening Baru</Text> */}
            </View>
            <View style={{ height: dimensions.height * 0.05, }}>

                <CardModal buttontitle='Tambah Nomor Rekening'>
                    <View>
                        <Text style={{ color: font.color.black }}>Masukan Nomor Rekening Baru</Text>
                        <Formik initialValues={{}}
                            // validationSchema={}
                            onSubmit={(values) => {
                                console.log(values);

                            }}
                        >

                        </Formik>
                    </View>
                </CardModal>
            </View>
            <View style={styles.headerTabel}>
                <Text style={[styles.headerContent, { flex: 1 }]}>No</Text>
                <Text style={[styles.headerContent, { flex: 3 }]}>Nomor Rekening</Text>
                <Text style={[styles.headerContent, { flex: 2 }]}>Nama Bank</Text>
                <Text style={[styles.headerContent, { flex: 2 }]}>Atas Nama</Text>
            </View>
            <FlatList data={data} renderItem={({ item }) => (
                <CardItems.BankAccount BankAccount={item}></CardItems.BankAccount>
            )}>
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background
    },
    headerTabel: {
        width: dimensions.width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: colors.green
    },
    headerContent: {
        fontWeight: '700',
        fontSize: font.size.normal,
        color: font.color.gray,
        borderWidth: 1,
        paddingHorizontal: 4,
    }
})


export default BankAccount