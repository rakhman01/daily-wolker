import React, { useState } from 'react'
import { Formik } from 'formik'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from 'react-native'
import { colors, dimensions, font } from '../../config/constant'
import { images } from '../../config/type'
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Plus from 'react-native-vector-icons/FontAwesome5'
import { formattedDate, getImages } from '../../config/functions'
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native/Libraries/Alert/Alert'
import CardModal from '../../components/Modal'
import { providerRegisterValues } from './initialState'


interface INavigation {
    navigation: any,
    route: {
        params: { role: string }
    }
}

const Register = ({ navigation, route }: INavigation) => {
    let { role } = route.params
    const [visiblePassword, setVisiblePassword] = React.useState<boolean>(true)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    const [images, setImages] = useState<images>({
        base64: '',
        uri: ''
    });
    const [selectedValue, setSelectedValue] = useState('pria');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 40, }} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Register</Text>
                {role === 'PROVIDER' ?
                    <Formik
                        initialValues={providerRegisterValues}
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
                            <View style={{ width: dimensions.width * 0.8 }}>
                                <Text style={styles.label}>NIB</Text>
                                <TextInput
                                    placeholder='0303029022'
                                    textContentType='none'
                                    keyboardType='numbers-and-punctuation'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.placeholder}
                                    blurOnSubmit={false}
                                    value={values.nib}
                                    onChangeText={handleChange('nib')}
                                    onBlur={handleBlur('nib')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Kategori Bisnis</Text>
                                <TextInput
                                    placeholder='Development Aplikasi'
                                    textContentType='none'
                                    keyboardType='default'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.placeholder}
                                    blurOnSubmit={false}
                                    value={values.business_category}
                                    onChangeText={handleChange('business_category')}
                                    onBlur={handleBlur('business_category')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Nama</Text>
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
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    placeholder='user@example.com'
                                    textContentType='emailAddress'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.placeholder}
                                    blurOnSubmit={false}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Nomor Telepon</Text>
                                <TextInput
                                    placeholder='+62...'
                                    textContentType='none'
                                    keyboardType='numbers-and-punctuation'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.placeholder}
                                    blurOnSubmit={false}
                                    value={values.phone_number}
                                    onChangeText={handleChange('phone_number')}
                                    onBlur={handleBlur('phone_number')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Password</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    paddingHorizontal: 10,
                                    marginBottom: 10,
                                    backgroundColor: colors.white
                                }}>
                                    <TextInput
                                        placeholder='********'
                                        textContentType={'password'}
                                        secureTextEntry={visiblePassword}
                                        autoCapitalize='none'
                                        returnKeyType='next'
                                        placeholderTextColor={font.color.placeholder}
                                        blurOnSubmit={false}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        style={{ flex: 1, color: font.color.gray }}
                                    />
                                    {visiblePassword === true ?
                                        <Plus onPress={() => setVisiblePassword(false)} name='eye-slash' size={16} color={font.color.black} /> :
                                        <Plus onPress={() => setVisiblePassword(true)} name='eye' size={16} color={font.color.black} />
                                    }
                                </View>
                                <Text style={styles.label}>Alamat Lengkap</Text>
                                <TextInput
                                    placeholder='Jl. Student Castle, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281'
                                    textContentType='none'
                                    keyboardType='default'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.placeholder}
                                    blurOnSubmit={false}
                                    multiline={true}
                                    value={values.address}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Tambah Keterangan</Text>
                                <TextInput
                                    placeholder='Perushaan kami bergerak di bidang pembangunan aplikasi ...'
                                    textContentType='none'
                                    keyboardType='default'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.placeholder}
                                    blurOnSubmit={false}
                                    multiline={true}
                                    value={values.information}
                                    onChangeText={handleChange('information')}
                                    onBlur={handleBlur('information')}
                                    style={styles.input}
                                />
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.label}>Foto Kantor</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.label}>Logo</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 20
                                }}>
                                    <Text style={styles.label}>Foto NIB</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Button title='Register' color={colors.lightBlue} onPress={handleSubmit}></Button>
                            </View>
                        )}
                    </Formik>
                    :
                    <Formik
                        initialValues={providerRegisterValues}
                        onSubmit={() => console.log("submit")}
                    >
                        {({
                            errors,
                            touched,
                            values,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <View style={{ width: dimensions.width * 0.8 }}>
                                <Text style={styles.label}>NIK</Text>
                                <TextInput
                                    placeholder='0303029022'
                                    // textContentType='creditCardNumber'
                                    keyboardType='numeric'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.nik}
                                    onChangeText={handleChange('nik')}
                                    onBlur={handleBlur('nik')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Nama</Text>
                                <TextInput
                                    placeholder='SiOne'
                                    textContentType='none'
                                    keyboardType='default'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Umur</Text>
                                <TextInput
                                    placeholder='21'
                                    textContentType='none'
                                    keyboardType='numeric'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.age}
                                    onChangeText={handleChange('age')}
                                    onBlur={handleBlur('age')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Tanggal Lahir</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    padding: 10,
                                    marginBottom: 10,
                                    backgroundColor: colors.white
                                }}>
                                    <Text style={{ color: font.color.gray }}>{formattedDate(date)}</Text>
                                    <Icon onPress={() => setOpen(true)} name='date-range' size={24} color={font.color.black} />
                                </View>
                                <DatePicker
                                    modal
                                    open={open}
                                    date={date}
                                    mode={"date"}
                                    onConfirm={(date) => {
                                        setOpen(false)
                                        setDate(date)
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }}
                                />
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    placeholder='user@example.com'
                                    textContentType='emailAddress'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Nomor Telepon</Text>
                                <TextInput
                                    placeholder='+62...'
                                    textContentType='none'
                                    keyboardType='numbers-and-punctuation'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.phone_number}
                                    onChangeText={handleChange('phone_number')}
                                    onBlur={handleBlur('phone_number')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    placeholder='********'
                                    textContentType='password'
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Jenis Kelamin</Text>
                                <View style={{
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    marginBottom: 10,
                                    backgroundColor: colors.white,
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
                                <Text style={styles.label}>Pendidikan Terakhir</Text>
                                <View style={{
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    marginBottom: 10,
                                    backgroundColor: colors.white,
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
                                <Text style={styles.label}>Alamat Sesuai KTP</Text>
                                <TextInput
                                    placeholder='Nglumut, Srumbung, Magelang'
                                    textContentType='addressCityAndState'
                                    keyboardType='ascii-capable'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    multiline={true}
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.address}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Alamat Domisili</Text>
                                <TextInput
                                    placeholder='Jl.StudentCastle,No54, Condong Catur,Sleman Yogyakarta Indonesia'
                                    textContentType='addressCityAndState'
                                    keyboardType='ascii-capable'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    multiline={true}
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.address}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    style={styles.input}
                                />
                                <Text style={styles.label}>Status Pernikahan</Text>
                                <View style={{
                                    borderRadius: 4,
                                    borderWidth: 1,
                                    marginBottom: 10,
                                    backgroundColor: colors.white,
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
                                <Text style={styles.label}>Pengalaman Terakhir</Text>
                                <TextInput
                                    placeholder='Bekerja Sebagai freelance UI/UX '
                                    textContentType='addressCityAndState'
                                    keyboardType='ascii-capable'
                                    autoCapitalize='none'
                                    returnKeyType='next'
                                    multiline={true}
                                    placeholderTextColor={font.color.gray}
                                    blurOnSubmit={false}
                                    value={values.address}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    style={styles.input}
                                />
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.label}>Foto KTP</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.label}>Foto KK</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={styles.label}>Foto Ijazah Terakhir</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 20
                                }}>
                                    <Text style={styles.label}>Foto Sertifikasi Keahlian(jika Ada)</Text>
                                    <TouchableOpacity onPress={() => Alert.alert('pick images')}>
                                        <View
                                            style={{
                                                width: dimensions.width * 0.5,
                                                height: dimensions.height * 0.3,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 4,
                                                borderWidth: 1,
                                                padding: 2,
                                                marginBottom: 10,
                                                backgroundColor: colors.white
                                            }}>
                                            {images.uri === "" ?
                                                <CardModal buttontitle='Tambah Gambar'>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'STORAGE' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="folder-plus" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Pilih Gambar Penyimpanan</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => getImages({ setImages, permision: 'CAMERA' })}>
                                                        <View style={styles.modalView}>
                                                            <Plus name="camera" size={24} color={font.color.black} />
                                                            <Text style={styles.modalLabel}>Ambil Gambar</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </CardModal>
                                                :
                                                <Image source={{ uri: images.uri }} alt="images" style={styles.image} />}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Button title='Register' color={colors.lightBlue} onPress={handleSubmit}></Button>
                            </View>

                        )}
                    </Formik>}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    title: {
        fontSize: font.size.title,
        fontWeight: 'bold',
        color: font.color.gray,
        marginBottom: 4,
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
    }, image: {
        width: 120,
        height: 120
    },
    modalView: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: colors.gray,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    modalLabel: {
        fontSize: font.size.medium,
        fontWeight: 'bold',
        marginLeft: 10,
        color: font.color.black
    }
})
export default Register