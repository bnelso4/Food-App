import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('');


    const searchAPI = async function (searchTerm) {

        try {
            const response = await yelp.get('/search',
                {
                    params: {


                        limit: 50,
                        term: searchTerm,
                        location: 'Toronto, Ontario'
                    }
                }


            );
            setResults(response.data.businesses)
        } catch (e) {
            console.log(e);
            setErrorMessage('Something Went Wrong');
        }
    }

    useEffect(() => {
        searchAPI();
    }, [])

    return [searchAPI, results, errorMessage];

}