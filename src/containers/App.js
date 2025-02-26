import React, {useEffect, useState} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js"
import Scroll from "../components/Scroll.js"

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users => setRobots(users));
    },[])

    function onSearchChange(event) {
        setSearchfield(event.target.value)
    };
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });

        if (robots.length === 0){
            return( 
            <div className="tc">
                <h1>Loading...</h1>
            </div>
            )
        }
        return (    
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <button onClick={() => setCount(count+1)}>Click Me!</button>
                <h2>{count}</h2>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
}

export default App