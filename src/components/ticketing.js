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

    return (
        <section class="parent">
            <section class="child">
                <div class="wrapper" style={{ 'fontSize': 24}}>
                    {numbers_list.map( (item) => {
                        if(selectedNumbers.includes(item)){
                            return(
                                <div class="box1 animate_start" onClick={()=> {removeFromSelectedNumbers(item)}}>{item}</div>
                            )
                        }
                        return(
                            <div class="box animate_start" onClick={() => {addToSelectedNumbers(item)}}>{item}</div>
                        )
                    })}
                </div>
            </section>
            <section class="table_view">
                <div class="clearbtn">
                    <span class="cleartxt" style={{'display': 'flex', 'justifyContent' : 'center', 'alignItems': 'center', 'fontSize': 17}}>CLEAR
                        <box-icon name="trash" color="white" style={{'marginLeft':5}} size={'20px'}></box-icon>
                    </span>
                </div>
                <table>
                    <tr>
                        <th colspan="2">HIGHEST PAYOUT 5,000 OUT of 10</th>
                    </tr>
                    <tr>
                        <td>1 </td>
                        <td>256</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>372</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>283</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>250</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>500</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>4000</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>5000</td>
                    </tr>
                    <th colspan="2">HITS <span class="pnts">POINTS</span></th>
                </table>
                <div class="addbetbtn">
                    <span class="cleartxt" style={{'display': 'flex', 'justifyContent' : 'center', 'fontSize': 17}}>ADD TO BET SLIP
                        <box-icon name="printer" color="white" style={{'marginLeft':5}} size={'20px'}></box-icon>
                    </span>
                </div>
            </section>
            <section class="slip_view">
                <div class="card">
                    <p id="date"></p>
                    <p class="branch">JEMO1</p>
                    <p class="cashier_name">USER1</p>
                    <p class="gamenumber">GAME NUMBER : <span class="spacetxt"> 123</span></p>
                    <p class="ticket_number">TICKET NUMBER :12347686397486389</p>
                    <p class="ticket_number">SELECTED NUMBERS</p>
                    <p class="numbers">41 72 63 47 55 69 75 80 29 10</p>
                    <form method="post" action="#">
                        <label for="currency-field">Enter Amount</label>
                        <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                            value="" data-type="currency" placeholder="$10"/>
                    </form>
                    <p class="price"><span class="pricedescrp">STAKE</span>  $10</p>
                    <p class="price"><span class="pricedescrp">MAX PAYOUT</span>  $1119.99</p>
                    <p class="price"><span class="pricedescrp">MIN PAYOUT</span>  $19.99</p>
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