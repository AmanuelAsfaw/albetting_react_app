
import './modal.css';

function ScannerModal({closeModal, billNumber}){
    return(
        <div className="modal">
            <div className='modalheader'>
                <h1>Modal Show</h1>
                <button onClick={() => {
                    closeModal()
                }}>X</button>
            </div>
            <div className='modalbody'>
                <input value={billNumber}/>
                <div>
                    <div className='slecteddraws'>
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
                    <div className="scannerbutton">
                        <button>Redeeme</button>
                        <button>Get</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScannerModal