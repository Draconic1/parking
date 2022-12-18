import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import axios from "axios";
import MovieCard from "../components/ParkingCard";
import {loadParkings} from "../components/reducerSlice";
import {useDispatch, useSelector} from "react-redux";

export default function Home({ navigation }) {
    const parkings = useSelector(state => state.toolkit.parkings);
    const apiBase = useSelector((state) => state.toolkit.apiBase);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`${apiBase}/parkings/`);
                console.log(data);

                dispatch(loadParkings(data));
            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, []);


    return (
        <ScrollView>
            <View style={styles.page}>
                <Text style={styles.title}>Доступные парковки</Text>
                {!!parkings &&
                    parkings.map((parking) => <MovieCard key={parking.id} {...parking} navigation={navigation} />)}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    title:{
        color: 'black',
        fontSize: 25,
        fontWeight:'bold',
        padding:15,
        textAlign:'center'},
});