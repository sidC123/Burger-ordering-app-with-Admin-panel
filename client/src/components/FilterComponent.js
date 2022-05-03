import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { filterBurgers } from '../actions/burgerActions';


const FilterBurgers = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')


    const filter = () => {
        dispatch(filterBurgers(search, category))
    }




    return (
        <div className="container">

            <div className="row justify-content-center align-items-center shadow p-3 mb-4 bg-white rounded ">

                <div className="col-md-3 mt-2">
                    <input value={search} className="form-control" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Fat-Burgers"></input>
                </div>

                <div className="col-md-3  mt-2" >
                    <select value={category} className="form-control w-100 " onChange={(e) => { setCategory(e.target.value) }} >
                        <option value="all">ALL</option>
                        <option value="veg">Veg</option>
                        <option value="non-veg">Non-Veg</option>
                    </select>
                </div>

                <div className="col-md-3 ">
                    <Button className=" form-control w-100 mt-2" onClick={filter}>Filter</Button>
                </div>

            </div>
        </div>
    )


}

export default FilterBurgers;