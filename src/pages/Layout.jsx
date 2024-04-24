import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import icon from '../assets/ABC 16.png'



export default function Layout() {
    useEffect(() => {
        document.title = "A B C || أ ب ت"
    }, []);
    return (
        <Outlet>

        </Outlet>
    )
}
