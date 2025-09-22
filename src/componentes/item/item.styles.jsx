import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        padding: 16,
        marginVertical: 6,
        marginHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Para Android
    },
    itemDone: {
        backgroundColor: '#e8f5e8',
        borderColor: '#4caf50',
        shadowColor: '#4caf50',
        shadowOpacity: 0.2,
    },
    textItem: {
        color: '#333333',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
    },
    textItemDone: {
        color: '#2e7d32',
        textDecorationLine: 'line-through',
        fontWeight: '300',
        opacity: 0.8,
    }
});