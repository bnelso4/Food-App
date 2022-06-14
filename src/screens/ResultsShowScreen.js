import React, {useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = function ({ navigation }) {
    const [result, setResult] = useState(null);
    



    const id = navigation.getParam('id')
    console.log(id)

    const getResult = async function (id) {
       const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }



    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }

})

export default ResultsShowScreen;