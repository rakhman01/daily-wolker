import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, dimensions, font } from "../../config/constant";
import UpdateIcon from "react-native-vector-icons/MaterialCommunityIcons";
import UserIcon from 'react-native-vector-icons/FontAwesome';
import CardModal from "../Modal";


const CardItemsProvider = {
    TaskProvider: ({ task }: any) => {
        let { title, typeWork, workerNeed, startDate, endDate, } = task


        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                width: dimensions.width * 0.9,
                padding: 8,
                borderWidth: 1,
                borderColor: colors.gray,
                borderRadius: 4,
                marginBottom: 8,
                backgroundColor: "white",
                shadowColor: 'black',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 5,
            }}>
                <View style={{
                    flex: 2,
                }}>
                    <Text style={{ fontWeight: '600', fontSize: font.size.normal, color: font.color.gray }}>Nama Pekerjaan:</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Tanggal Mulai</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Tanggal Selesai</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.mini, color: font.color.black }}>Status:</Text>
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: colors.white
                }}>
                    <Text style={{ fontWeight: '700', fontSize: font.size.normal, color: font.color.gray }}>{title}</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>01-02-2023</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>01-03-2023</Text>
                    <Text style={{ fontWeight: '300', fontSize: font.size.mini, color: font.color.green }}>accepted</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => console.log('lol')
                    } style={{
                        padding: 4,
                        borderWidth: 1,
                        borderRadius: 4,
                        backgroundColor: colors.green
                    }}>
                        <Text style={{ fontWeight: '400', color: font.color.gray }}>Active</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    ListWorker: ({ list }: any) => {
        let { item, navigation } = list

        console.log(navigation, "navigation");


        let { name } = list

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                width: dimensions.width * 0.9,
                padding: 8,
                borderWidth: 1,
                borderColor: colors.gray,
                borderRadius: 4,
                marginBottom: 8,
                backgroundColor: "white",
                shadowColor: 'black',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 5,
            }}>
                <View style={{
                    flex: 2,
                }}>
                    <Text style={{ fontWeight: '600', fontSize: font.size.normal, color: font.color.gray }}>Nama Pekerja:</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Tanggal Mulai</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Harga</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.mini, color: font.color.black }}>Status:</Text>
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: colors.white
                }}>
                    <Text style={{ fontWeight: '700', fontSize: font.size.normal, color: font.color.gray }}>{name}</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>01-02-2023</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>45000000</Text>
                    <Text style={{ fontWeight: '300', fontSize: font.size.mini, color: font.color.green }}>Action</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <CardModal buttontitle="Action">
                        <TouchableOpacity onPress={() => navigation.navigate('CompanyDetailWorker')}>
                            <View style={{
                                // flex: 1,
                                // height: dimensions.height * 0.1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: colors.white,
                                borderRadius: 10,
                                padding: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 5,
                                marginVertical: 4
                            }}>
                                <UserIcon name="user-circle" size={24} color={font.color.black} />
                                <Text style={{
                                    fontSize: font.size.normal,
                                    fontWeight: 'bold',
                                    color: font.color.black,
                                    marginLeft: 4,
                                }}>Detail Pekerja</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log("navigate to ")}>
                            <View style={{
                                // flex: 1,
                                // height: dimensions.height * 0.1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: colors.white,
                                borderRadius: 10,
                                padding: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 5,
                                marginVertical: 4
                            }}>
                                <UserIcon name="money" size={24} color={font.color.black} />
                                <Text style={{
                                    fontSize: font.size.normal,
                                    fontWeight: 'bold',
                                    color: font.color.black,
                                    marginLeft: 4,
                                }}>Pembayaran</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log("navigate")}>
                            <View style={{
                                // flex: 1,
                                // height: dimensions.height * 0.1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: colors.white,
                                borderRadius: 10,
                                padding: 10,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                elevation: 5,
                                marginVertical: 4
                            }}>
                                <UpdateIcon name="update" size={28} color={font.color.black} />
                                <Text style={{
                                    fontSize: font.size.normal,
                                    fontWeight: 'bold',
                                    color: font.color.black,
                                    marginLeft: 4,
                                }}>Update Info</Text>
                            </View>
                        </TouchableOpacity>
                    </CardModal>
                </View>
            </View>
        )
    },
    WorkDone: ({ list }: any) => {
        let { name } = list

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                width: dimensions.width * 0.9,
                padding: 8,
                borderWidth: 1,
                borderColor: colors.gray,
                borderRadius: 4,
                marginBottom: 8,
                backgroundColor: "white",
                shadowColor: 'black',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 5,
            }}>
                <View style={{
                    flex: 2,
                }}>
                    <Text style={{ fontWeight: '600', fontSize: font.size.normal, color: font.color.gray }}>Nama Pekerja:</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Harga</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Ratting</Text>
                    {/* <Text style={{ fontWeight: '500', fontSize: font.size.mini, color: font.color.black }}>Status:</Text> */}
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: colors.white
                }}>
                    <Text style={{ fontWeight: '700', fontSize: font.size.normal, color: font.color.gray }}>{name}</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>45000000</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>*****</Text>
                    {/* <Text style={{ fontWeight: '300', fontSize: font.size.mini, color: font.color.green }}>Done</Text> */}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => console.log('lol')
                    } style={{
                        padding: 4,
                        borderWidth: 1,
                        borderRadius: 4,
                        backgroundColor: colors.green
                    }}>
                        <Text style={{ fontWeight: '400', color: font.color.gray }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },
    ListPayment: ({ list }: any) => {
        let { name } = list

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                width: dimensions.width * 0.9,
                padding: 8,
                borderWidth: 1,
                borderColor: colors.gray,
                borderRadius: 4,
                marginBottom: 8,
                backgroundColor: "white",
                shadowColor: 'black',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 5,
            }}>
                <View style={{
                    flex: 2,
                }}>
                    <Text style={{ fontWeight: '600', fontSize: font.size.normal, color: font.color.gray }}>Nama Pekerjaan:</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Harga</Text>
                    <Text style={{ fontWeight: '400', fontSize: font.size.small, color: font.color.gray }}>Lama Pekerjaan:</Text>
                    {/* <Text style={{ fontWeight: '500', fontSize: font.size.mini, color: font.color.black }}>Status:</Text> */}
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: colors.white
                }}>
                    <Text style={{ fontWeight: '700', fontSize: font.size.normal, color: font.color.gray }}>{name}</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>45000000</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.small, color: font.color.gray }}>bulanan</Text>
                    {/* <Text style={{ fontWeight: '300', fontSize: font.size.mini, color: font.color.green }}>Done</Text> */}
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => console.log('lol')
                    } style={{
                        padding: 4,
                        borderWidth: 1,
                        borderRadius: 4,
                        backgroundColor: colors.green
                    }}>
                        <Text style={{ fontWeight: '400', color: font.color.gray }}>Waiting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default CardItemsProvider