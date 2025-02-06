import { useState,useEffect } from "react";
import axios from "axios";
export default function AddEmployee(){
    const [emp,setEmp]=useState({name:"",age:"",email:"",salary:""});
    async function addEmp(e){
        e.preventDefault();
        let res=await axios({
            method:"post",
            url:"http://localhost:8000/add",
            data:{emp}
        })
        window.location.href="/"
    }
    return (
        <>  <h2>Add Employee</h2>
            <form>
                <input type="text" placeholder="Name"onChange={(e)=>setEmp({...emp,name:e.target.value})}/>
                <input type="text" placeholder="Email"onChange={(e)=>setEmp({...emp,email:e.target.value})}/>
                <input type="number" placeholder="Age"onChange={(e)=>setEmp({...emp,age:e.target.value})}/>
                <input type="number" placeholder="Salary"onChange={(e)=>setEmp({...emp,salary:e.target.value})}/>
                <button onClick={addEmp}>Add</button>
                
            </form>
        </>
    )
}