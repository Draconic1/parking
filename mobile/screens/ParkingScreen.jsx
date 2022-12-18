import {View, Text, Image,StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from "react-redux";

export default function ParkingScreen({ route }) {

    const { id } = route.params;
    const parkings = useSelector((state) => state.toolkit.parkings);
    let parking = parkings ? parkings.find((x) => x.id == id) : null;


    return (
        <ScrollView>
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{ uri: parking.image}}
            />
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{parking.address}</Text>
                <View style={styles.row}><Text style={styles.text}>Всего мест: {parking.parkingPlaces}</Text></View>
                <View style={styles.row}><Text style={styles.text}>Свободных мест: {parking.freePlaces}</Text></View>
            </View>
        </View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 350,
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 370, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8 },
    row: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding:5 },
    brandTitle: { color: 'black', fontSize:25, fontWeight:'bold', padding:5, textAlign:'center' },
    text: { color: 'black', fontSize: 18 },
    button: {color:'black'},
});
