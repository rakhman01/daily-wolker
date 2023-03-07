import React, { Children } from 'react'
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors, dimensions, font } from '../config/constant';

interface ICartModal {
    buttontitle: string,
    butonIcon?: string,
    width?: string,
    height?: string
    children: React.ReactNode
}

const CardModal = (props: ICartModal) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    console.log(props, "props lol");


    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {props.children}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={styles.buttonOpen}
                onPress={() => setModalVisible(true)}>
                {props.butonIcon === undefined ? null :
                    <Icon name={props.butonIcon} size={28} color={font.color.black} />}
                <Text style={styles.opentextStyle}>{props.buttontitle}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalView: {
        display: 'flex',
        width: dimensions.width * 0.8,
        justifyContent: 'center',
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: colors.blue
    },
    buttonOpen: {
        // flex: 1,
        justifyContent: 'center',
        // backgroundColor: colors.gray,
    },
    buttonClose: {
        marginTop: 8,
        backgroundColor: colors.blue,
    },
    textStyle: {
        color: font.color.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    opentextStyle: {
        color: font.color.gray,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default CardModal