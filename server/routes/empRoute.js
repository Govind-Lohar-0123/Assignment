import express from "express";
const router=express.Router();
import EmpController from "../Controllers/EmpController.js";

router.get("/get",EmpController.getAllEmployees);
router.get("/get/:empId",EmpController.getEmployee);
router.post("/add",EmpController.addEmployee);
router.put("/edit/:empId",EmpController.editEmployee);
router.delete("/delete/:empId",EmpController.deleteEmployee);

export default router;