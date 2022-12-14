import { Fragment, useState } from "react"
import 'boxicons'
import axios from "axios"
import { useBarcode } from 'next-barcode'
import { Barcode, Br, Cut, Line, Printer, render, Row, Text } from "react-thermal-printer"

function Ticketing() {
    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [betSlip, setBetSlip] = useState(null)
    const [stake, setStake] = useState(10)
    const [ticketNumber, setTicketNumber] = useState("12347686397486389")
    const [gameNumber, setGameNumber] = useState("123")
    const [minPayOut, setMinPayOut] = useState("")
    const [maxPayOut, setMaxPayOut] = useState("")
    const [date, setDate] = useState(Date.now().toString())
    const [casher, setCasher] = useState("USER1")
    const [branch, setBranch] = useState("JEMO1")
    const [odd, setOdd] = useState(3.5)
    const [PrinterUrl, setPrinterUrl] = useState("")

    const max_selectedNumbers = 6
    const numbers_list = [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45,46,47,48,49,50,
        51,52,53,54,55,56,57,58,59,60,
        61,62,63,64,65,66,67,68,69,70,
        71,72,73,74,75,76,77,78,79,80
    ]
    const numberWithOdd = {
        1:3.5,
        2:15,
        3:35,
        4:100,
        5:300,
        6:1800,
        7:2150,
        8:3000,
        9:4200,
        10:5000
    }
    
    function removeFromSelectedNumbers(item){
        if(selectedNumbers.includes(item)){
            let newArray = selectedNumbers.slice()
            const index = newArray.indexOf(item)
            if(index > -1){
                newArray.splice(index, 1)
                setSelectedNumbers(newArray)
            }
        }
    }

    function addToSelectedNumbers(item){
        if(!selectedNumbers.includes(item) && selectedNumbers.length < max_selectedNumbers){
            let newArray = selectedNumbers.slice()
            newArray.push(item)
            setSelectedNumbers(newArray)
        }
    }

    function TableDisplay({length}){
        if(length === 1){
            return (
                <tr>
                    <td>{length}</td>
                    <td>{numberWithOdd[length]}</td>
                </tr>
            )
        }
        else if(length === 2){
            return (
                <tr>
                    <td>{length}</td>
                    <td>{numberWithOdd[length]}</td>
                </tr>
            )
        }
        else if(length === 3){
            return (
                <Fragment>
                    <tr>
                        <td>2</td>
                        <td>{numberWithOdd[2]}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{numberWithOdd[3]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 4){
            return (
                <Fragment>
                    <tr>
                        <td>2</td>
                        <td>{numberWithOdd[2]}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{numberWithOdd[3]}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{numberWithOdd[4]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 5){
            return (
                <Fragment>
                    <tr>
                        <td>2</td>
                        <td>{numberWithOdd[2]}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>{numberWithOdd[3]}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{numberWithOdd[4]}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{numberWithOdd[5]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 6){
            return (
                <Fragment>
                    <tr>
                        <td>3</td>
                        <td>{numberWithOdd[3]}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{numberWithOdd[4]}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{numberWithOdd[5]}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{numberWithOdd[6]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 7){
            return (
                <Fragment>
                    <tr>
                        <td>3</td>
                        <td>{numberWithOdd[3]}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>{numberWithOdd[4]}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{numberWithOdd[5]}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{numberWithOdd[6]}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{numberWithOdd[7]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 8){
            return (
                <Fragment>
                    <tr>
                        <td>4</td>
                        <td>{numberWithOdd[4]}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{numberWithOdd[5]}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{numberWithOdd[6]}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{numberWithOdd[7]}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{numberWithOdd[8]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 9){
            return (
                <Fragment>
                    <tr>
                        <td>4</td>
                        <td>{numberWithOdd[4]}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>{numberWithOdd[5]}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{numberWithOdd[6]}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{numberWithOdd[7]}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{numberWithOdd[8]}</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>{numberWithOdd[9]}</td>
                    </tr>
                </Fragment>
            )
        }
        else if(length === 10){
            return (
                <Fragment>
                    <tr>
                        <td>5</td>
                        <td>{numberWithOdd[5]}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>{numberWithOdd[6]}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>{numberWithOdd[7]}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>{numberWithOdd[8]}</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>{numberWithOdd[9]}</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>{numberWithOdd[10]}</td>
                    </tr>
                </Fragment>
            )
        }
        else{
            return (
                <Fragment>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </Fragment>
            )
        }
    }

    function AddToBetSlip(){
        setBetSlip(null)
        if(selectedNumbers.length > 0){            
            axios.post('http://127.0.0.1:8000/casher/add_bill',
                {
                    "game_id": 200,
                    "selected_numbers" : selectedNumbers
                }
            )
            .then((response) => {
                setBetSlip(response.data)
            })
            .catch(error => {
                console.log('AddToBetSlip error catch');
                console.error(error);
            })
        }
    }
    function getMaximumPayout(length){
        if(length > 0){
            // setMaxPayOut(stake * numberWithOdd[length])
            return stake * numberWithOdd[length]
        }
        return 0
    }
    function getMinimumPayout(length){
        if(length === 1 || length === 2){
            // setMinPayOut(stake * numberWithOdd[length])
            return stake * numberWithOdd[length]
        }
        else if(length === 3 || length === 4 || length === 4){
            // setMinPayOut(stake * numberWithOdd[2])
            return stake * numberWithOdd[2]
        }
        else if(length === 6){
            // setMinPayOut(stake * numberWithOdd[3])
            return stake * numberWithOdd[3]
        }
        return 0
    }
    const { inputRef } = useBarcode({
        value: ticketNumber !== null && ticketNumber.length > 0 ? ticketNumber:'Al-Betting',
        options: {
            background: '#ffffff',
        }
    })

    const PrintData  = async() => await render(
        <Printer type='epson'>
            <Text>Hello World</Text>
        </Printer>
    )

    const Data  = async() => await render(
        <Printer type='epson'>
            <Text align='right'>JEMO1</Text>
            <Text align='right'>USER1</Text>
            <Text align='left'>GAME NUMBER : 123</Text>
            <Text align='left'>TICKET NUMBER :12347686397486389</Text>
            <Text align='left'>SELECTED NUMBERS</Text>
            <Text align='center'>{
                        selectedNumbers.map((item) => item + ' ')
                    }</Text>
            <Text align='center'>STAKE {stake} ETB</Text>
            <Br/>
            <Line />
            <Row
            left={<Text>MIN PAYOUT</Text>}
            right={getMinimumPayout(selectedNumbers.length) + 'ETB'}
            />
            <Line />
            <Row
            left={<Text>MAX PAYOUT</Text>}
            right={getMaximumPayout(selectedNumbers.length) + 'ETB'}
            />
            <Line />
            <Barcode type="UPC-A" content={ticketNumber !== null && ticketNumber.length > 0 ? ticketNumber:'Al-Betting'} />
            <Br/>
            <Cut/>
        </Printer>
    )

    async function thermalPrinter() {
        const port = await window.navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });

        const writer = port.writable?.getWriter();
        if (writer != null) {
            await writer.write(Data);
            writer.releaseLock();
        }
    }

    async function sample_printer(event) {
        
        event.preventDefault()
        var url_ = "albetprt:game="+gameNumber+"&ticket="+ticketNumber+"&stack="+stake
            +"&minpay="+getMinimumPayout(selectedNumbers.length)+"&maxpay="+getMaximumPayout(selectedNumbers.length)+"&date="+date+"&casher="+casher
            +"&branch="+branch+"&odd="+odd+"?"+ selectedNumbers.join("&");
        console.log(url_);
        event.preventDefault()
        
    }
    return (
        <section className="parent">
            <section className="child">
                <div className="wrapper" style={{ 'fontSize': 24}}>
                    {numbers_list.map( (item) => {
                        if(selectedNumbers.includes(item)){
                            return(
                                <div className="box1 animate_start" onClick={()=> {removeFromSelectedNumbers(item)}}>{item}</div>
                            )
                        }
                        return(
                            <div className="box animate_start" onClick={() => {addToSelectedNumbers(item)}}>{item}</div>
                        )
                    })}
                </div>
            </section>
            <section className="table_view">
                <div className="clearbtn" onClick={()=> {
                    setSelectedNumbers([])
                }}>
                    <span className="cleartxt" style={{'display': 'flex', 'justifyContent' : 'center', 'alignItems': 'center', 'fontSize': 17}}>CLEAR
                        <box-icon name="trash" color="white" style={{'marginLeft':5}} size={'20px'}></box-icon>
                    </span>
                </div>
                <table>
                    <tr>
                        <th colSpan="2">HIGHEST PAYOUT 5,000 OUT of 10</th>
                    </tr>
                    <TableDisplay length={selectedNumbers.length}/>
                    <th colSpan="2">HITS <span className="pnts">POINTS</span></th>
                </table>
                <div className="addbetbtn" onClick={()=> {AddToBetSlip()}}>
                    <span className="cleartxt" style={{'display': 'flex', 'justifyContent' : 'center', 'fontSize': 17}}>ADD TO BET SLIP
                        <box-icon name="printer" color="white" style={{'marginLeft':5}} size={'20px'}></box-icon>
                    </span>
                </div>
            </section>
            <section className="slip_view">
                <div className="card">
                    <div className="printcard">
                    <p id="date"></p>
                    <p className="branch">{branch}</p>
                    <p className="cashier_name">{casher}</p>
                    <p className="gamenumber">GAME NUMBER : <span className="spacetxt"> {gameNumber}</span></p>
                    <p className="ticket_number">TICKET NUMBER :{ticketNumber}</p>
                    <p className="ticket_number">SELECTED NUMBERS</p>
                    <p className="numbers">{
                        selectedNumbers.map((item) => item + ' ') + '   X'+odd
                    }</p>
                    <p className="price"><span className="pricedescrp">STAKE</span> {stake} ETB</p>
                    <p className="price"><span className="pricedescrp">MIN PAYOUT</span>  {getMinimumPayout(selectedNumbers.length)} ETB</p>
                    <p className="price"><span className="pricedescrp">MAX PAYOUT</span>  {getMaximumPayout(selectedNumbers.length)} ETB</p>
                    <svg ref={inputRef} className="barcode"/>
                    </div>
                    <label htmlFor="currency-field">Enter Amount</label>
                    <input type="number" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                        value={stake} data-type="currency" placeholder="$10" onChange={(e) => {setStake(e.target.value)}}/>
                    <p><button style={{'display': 'flex', 'justifyContent' : 'center'}} onClick={(event) => {
                        //thermalPrinter()
                        sample_printer(event)
                        }}>
                        PRINT
                        <box-icon name="printer" color="white" style={{'marginLeft':10}}></box-icon>
                    </button></p>
                </div>
    
            </section>
        </section>
    )
}

export default Ticketing