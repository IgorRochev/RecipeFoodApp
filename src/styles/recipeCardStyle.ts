import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        height: 82,
        width: '100%',
        flexDirection: 'row',
    },
    imageContainer: {
        height: 80,
        width: '30%',
        backgroundColor: '#F0F3ED',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        overflow: 'hidden',
    },
    aboutContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12
    }
});
