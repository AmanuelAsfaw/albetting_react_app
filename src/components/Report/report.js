import { useState } from "react"
import './report.css';

function Report(){
    const [activeTab, setActiveTab] = useState('summary')
    return (
        <section className="report-sec">
            <div className="report-sec-tab">
                
                <button className={ activeTab === 'summary'? "active tab": 'tab'} onClick={() => setActiveTab('summary')} id="summary_btn">Summary</button>
                <button className={ activeTab === 'today'? "active tab": 'tab'} onClick={() => setActiveTab('today')} id="today_btn">Today Tickets</button>
                <button className={ activeTab === 'weekly'? "active tab": 'tab'} onClick={() => setActiveTab('weekly')} id="weekly_btn">This Week Tickets</button>
                <button className={ activeTab === 'scanner'? "active tab": 'tab'} onClick={() => setActiveTab('scanner')} id="scanner_btn">Scanner</button>
            </div>
            <div className="smmary_body report-body" id="summary_btn_body" style={activeTab === 'summary'?{}:{"display": "none"}}>
                <div className="balanceview">
                    Balance: 10,000
                </div>
                <div className="summary-form">
                    <div className="summary-form-upper">
                        <div className="summary-form-upper-left">
                            <h5>From Date</h5>
                            <input type="date" readOnly={true}/>
                        </div>
                        <div>
                            <h5>To Date</h5>
                            <div>
                                <input type="date" readOnly={true}/>
                                <button>Get</button>
                            </div>
                        </div>
                    </div>
                    <div className="summary-form-lower">
                        <div className="reportdate">
                            Report Date: 20/2/2022
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Start Balance</th>
                                    <th>End Balance</th>
                                    <th>Bills</th>
                                    <th>Games</th>
                                    <th>Canceled</th>
                                    <th>Redeemed</th>
                                    <th>Games</th>
                                    <th>Gain</th>
                                    <th>Loss</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Start Balance</td>
                                    <td>End Balance</td>
                                    <td>Bills</td>
                                    <td>Games</td>
                                    <td>Canceled</td>
                                    <td>Redeemed</td>
                                    <td>Games</td>
                                    <td>Gain</td>
                                    <td>Loss</td>
                                </tr>
                                <tr>
                                    <td>Start Balance</td>
                                    <td>End Balance</td>
                                    <td>Bills</td>
                                    <td>Games</td>
                                    <td>Canceled</td>
                                    <td>Redeemed</td>
                                    <td>Games</td>
                                    <td>Gain</td>
                                    <td>Loss</td>
                                </tr>
                                <tr>
                                    <td>Start Balance</td>
                                    <td>End Balance</td>
                                    <td>Bills</td>
                                    <td>Games</td>
                                    <td>Canceled</td>
                                    <td>Redeemed</td>
                                    <td>Games</td>
                                    <td>Gain</td>
                                    <td>Loss</td>
                                </tr>
                                <tr>
                                    <td>Start Balance</td>
                                    <td>End Balance</td>
                                    <td>Bills</td>
                                    <td>Games</td>
                                    <td>Canceled</td>
                                    <td>Redeemed</td>
                                    <td>Games</td>
                                    <td>Gain</td>
                                    <td>Loss</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="today_tickets report-body" id="today_btn_body" style={activeTab === 'today'?{}:{"display": "none"}}>
                <div className="today_gamnum">
                    <select className="gamenum" id="gamenum">
                        <option value="volvo">100</option>
                        <option value="volvo">101</option>
                        <option value="volvo">102</option>
                        <option value="volvo">103</option>
                        <option value="volvo">104</option>
                        <option value="volvo">105</option>
                        <option value="volvo">106</option>
                        <option value="volvo">107</option>
                        <option value="volvo">108</option>
                        <option value="volvo">109</option>
                        <option value="volvo">110</option>
                        <option value="volvo">111</option>
                        <option value="volvo">112</option>
                        <option value="volvo">113</option>
                        <option value="volvo">114</option>
                        <option value="volvo">115</option>
                        <option value="volvo">116</option>
                        <option value="volvo">117</option>
                        <option value="volvo">118</option>
                        <option value="volvo">119</option>
                        <option value="volvo">120</option>
                        <option value="volvo">121</option>
                        <option value="volvo">122</option>
                        <option value="volvo">123</option>
                        <option value="volvo">124</option>
                        <option value="volvo">125</option>
                        <option value="volvo">126</option>
                        <option value="volvo">127</option>
                        <option value="volvo">128</option>
                        <option value="volvo">129</option>
                        <option value="volvo">130</option>
                        <option value="volvo">131</option>
                        <option value="volvo">132</option>
                        <option value="volvo">133</option>
                        <option value="volvo">134</option>
                        <option value="volvo">135</option>
                    </select>
                    <button>Get</button>
                </div>
                <table className="table">
                    <thead>
                        <td>Bill Num</td>
                        <td>Selected Num</td>
                        <td>Is Winner</td>
                        <td>Odds</td>
                        <td>Canceled</td>
                        <td>Redeemed</td>
                        <td>Gain</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="weekly_tickets report-body" id="weekly_btn_body" style={activeTab === 'weekly'?{}:{"display": "none"}}>
                <div className="weekly_gamnum">
                    <input type="date"/>
                    <select className="gamenum" id="gamenum" readOnly={true}>
                        <option value="volvo" default>All</option>
                        <option value="volvo">100</option>
                        <option value="volvo">101</option>
                        <option value="volvo">102</option>
                        <option value="volvo">103</option>
                        <option value="volvo">104</option>
                        <option value="volvo">105</option>
                        <option value="volvo">106</option>
                        <option value="volvo">107</option>
                        <option value="volvo">108</option>
                        <option value="volvo">109</option>
                        <option value="volvo">110</option>
                        <option value="volvo">111</option>
                        <option value="volvo">112</option>
                        <option value="volvo">113</option>
                        <option value="volvo">114</option>
                        <option value="volvo">115</option>
                        <option value="volvo">116</option>
                        <option value="volvo">117</option>
                        <option value="volvo">118</option>
                        <option value="volvo">119</option>
                        <option value="volvo">120</option>
                        <option value="volvo">121</option>
                        <option value="volvo">122</option>
                        <option value="volvo">123</option>
                        <option value="volvo">124</option>
                        <option value="volvo">125</option>
                        <option value="volvo">126</option>
                        <option value="volvo">127</option>
                        <option value="volvo">128</option>
                        <option value="volvo">129</option>
                        <option value="volvo">130</option>
                        <option value="volvo">131</option>
                        <option value="volvo">132</option>
                        <option value="volvo">133</option>
                        <option value="volvo">134</option>
                        <option value="volvo">135</option>
                    </select>
                    <button>Get</button>
                </div>
                <table className="table">
                    <thead>
                        <td>Bill Num</td>
                        <td>Selected Num</td>
                        <td>Is Winner</td>
                        <td>Odds</td>
                        <td>Canceled</td>
                        <td>Redeemed</td>
                        <td>Gain</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                        <tr>
                            <td>100345231</td>
                            <td>20,23,2,3,42,23,4</td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>35</td>
                            <td>
                                <span style={{'color': 'red', 'fontWeight': 'bold'}}>No</span>
                            </td>
                            <td>
                                <span style={{'color': 'green', 'fontWeight': 'bold'}}>Yes</span>
                            </td>
                            <td>350 ETB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="scanner_tickets report-body" id="scanner_btn_body" style={activeTab === 'scanner'?{}:{"display": "none"}}>
                <input type="text" value="1341234234234"/>
                <div>               
                    <div className="scannerfield draws">
                        <label>Selected : </label>
                        <div className="draws">
                            <span>2</span>
                            <span>12</span>
                            <span>78</span>
                            <span>2</span>
                            <span>12</span>
                        </div>
                    </div>             
                    <div className="scannerfield draws">
                        <label>Draws : </label> 
                        <div className="draws">
                            <span>2</span>
                            <span>12</span>
                            <span>78</span>
                            <span>2</span>
                            <span>12</span>
                            <span>78</span>
                            <span>2</span>
                            <span>12</span>
                            <span>78</span>
                            <span>2</span>
                            <span>12</span>
                            <span>78</span>
                        </div>
                    </div>           
                    <div className="scannerfield">
                        <label className="winner">Winner</label>
                    </div>           
                    <div className="scannerfield">
                        <label>Game : </label> 
                        <label>100</label>
                    </div>             
                    <div className="scannerfield">
                        <label>Date : </label> 
                        <label>22/2/2022</label>
                    </div>            
                    <div className="scannerfield">
                        <label>Odd : </label> 
                        <label>35</label>
                    </div>             
                    <div className="scannerfield">
                        <label>Gain : </label> 
                        <label>350 ETB</label>
                    </div>    
                </div> 
                <div className="scannerbutton">
                    <button>Redeeme</button>
                    <button>Get</button>
                </div>
            </div>
        </section>
    )
}

export default Report