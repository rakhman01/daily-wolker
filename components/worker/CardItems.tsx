import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { color } from "react-native-reanimated";
import { colors, dimensions, font } from "../../config/constant";
import { formatIDR, formattedDate } from "../../config/functions";
import { TaskWorkerTypes } from "../../config/type";


type ICardItems = {
    task: TaskWorkerTypes,
    action: (props: any) => void
}

type IAcceptTask = {
    acceptTask: any,
    action: () => void
}

type IBankAccount = {
    id: string,
    nomor: number,
    namaBank: string,
    atasNama: string
}


const CardItems = {
    Task: ({ task, action }: ICardItems) => {
        const widthCard = dimensions.width * 0.9;
        // const heightCard = dimensions.width * 0.2;
        const { id, title, descriptions, typeWork, region, gender, age, date, price } = task

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                width: widthCard,
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
                    <Text style={{ fontWeight: '400', fontSize: font.size.normal, color: font.color.gray }}>Penawaran:</Text>
                    <Text style={{ fontWeight: '200', fontSize: font.size.mini, color: font.color.black }}>Jenis Pekerjaan:</Text>
                </View>
                <View style={{
                    flex: 2,
                    backgroundColor: colors.white
                }}>
                    <Text style={{ fontWeight: '700', fontSize: font.size.normal, color: font.color.gray }}>{title}</Text>
                    <Text style={{ fontWeight: '500', fontSize: font.size.normal, color: font.color.gray }}>{formatIDR(price)}</Text>
                    <Text style={{ fontWeight: '300', fontSize: font.size.mini, color: font.color.black }}>{typeWork}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={action} style={{
                        padding: 4,
                        borderWidth: 1,
                        borderRadius: 4,
                        backgroundColor: colors.green
                    }}>
                        <Text style={{ fontWeight: '400', color: font.color.gray }}>Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    AcceptTask: ({ acceptTask, action }: IAcceptTask) => {
        const widthCard = dimensions.width * 0.9;
        // const heightCard = dimensions.width * 0.2;
        const { id, title, descriptions, typeWork, region, gender, age, date, price } = acceptTask;

        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                width: widthCard,
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
                    <TouchableOpacity onPress={action} style={{
                        padding: 4,
                        borderWidth: 1,
                        borderRadius: 4,
                        backgroundColor: colors.green
                    }}>
                        <Text style={{ fontWeight: '400', color: font.color.gray }}>Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    },

    Payment: () => {

    },

    BankAccount: (BankAccount: any) => {
        const widthCard = dimensions.width * 0.9;
        let { id, nomor, AtasNama, namaBank, nomorRekening } = BankAccount.BankAccount


        return (
            <View style={{
                width: dimensions.width * 0.9,
                flexDirection: 'row',
                padding: 0,
                margin: 0,
                // alignItems: 'center',
                // justifyContent: 'center',
                // borderWidth: 1,
                backgroundColor: colors.white
            }}>
                <Text style={[styles.content, { flex: 1, borderLeftWidth: 1 }]}>{nomor}</Text>
                <Text style={[styles.content, { flex: 3 }]}>{nomorRekening}</Text>
                <Text style={[styles.content, { flex: 2 }]}>{namaBank}</Text>
                <Text style={[styles.content, { flex: 2 }]}>{AtasNama}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    content: {
        fontWeight: '400',
        fontSize: font.size.normal,
        color: font.color.gray,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        padding: 4,
    }
})


export default CardItems