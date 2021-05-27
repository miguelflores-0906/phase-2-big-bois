import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Navsearch = () => {

    const history = useHistory()

    const [searchKey, setKey] = useState('')

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(searchKey)
            history.push({
                pathname: '/search/results',
                details: searchKey
            })
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search" className="search" onKeyPress={handleKeyPress} onChange={e => setKey(e.target.value)}/>
        </div>
    )
}

export default Navsearch
