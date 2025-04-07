import React, { useState } from "react";
import type { PropsWithChildren } from "react";

import { View, Text, StyleSheet, FlatList, Button } from "react-native";

type CurrencyBtnProps = PropsWithChildren<{
    name: string,
    flag: string,
}>


const CurrencyButton = (props: CurrencyBtnProps): React.JSX.Element => {
    return (
        <View style={styles.BtnContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    BtnContainer: {
        alignItems: "center",
    },
    flag: {
        fontSize: 28,
        marginBottom: 4,
        color: "#FFFFFF"
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    }
})

export default CurrencyButton