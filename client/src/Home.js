import { useEffect, useState } from "react"
import axios from "axios";
export default function Home(){
    const [emp,setEmp]=useState([]);

   
        
    async function getAllEmployee(){
        let result=await axios({
            method:"get",
            url:"http://localhost:8000/get"
        })

        setEmp(result.data.employees);

    }

    async function deleteEmp(empId){
        let res=await axios({
            method:"delete",
            url:`http://localhost:8000/delete/${empId}`
        })
        getAllEmployee();
    }

    useEffect(()=>{
        getAllEmployee();
    })
    
    return (
        <>
            <table>
                <caption>Employees Table</caption>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
                {
                    emp.map((item,idx)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <a href={`/edit/${item._id}`} style={{marginRight:"10px"}}>Edit</a>
                                    <a href="#" onClick={()=>deleteEmp(item._id)}>Delete</a>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <a href="/add">Add Emp</a>
            
        </>
    )
}