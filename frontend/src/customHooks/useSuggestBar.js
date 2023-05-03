import { useEffect, useState } from "react";
import axios from 'axios'

export default function useSuggestBar(searchString, url) {
    const [list, setList] = useState([])

    useEffect(()=>{
        if(searchString && !list.some(item => item.weapon_name === searchString)) {
            axios.post(url,{name : searchString},{withCredentials : true})
            .then(response=>setList(response.data))

        } else {
            setList([])
        }
    },[searchString])

    return [list, setList]
}
