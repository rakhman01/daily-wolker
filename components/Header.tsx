import React from 'react'
import { View, Text } from 'react-native'
import { colors, dimensions, font } from '../config/constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import Mail from 'react-native-vector-icons/Ionicons'



const Header = ({ props }: any) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: dimensions.height * 0.080,
            paddingHorizontal: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#bababa",
            backgroundColor: 'white'
        }}>
            <Icon onPress={() => props.navigation.openDrawer()} name='bars' size={24} color={font.color.black} />
            <Text style={{ fontSize: 15, fontWeight: '600', color: font.color.black }}>Dashboard</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <Mail onPress={() => props.navigation.navigate("Chat")} name='mail' size={24} color={font.color.black} style={{ marginRight: 12 }} />
                <Icon onPress={() => props.navigation.navigate("Profile")} name='user-circle' size={24} color={font.color.black} />
            </View>
        </View>
    )
}

export default Header