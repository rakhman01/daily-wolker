import { Formik } from 'formik'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native'
import CardModal from '../../components/Modal'
import CardItems from '../../components/worker/CardItems'
import { colors, dimensions, font } from '../../config/constant'
import { newBankAccountValues } from './InitialState'

const BankAccount = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    const [selectedValue, setSelectedValue] = React.useState('pria');
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
                        <Formik initialValues={newBankAccountValues}
                            // validationSchema={}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({
                                errors,
                                touched,
                                values,
                                handleBlur,
                                handleChange,
                                handleSubmit,
                            }) => (
                                <View>
                                    <Text style={styles.label}>Pilih Jenis Rekening</Text>
                                    <View style={{
                                        borderRadius: 4,
                                        borderWidth: 1,
                                        marginBottom: 10,
                                        backgroundColor: colors.blue,
                                    }}>
                                        <Picker
                                            selectedValue={selectedValue}
                                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                            style={{ color: font.color.gray, backgroundColor: colors.background }}
                                        >
                                            <Picker.Item label="Option 1" value="option1" />
                                            <Picker.Item label="Option 2" value="option2" />
                                            <Picker.Item label="Option 3" value="option3" />
                                        </Picker>
                                    </View>
                                    <Text style={styles.label}>Nomor Rekening</Text>
                                    <TextInput
                                        placeholder='+11...'
                                        textContentType='none'
                                        keyboardType='numbers-and-punctuation'
                                        autoCapitalize='none'
                                        returnKeyType='next'
                                        placeholderTextColor={font.color.gray}
                                        blurOnSubmit={false}
                                        value={values.account_number}
                                        onChangeText={handleChange('account_number')}
                                        onBlur={handleBlur('account_number')}
                                        style={styles.input}
                                    />
                                    <Text style={styles.label}>Nama Bank</Text>
                                    <TextInput
                                        placeholder='Development Aplikasi'
                                        textContentType='none'
                                        keyboardType='default'
                                        autoCapitalize='none'
                                        returnKeyType='next'
                                        placeholderTextColor={font.color.placeholder}
                                        blurOnSubmit={false}
                                        value={values.bank_name}
                                        onChangeText={handleChange('bank_name')}
                                        onBlur={handleBlur('bank_name')}
                                        style={styles.input}
                                    />
                                    <Text style={styles.label}>Atas Nama</Text>
                                    <TextInput
                                        placeholder='Development Aplikasi'
                                        textContentType='none'
                                        keyboardType='default'
                                        autoCapitalize='none'
                                        returnKeyType='next'
                                        placeholderTextColor={font.color.placeholder}
                                        blurOnSubmit={false}
                                        value={values.name}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        style={styles.input}
                                    />
                                    <Button title='Register' color={colors.lightBlue} onPress={handleSubmit}></Button>
                                </View>
                            )}
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
    },
    label: {
        fontSize: font.size.large,
        fontWeight: '500',
        marginVertical: 6,
        color: font.color.gray
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
        borderColor: colors.gray,
        color: font.color.lightgray,
    },
})


export default BankAccount