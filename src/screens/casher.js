import { Fragment, useState } from 'react';
import Header from '../components/header';
import Report from '../components/Report/report';
import './casher.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticketing from '../components/ticketing';

function Casher() {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route index element={<Ticketing/>}/>
                <Route path='/report' element={<Report/>}/>
            </Routes>
        </Fragment>
    )
}

export default Casher