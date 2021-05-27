import axios from 'axios'
import React from 'react'

const SearchPage = () => {

    const [searchRes, setSearchRes] = useState("No results found")

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
        axios.post('http://localhost:5000/searchPosts', {key: details})
            .then(res => {
                updateSearchRes(res)
            })
            .catch(err => {
                console.error(err)
            })
    })

    return (
        <div>
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