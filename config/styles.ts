import { useColorScheme } from "react-native";

export function DrakMode(props: string) {
    if (props !== undefined) {
        return useColorScheme() === 'dark'
    }
}