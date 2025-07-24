import { TouchableOpacity, Text } from "react-native"; 
import { styles } from "./item.styles";

export const Item = ( {item,onPressItem } ) => {
    const { id, done, value } = item;
    return <TouchableOpacity 
        onPress={()=> onPressItem && onPressItem(id)}
        style={[styles.item, done && styles.itemDone]}
    >
        <Text 
        style={[styles.textItem, done && styles.textItemDone]}
        > {value} </Text>
    </TouchableOpacity>
}