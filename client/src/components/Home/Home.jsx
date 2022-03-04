import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getTemperaments } from "../../actions";
import Dogs from "../Dogs/Dogs";
import NextPageBar from "../NextPageBar/NextPageBar"
import SearchBar from "../SearchBar/SearchBar";

const Home = () =>{
    let {dogs} = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getAllDogs())
        
    }, [dispatch]);
    useEffect(() =>{
        dispatch(getTemperaments())
    }, [dispatch])

    return (
        <div>
            <SearchBar />
            <Dogs />
            <NextPageBar />
            <h3>
                Created by <a href="https://www.linkedin.com/in/matias-beier-136118225/">Matias Beier 😎</a> 
            </h3>
        </div>
    )
}

export default Home;