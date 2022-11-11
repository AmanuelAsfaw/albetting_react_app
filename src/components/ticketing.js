import { Fragment, useState } from "react"
import 'boxicons'

function Ticketing() {
    const [selectedNumbers, setSelectedNumbers] = useState([])
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
        if(length == 1){
            return (
                <tr>
                    <td>{length}</td>
                    <td>{numberWithOdd[length]}</td>
                </tr>
            )
        }
        else if(length == 2){
            return (
                <tr>
                    <td>{length}</td>
                    <td>{numberWithOdd[length]}</td>
                </tr>
            )
        }
        else if(length == 3){
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
        else if(length == 4){
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
        else if(length == 5){
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
        else if(length == 6){
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
        else if(length == 7){
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
        else if(length == 8){
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
        else if(length == 9){
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
        else if(length == 10){
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
                <div className="addbetbtn">
                    <span className="cleartxt" style={{'display': 'flex', 'justifyContent' : 'center', 'fontSize': 17}}>ADD TO BET SLIP
                        <box-icon name="printer" color="white" style={{'marginLeft':5}} size={'20px'}></box-icon>
                    </span>
                </div>
            </section>
            <section className="slip_view">
                <div className="card">
                    <p id="date"></p>
                    <p className="branch">JEMO1</p>
                    <p className="cashier_name">USER1</p>
                    <p className="gamenumber">GAME NUMBER : <span className="spacetxt"> 123</span></p>
                    <p className="ticket_number">TICKET NUMBER :12347686397486389</p>
                    <p className="ticket_number">SELECTED NUMBERS</p>
                    <p className="numbers">{
                        selectedNumbers.map((item) => item + ' ')
                    }</p>
                    <form method="post" action="#">
                        <label htmlFor="currency-field">Enter Amount</label>
                        <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                            value="" data-type="currency" placeholder="$10"/>
                    </form>
                    <p className="price"><span className="pricedescrp">STAKE</span>  $10</p>
                    <p className="price"><span className="pricedescrp">MAX PAYOUT</span>  $1119.99</p>
                    <p className="price"><span className="pricedescrp">MIN PAYOUT</span>  $19.99</p>
                    <p><button style={{'display': 'flex', 'justifyContent' : 'center'}}>
                        PRINT
                        <box-icon name="printer" color="white" style={{'marginLeft':10}}></box-icon>
                    </button></p>
                </div>
    
            </section>
        </section>
    )
}

export default Ticketing