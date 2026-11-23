import React, { useEffect } from "react"
import {useState} from "react"

function Github(){
    const[data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/amitsharmamumbai')  
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])

    return (
        <div className="text-center">Github Followers: {data.followers}
            <img src={data.avatar_url} width={300} alt="git image"></img>
        </div>
    )
}

export default Github