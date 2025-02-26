import React, {useEffect, useState} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js"
import Scroll from "../components/Scroll.js"
import "./app.css"

function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')


    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
    //         .then(users => this.setState({robots: users}));
    // }
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users => setRobots(users));
    },setRobots)

    function onSearchChange(event) {
        // this.setState({searchfield:event.target.value})
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
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
        );
}

export default App