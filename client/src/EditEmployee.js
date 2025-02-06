import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import axios from "axios";
export default function () {
    const { empId } = useParams();
    const [emp, setEmp] = useState({});
    
    async function getOneEmployee(){
        let result=await axios({
            method:"get",
            url:`http://localhost:8000/get/${empId}`
        })
       
        setEmp(result.data.employee);

    }
    useEffect(()=>{
        getOneEmployee();
    },[])

    async function edit(e) {
        e.preventDefault();
        let result = await axios({
            method: "put",
            url: `http://localhost:8000/edit/${empId}`,
            data:{emp}

        })
        
        window.location.href="/"
        

    }
  
    return (
        <> <h2>Edit Employee</h2>
            <form>
                <input type="text" value={emp.name} placeholder="Name" onChange={(e) => setEmp({ ...emp, name: e.target.value })} />
                <input type="text" value={emp.email} placeholder="Email" onChange={(e) => setEmp({ ...emp, email: e.target.value })} />
                <input type="text" value={emp.age} placeholder="Age" onChange={(e) => setEmp({ ...emp, age: e.target.value })} />
                <input type="text" value={emp.salary} placeholder="Salary" onChange={(e) => setEmp({ ...emp, salary: e.target.value })} />
                <button onClick={edit}>Edit</button>

            </form>


        </>
    )
}