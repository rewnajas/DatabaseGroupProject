import style from './findHistory.module.css'
import { Link } from 'react-router-dom'

export default function Findhistory(props) {
    return (
      <>
      {props.role === 'regular' && (
        <Link to='search' className={style.link}>
        <button className={style.button}>สืบค้นประวัติการยืมอาวุธ</button>
        </Link> 
      )}

      {props.role === 'admin' && (
        <Link to='search' className={style.link}>
        <button className={style.button}>สืบค้นประวัติการยืมอาวุธ</button>
        </Link> 
      )}
      </>
      
    )
  }