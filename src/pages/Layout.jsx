import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import icon from '../assets/ABC 16.webp'
import Favicon from 'react-favicon';



export default function Layout() {
    const [faviconUrl, setFaviconUrl] = useState({ icon });

    useEffect(() => {
        document.title = "A B C || أ ب ت"
    }, []);
    return (
        <Outlet>
            <Favicon />
        </Outlet>
    )
}
