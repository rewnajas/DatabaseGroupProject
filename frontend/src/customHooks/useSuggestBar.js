import { useState } from "react";


export default function useSuggestBar() {
    const [list,setList] = useState([])

    return [list,setList]
  
}
