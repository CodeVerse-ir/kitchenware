"use client";

import axios from 'axios';
import { useEffect } from 'react';

const baseURL = "http://localhost:5000/";

export default function GetData({ setData, path }) {
    useEffect(() => {
        axios.get(`${baseURL}${path}`)
            .then((response) => {
                setData(response.data);
                console.log(`${baseURL}${path}`);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return null;
}