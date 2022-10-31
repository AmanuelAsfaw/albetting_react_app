import axios from 'axios';
import { useEffect, useState } from 'react';
import './home.css';
function Home() {
    const [currentGame, setCurrentGame] = useState(null);
    const [current_game_start_at, setCurrentGameStartAt] = useState(null);
    const [next_game_start_at, setNextGameStartAt] = useState(null);
    const [nextGame, setNextGame] = useState(null);

    useEffect(()=>{
        console.log("useEffect")
        axios.get('http://127.0.0.1:8000/casher/live_draw')
            .then((response) => {
                console.log(response.data)
                if(response.data.status === 200 && response.data.current_game){
                    console.log(typeof(response.data.current_game.started_at).toString().split("T"));
                    setCurrentGame(response.data.current_game)
                }
                if(response.data.status === 200 && response.data.next_game){
                    setNextGame(response.data.next_game)
                    // console.log(nextGame)
                }
            })
    },[])

    useEffect(()=>{
        if(currentGame){
            console.log('current game');
            const utcTimestamp = new Date()
            const time_array = currentGame.started_at.split('Z')[0].split("T")
            
            const current_datetime = new Date(time_array[0]+" "+time_array[1]);
            setCurrentGameStartAt(current_datetime);
            console.log(current_datetime);
            console.log(utcTimestamp.toUTCString())
            // console.log(current_game_start_at)
        }
    },[currentGame])

    useEffect(() => {
        if(nextGame){
            console.log('next game');
            const time_array = nextGame.started_at.split('Z')[0].split("T")
            const next_datetime = new Date(time_array[0]+" "+time_array[1])
            setNextGameStartAt(next_datetime);
            console.log(next_datetime);
        }
    }, [nextGame])

    return (
        <section className="parent">
            <section className="child_anim">
                <div className="rnd">
                    <div className="drawsNum">1/20</div>
                    <div className="cube">
                        <div className="top"></div>
                        <div className="top2"></div>
                        <div>
                            <span style={{"--i":0}}>1</span>
                            <span style={{"--i":1}}>1</span>
                            <span style={{"--i":2}}>77</span>
                            <span style={{"--i":3}}>69</span>
                        </div>
                    </div>
                    <div className="gamenumber">
                        <div className="title">DRAWING GAME</div>
                        <h1 className="cntdwn">1234</h1>
                    </div>
                    <div className="nextgame">
                        <div className="title">NEXT GAME</div>
                        <div className="cntdwn">
                            1:55
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#233329" />
                                <stop offset="100%" stop-color="#63D471" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </section>
            <section className="child">
                <div className="wrapper">
                    <div className="box animate_start">1</div>
                    <div className="box animate_start">2</div>
                    <div className="box animate_start">3</div>
                    <div className="box animate_start">4</div>
                    <div className="box animate_start">5</div>
                    <div className="box animate_start">6</div>
                    <div className="box animate_start">7</div>
                    <div className="box animate_start">8</div>
                    <div className="box animate_start">9</div>
                    <div className="box8 animate_start">10</div>
                    <div className="box animate_start">11</div>
                    <div className="box animate_start">12</div>
                    <div className="box animate_start">13</div>
                    <div className="box animate_start">14</div>
                    <div className="box animate_start">15</div>
                    <div className="box animate_start">16</div>
                    <div className="box animate_start">17</div>
                    <div className="box animate_start">18</div>
                    <div className="box animate_start">19</div>
                    <div className="box7 animate_start">20</div>
                    <div className="box animate_start">21</div>
                    <div className="box animate_start">22</div>
                    <div className="box animate_start">23</div>
                    <div className="box animate_start">24</div>
                    <div className="box animate_start">25</div>
                    <div className="box animate_start">26</div>
                    <div className="box animate_start">27</div>
                    <div className="box animate_start">28</div>
                    <div className="box animate_start">29</div>
                    <div className="box6 animate_start">30</div>
                    <div className="box animate_start">31</div>
                    <div className="box animate_start">32</div>
                    <div className="box animate_start">33</div>
                    <div className="box animate_start">34</div>
                    <div className="box animate_start">35</div>
                    <div className="box animate_start">36</div>
                    <div className="box animate_start">37</div>
                    <div className="box animate_start">38</div>
                    <div className="box animate_start">39</div>
                    <div className="box5 animate_start">40</div>
                    <div className="box animate_start">41</div>
                    <div className="box animate_start">42</div>
                    <div className="box animate_start">43</div>
                    <div className="box4 animate_start">44</div>
                    <div className="box animate_start">45</div>
                    <div className="box animate_start">46</div>
                    <div className="box animate_start">47</div>
                    <div className="box animate_start">48</div>
                    <div className="box animate_start">49</div>
                    <div className="box4 animate_start">50</div>
                    <div className="box animate_start">51</div>
                    <div className="box animate_start">52</div>
                    <div className="box animate_start">53</div>
                    <div className="box animate_start">54</div>
                    <div className="box animate_start">55</div>
                    <div className="box animate_start">56</div>
                    <div className="box animate_start">57</div>
                    <div className="box animate_start">58</div>
                    <div className="box animate_start">59</div>
                    <div className="box3 animate_start">60</div>
                    <div className="box animate_start">61</div>
                    <div className="box animate_start">62</div>
                    <div className="box animate_start">63</div>
                    <div className="box animate_start">64</div>
                    <div className="box5 animate_start">65</div>
                    <div className="box animate_start">66</div>
                    <div className="box animate_start">67</div>
                    <div className="box animate_start">68</div>
                    <div className="box animate_start">69</div>
                    <div className="box2 animate_start">70</div>
                    <div className="box animate_start">71</div>
                    <div className="box animate_start">72</div>
                    <div className="box animate_start">73</div>
                    <div className="box animate_start">74</div>
                    <div className="box animate_start">75</div>
                    <div className="box animate_start">76</div>
                    <div className="box animate_start">77</div>
                    <div className="box animate_start">78</div>
                    <div className="box animate_start">79</div>
                    <div className="box1 animate_start">80</div>
                </div>
            </section>
        </section>
    )
}

export default Home;