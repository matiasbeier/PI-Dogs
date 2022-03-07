import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments, filterByTemperament } from "../../actions";
import Dogs from "../Dogs/Dogs";
import NextPageBar from "../NextPageBar/NextPageBar"
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar"

const Home = () =>{
    let {dogsFiltered} = useSelector(state => state)
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const [loading, setLoading] = useState(false)

    const numberLastDog = dogsPerPage * currentPage;
    const numberFirstDog = numberLastDog - dogsPerPage;
    const currentDogs = dogsFiltered?.slice(numberFirstDog, numberLastDog);

    const paginate = (pageNumber => setCurrentPage(pageNumber))


    useEffect(() =>{
        setLoading(true);
        dispatch(getAllDogs());
        dispatch(getTemperaments())
        .then(()=>dispatch(filterByTemperament("all")))
        .then(()=>setLoading(false))
    }, [dispatch]);

    return (
        <div>
            <NavBar />
            <SearchBar />
            <NextPageBar postPerPage={dogsPerPage} totalPost={dogsFiltered?.length} paginate={paginate} />
            <Dogs currentDogs={currentDogs} loading={loading} />
            <NextPageBar postPerPage={dogsPerPage} totalPost={dogsFiltered?.length} paginate={paginate} />
            <h3>
                Created by <a href="https://www.linkedin.com/in/matias-beier-136118225/">Matias Beier 😎</a> 
            </h3>
        </div>
    )
}

export default Home;