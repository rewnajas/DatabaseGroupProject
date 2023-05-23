import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './table.module.css';
import axios from '../../../lib/axios';

function Table() {
    const [borrowList, setBorrowList] = useState([]);
    const [joinRowCount, setJoinRowCount] = useState(0);
  
    useEffect(() => {
      getBorrowList();
      countJoinRows();
    }, []);
  
    function getBorrowList() {
      axios.get("http://localhost:8000/guard/borrow").then((response) => {
        setBorrowList(response.data);
      });
    }
  
    const handleButtonClick = (id, weapon)=> {
        const updatedStatus = borrowList.map((item) => {
          if (item.militaryID === id && item.weaponID === weapon) {
            return { ...item, borrowStatus: !item.borrowStatus ? 1 : 0 };
          }
          return item;
        });
    
        setBorrowList(updatedStatus);
    
        axios
          .post("http://localhost:8000/guard/updatedata", { key: id, weapon: weapon, attribute: "อนุมัติ" })
          .then((response) => {
            console.log("Data updated successfully");
          })
          .catch((error) => {
            console.error("Error updating data:", error);
          });
      };

      const countJoinRows = (id, weapon) => {
        return axios
          .post("http://localhost:8000/guard/countjoinrows", { key: id, weapon: weapon })
          .then((response) => {
            return response.data.count;
          })
          .catch((error) => {
            console.error("Error counting join rows:", error);
            return 0;
          });
      };

      useEffect(() => {
        const fetchJoinCounts = async () => {
          const updatedBorrowList = await Promise.all(
            borrowList.map(async (item) => {
              const count = await countJoinRows(item.militaryID, item.weaponID);
              return { ...item, totalAmount: count };
            })
          );
          setBorrowList(updatedBorrowList);
        };
    
        fetchJoinCounts();
      }, [borrowList]);

      const handleButtonDisappear = (id, weapon) => {
        const updatedList = borrowList.filter(
          (item) => !(item.militaryID === id && item.weaponID === weapon)
        );
        setBorrowList(updatedList);
      };
    return (
      <>
        <table className={style.dataTable}>
          <thead>
            <tr>
              <th>Military ID</th>
              <th>Military Name</th>
              <th>Affiliation</th>
              <th>Weapon Name</th>
              <th>Total Amount</th>
              <th>Borrow Date</th>
              <th>Check Box</th>
            </tr>
          </thead>
          <tbody>
            {borrowList.map((val, key) => (
              <tr key={key}>
                <td>{val.militaryID}</td>
                <td>
                  {val.Fname} {val.Lname}
                </td>
                <td>{val.affiliation}</td>
                <td>{val.weaponID}</td>
                <td>{val.totalAmount}</td>
                <td>{val.borrowDate}</td>
                <td>
                  <div>
                  <button onClick={() => handleButtonClick(val.militaryID, val.weaponID)}>
                  {val.borrowStatus ? "ส่งมอบ" : "เสร็จสิ้น"}
                </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  
  export default Table;
