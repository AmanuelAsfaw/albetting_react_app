import axios from 'axios';
import { useEffect, useState } from 'react';
import MainUrl from '../constants';
import './home.css';
function Home() {
    const [currentGame, setCurrentGame] = useState(null);
    const [current_game_start_at, setCurrentGameStartAt] = useState(null);
    const [next_game_start_at, setNextGameStartAt] = useState(null);
    const [nextGame, setNextGame] = useState(null);
    const [isReady, setIsReady] = useState(true);
    const [isFirst, setIsFirst] = useState(true);
    const [drawedNumber, setDrawedNumber] = useState(null);
    const [currentDrawNumber, setCurrentDrawNumber] = useState(null);
    const [nextGameTime, setNextGameTime] = useState(null);
    const [nextGameTimeStart, setNextGameTimeStart] = useState(null);
    const [currentGameDrawsList,setCurrentGameDrawsList] = useState([]);
    const [loading_screen, setLoadingScreen] = useState(true);
    const number_list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
                        21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
                        41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
                        61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80
                        ]

    function fetch_data() {
        axios.get(MainUrl+'casher/live_draw')
        .then((response) => {
            console.log(response.data)
            if(response.data.status === 200 && response.data.current_game){
                console.log(typeof(response.data.current_game.started_at).toString().split("T"));
                setCurrentGame(response.data.current_game)
                setIsReady(false)
            }
            if(response.data.status === 200 && response.data.next_game){
                setNextGame(response.data.next_game)
                setLoadingScreen(false)
            }
        })
    }

    useEffect(()=>{
        console.log('==== isFirst ===');
        if(isFirst && nextGame === null ){
            console.log("useEffect"+isFirst)
            setIsFirst(false)
            fetch_data()
        }
    },[isFirst])

    useEffect(()=>{
        console.log('=== currentGame ===');
        if(currentGame && currentGame.started_at){
            console.log('current game');
            const utcTimestamp = new Date()
            const time_array = currentGame.started_at.split('Z')[0].split("T")
            
            const current_datetime = new Date(time_array[0]+" "+time_array[1]);
            setCurrentGameStartAt(current_datetime);
            setCurrentGameDrawsList(currentGame.draw_numbers);
        }
    },[currentGame])

    useEffect(() => {
        console.info('=== next game ===');
        if(nextGame){
            const time_array = nextGame.started_at.split('Z')[0].split("T")
            const next_datetime = new Date(time_array[0]+" "+time_array[1])
            
            const utcTimestamp = new Date()
            const gmtTimestamp = utcTimestamp.setHours(utcTimestamp.getHours() - 3)

            let timeObject = new Date(next_datetime.getTime() + 10*1000)
            var miliseconds = Math.abs(timeObject - gmtTimestamp)
            const minutes = Math.floor((miliseconds/1000)/60)
            setNextGameStartAt(miliseconds)
            setNextGameTime(miliseconds/1000)
        }        
    }, [nextGame])

    useEffect(() => {
        console.log('=== current_game_start_at isReady currentGame ===');
        console.log(isReady);
        console.log(current_game_start_at);
        if(current_game_start_at !== null && isReady){
            const utcTimestamp = new Date()
            const gmtTimestamp = utcTimestamp.setHours(utcTimestamp.getHours() - 3)
            let timeObject = new Date(current_game_start_at.getTime() + 10*1000)
            console.log(timeObject);
            if (timeObject > gmtTimestamp){
                console.log('is ready ...')
                var miliseconds = (current_game_start_at.getTime() - gmtTimestamp);
                const timeOut = setTimeout(() => {
                    setIsReady(false)
                }, miliseconds)
                return () => clearTimeout(timeOut);
            } else{
                setIsReady(false)
            }
        }
        if(current_game_start_at !== null && !isReady){
            const utcTimestamp = new Date()
            const gmtTimestamp = utcTimestamp.setHours(utcTimestamp.getHours() - 3)
            let timeObject = new Date(current_game_start_at.getTime() + 10*1000)
            console.log('timeObject '+ timeObject);
            console.log('timeObject '+ gmtTimestamp.toString());
            console.log(timeObject <= gmtTimestamp);
            if(timeObject <= gmtTimestamp){
                console.log('Animation start...')
                let seconds = (gmtTimestamp - current_game_start_at.getTime())/ 1000 - 10
                let past_draw = Math.floor(seconds/3)
                console.log(seconds);
                console.log(past_draw);
                if(past_draw < 20){
                    setDrawedNumber(past_draw)
                    const first_draw = setTimeout(() => {
                        console.log('past_draw..............')
                        setDrawedNumber(past_draw)
                    }, (seconds%3)*1000 )
                    
                    return () => clearTimeout(first_draw)
                }
            }
        }
    }, [current_game_start_at, isReady])

    useEffect(() => {
        console.log('=== next_game_start_at ===')
        console.log(next_game_start_at);
        if(next_game_start_at !==null){
            console.log('miliseconds '+next_game_start_at);
            // console.log('Next game start affter '+miliseconds/1000);    
            if(next_game_start_at > 6){  
                console.log('next_game_start_at > 6');
                const timeOutFirst = setTimeout(() => {
                    console.log('set loadding screen ....');
                    setLoadingScreen(true)
                    const timeOut = setTimeout(() => {
                        console.log('Fetch Next game ......'+next_game_start_at)
                        console.log('Fetch Next game ...')
                        console.log(next_game_start_at/1000)
                        fetch_data()
                        setLoadingScreen(false)
                    }, 7000)
                    return () => clearTimeout(timeOut)
                }, next_game_start_at - 6000) 
                return () => clearTimeout(timeOutFirst)
                
            }
            else {
                console.log('next_game_start_at <=> 6');
                setLoadingScreen(true)
                console.log('loading_screen' + loading_screen);
                const timeOut = setTimeout(() => {
                    fetch_data()
                    setLoadingScreen(false)
                }, next_game_start_at + 2000)
                return () => clearTimeout(timeOut);
            }   
        }

    }, [next_game_start_at])

    useEffect(() => {
        console.log('=== nextGameTimeStart ===');
        if(nextGameTimeStart !== null && nextGameTimeStart > 4)
        {        
            const interval = setTimeout(() => {
                setNextGameTime(Math.floor(nextGameTimeStart) -1)
            }, 1000);
        
            return () => clearTimeout(interval);
        }
        if (nextGameTimeStart <= 4){
            // setLoadingScreen(true)
            const interval = setTimeout(() => {
                // setLoadingScreen(false)
            }, nextGameTimeStart*1000);
            return () => clearTimeout(interval);
        }
        
    },[nextGameTimeStart])

    useEffect(() => {
        console.log('=== nextGameTime ===');
        console.log(nextGameTime);
        if(nextGameTime !== null && nextGameTime > 8){
            const interval = setTimeout(() => {
                if(nextGameTime > 0)
                {
                    var time = nextGameTime -1;
                    setNextGameTime(time);
                }
                else if(nextGameTime < 0){
                    var time = nextGameTime +1;
                    setNextGameTime(time);
                }
            }, 1000);
            return () => clearTimeout(interval);
        }
        else if (nextGameTime <= 8){            
            setLoadingScreen(true)
            console.log('loading_screen');
            console.log(loading_screen);
            const interval = setTimeout(() => {
                setLoadingScreen(true)
            }, nextGameTime);
            return () => clearTimeout(interval);
        }
    }, [nextGameTime])

    useEffect(() => {
        console.log('=== drawedNumber ===');
        // console.log(drawedNumber);
        if(drawedNumber !==null && drawedNumber < 20){
            const interval = setTimeout(() => {
                if(currentGameDrawsList.length >= drawedNumber){
                    setCurrentDrawNumber(currentGameDrawsList[drawedNumber])
                }
                var draw = drawedNumber +1;
                setDrawedNumber(draw)
            }, 2000);
            return () => clearTimeout(interval);
        }
    }, [drawedNumber])

    const LoadingScreen = () => {
        return(
        <div className="body">
            <div className="logo">
                AL-Betting
            </div>
            <div className="loadingwrapper">
                <div class="playtext">Let's play</div>
                <span style={{'--i':1}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':2}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':3}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':4}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':5}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':6}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':7}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':8}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':9}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
                <span style={{'--i':10}} className="upperspan">
                    <span className="loadingbubble"></span>
                </span>
            </div>
        </div>
        )
    }

    return (
        <div>
            {!loading_screen && (
        <section className="parent">
            <section className="child_anim">
                <div className="rnd">
                    
                    <div className="logo">AL-Betting<button onClick={() =>{
                        const time_array = nextGame.started_at.split('Z')[0].split("T")
                        const next_datetime = new Date(time_array[0]+" "+time_array[1])
                        
                        const utcTimestamp = new Date()
                        const gmtTimestamp = utcTimestamp.setHours(utcTimestamp.getHours() - 3)
            
                        let timeObject = new Date(next_datetime.getTime() + 10*1000)
                        var miliseconds = Math.abs(timeObject - gmtTimestamp)
                        const minutes = Math.floor((miliseconds/1000)/60)
                        console.log(gmtTimestamp.toLocaleString());
                        console.log(timeObject);
                    }}>Get</button></div>
                    {/* {
                        isReady && (
                            <div style={{color: 'white', fontSize: 50}}>Is Ready ....</div>
                        )
                    } */}
            
                    <div className="drawsNum">{drawedNumber !==null &&(
                        drawedNumber + '/20'
                    )}</div>
                    <div className="cube">
                        <div className="top"></div>
                        <div className="top2"></div>
                        <div>
                            <span style={{"--i":0}}>{currentDrawNumber}</span>
                            <span style={{"--i":1}}>{currentDrawNumber}</span>
                            <span style={{"--i":2}}>{currentDrawNumber}</span>
                            <span style={{"--i":3}}>{currentDrawNumber}</span>
                        </div>
                    </div>
                    <div className="gamenumber" >
                        <div className="title">DRAWING GAME  &nbsp;</div>
                        <h1 className="cntdwn">{currentGame !==null ? currentGame.game_number: null}</h1>
                    </div>
                    <div className="nextgame">
                        <div className="title">NEXT GAME {nextGame !==null ? nextGame.game_number: null}</div>
                        <div className="cntdwn">
                            {Math.floor(nextGameTime/60)}:{ Math.floor(nextGameTime%60)}
                        </div>
                    </div>
                </div>
            </section>
            <section className="child">
                <div className="wrapper">
                    {
                        
                        number_list.map((item ) => {
                            if (currentGameDrawsList.length < 20){
                                return (<div key={'numbox'+item} className="box animate_start">{item}</div>)
                            }
                            if(item <= 10 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box1 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 20 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box2 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 30 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box3 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 40 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box4 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 50 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box5 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 60 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box6 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 70 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box7 animate_start">{item}</div>
                                )
                            }
                            else if(item <= 80 && currentGameDrawsList.slice(0,drawedNumber).includes(item)){
                                return (
                                    <div key={'numbox'+item} className="box8 animate_start">{item}</div>
                                )
                            }
                            return (
                                <div key={'numbox'+item} className="box animate_start">{item}</div>
                            )
                        })
                    }
                </div>
            </section>
        </section>
        )}
        {loading_screen && LoadingScreen()}
        </div>
    )    
}

export default Home;