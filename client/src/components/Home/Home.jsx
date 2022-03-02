import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../../actions";
import Dogs from "../Dogs/Dogs";
import SearchBar from "../SearchBar/SearchBar"
import NextPageBar from "../NextPageBar/NextPageBar"

const Home = () =>{
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getAllDogs())
    }, []);

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