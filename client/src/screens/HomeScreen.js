import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
import Burger from '../components/Burger';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBurgers } from '../actions/burgerActions';
import Loader from '../components/LoaderComponent';
import ErrorComponent from '../components/ErrorComponent';
import { Container } from 'react-bootstrap';
import FilterBurgers from '../components/FilterComponent';

export default function HomeScreen() {
    // const [burgers, setBurgers] = useState([]);
    // useEffect(() => {
    //     const fetchProductsData = async () => {
    //         const res = await axios.get('/api/burgers/get-all-burgers');
    //         setBurgers(res.data)
    //     }
    //     fetchProductsData();
    // }, [burgers])

    const dispatch = useDispatch();
    const burgerState = useSelector(state => state.getAllBurgersReducer);
    const { error, loading, burgers } = burgerState;

    useEffect(() => {
        dispatch(getAllBurgers());
    }, [dispatch])

    return (
        <div style={{ margin: '20px' }} key='homescreenMainDiv'>
            <Container>
                <FilterBurgers/>
            </Container>
            <div className='row justify-content-center' key='homescreenInnerDiv'>
                {
                    loading ? (<Loader/>) : error ? (<ErrorComponent error='Something went wrong'/>) : (
                        burgers.map((burger, index) => {
                            return (
                                <div key={index} className='col-lg-4 col-md-6 col-sm-6'>
                                    <div>
                                        <Burger burger={burger} />
                                    </div>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </div>
    )
}
