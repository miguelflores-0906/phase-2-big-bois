import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Navsearch = () => {

    let history = useHistory()

    const [searchKey, setKey] = useState('')

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            history.push({
                pathname: `/search/results/${searchKey}`,
                details: searchKey
            })
        }
    }

    return (
        <input type="text" placeholder="Search" className="search" onKeyPress={handleKeyPress} onChange={e => setKey(e.target.value)}/>
      
    )
}

export default Navsearch
