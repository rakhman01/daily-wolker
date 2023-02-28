import React from 'react'
import { Formik } from 'formik'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { colors, dimensions, font } from '../../config/constant'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { loginValues } from './initialState';
import { loginSchema } from './validationSchema'

interface INavigation {
    navigation: any,
    route: {
        params: { role: string }
    }
}

const Login = ({ navigation, route }: INavigation) => {
    const [visiblePassword, setVisiblePassword] = React.useState<boolean>(true)
    const { role } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerContent}>
                    <Image source={require('../../assets/Company.png')} alt="logo" style={styles.image} />
                    <Text style={styles.title}>Daily Wolker</Text>
                </View>
                <View style={{ paddingTop: 10 }}>
                    <Formik
                        initialValues={loginValues}
                        validationSchema={loginSchema}
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
                                <View style={{ marginBottom: 30 }}>
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
                                    {touched.email && errors.email && (
                                        <Text style={styles.errorText}>{errors.email}</Text>
                                    )}
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
                                            placeholderTextColor={font.color.gray}
                                            blurOnSubmit={false}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            style={{ flex: 1, color: font.color.gray }}
                                        />
                                        {visiblePassword === true ?
                                            <Icon onPress={() => setVisiblePassword(false)} name='eye-slash' size={16} color={font.color.black} /> :
                                            <Icon onPress={() => setVisiblePassword(true)} name='eye' size={16} color={font.color.black} />
                                        }
                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={styles.errorText}>{errors.password}</Text>
                                    )}
                                </View>
                                <Button
                                    title='Login'
                                    color={colors.lightBlue}
                                    onPress={() => navigation.navigate('WorkerStackScreen')}
                                ></Button>
                            </View>
                        )}

                    </Formik>
                </View>
                {role === 'ADMIN' ? null :
                    <View style={{ alignItems: 'flex-end', marginTop: 8, }}>
                        <Text>Don't have an account?</Text>
                        <Text
                            style={styles.submitButton}
                            onPress={() => navigation.navigate('Register', { role: role })}
                        >
                            Register
                        </Text>
                    </View>}
            </ScrollView>
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
    headerContent: {
        // justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 80,
        height: 80
    },
    title: {
        fontSize: font.size.large,
        fontWeight: 'bold',
        color: font.color.yellow,
    },
    label: {
        fontSize: font.size.large,
        fontWeight: '500',
        marginHorizontal: 4,
        color: font.color.white
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
        color: font.color.gray,

    },
    errorText: {
        fontSize: font.size.medium,
        fontWeight: '400',
        color: font.color.red
    },
    submitButton: {
        color: colors.drakGreen,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 4,
    },
})

export default Login