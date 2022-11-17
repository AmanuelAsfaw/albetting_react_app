import { Fragment, useEffect, useState } from 'react';
import Header from '../components/header';
import Report from '../components/Report/report';
import './casher.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticketing from '../components/ticketing';

import ScannerModal from '../components/scanner_modal';
import useScanDetection from 'use-scan-detection';

function Casher() {
    const [barcode, setBarcode] = useState(null)
    const [barcodeModalShow, setBarcodeModalShow] = useState(false)
    const [billNumber, setBillNumber] = useState(null)
    

    function closeModal(){
        setBarcodeModalShow(false)
    }
    function onBarcodeDetected(code){
        if(code !== null){
            setBarcode(code)
            setBarcodeModalShow(true)
        }
    }
    
    useScanDetection({
        onComplete: (code) => {
            onBarcodeDetected(code)
        },
        minLength:3
    })

    return (
        <Fragment>
        { barcodeModalShow && (<ScannerModal closeModal={closeModal} billNumber={barcode}/>)}
            <Header/>
            <Routes>
                <Route index element={<Ticketing/>}/>
                <Route path='/report' element={<Report/>}/>
            </Routes>
        </Fragment>
    )
}

export default Casher