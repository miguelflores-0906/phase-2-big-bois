import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Post from './Post'
import Navbar from './Navbar'

const SearchPage = (props) => {
    console.log(props)
    
    const [searchRes, setSearchRes] = useState("No results found")
    const key = props.location.details
    console.log(key)
    const updateSearchRes = (resArray) => setSearchRes(resArray.data.map((post, index) => {
        return (
            <Post 
                title = {post.title}
                body = {post.body}
                score = {post.gamerscore}
                username = {post.poster_username}
                board = {post.board}
                id = {post._id}
                key = {index}
            />
        )
    }))

    useEffect(() => {
        axios.post('http://localhost:5000/searchPost', {title: key})
            
            .then(res => {
                updateSearchRes(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [key])

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1 className="search-head">Search Results</h1>
            <div className="search-results">
                <ul>
                     {searchRes} 
                </ul>
            </div>
        </div>
    )
}

export default SearchPage