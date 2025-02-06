import empModel from "../utils/model/empSchema.js"


class EmpController {

    static getAllEmployees = async (req, res) => {
        let result = await empModel.find();
        res.send({ employees: result });
    }
    static getEmployee = async (req, res) => {
        let result = await empModel.findOne({ _id: req.params.empId });
        res.send({ employee: result });
    }

    static addEmployee = async (req, res) => {
        let empData = req.body.emp;

        try {
            let newEmp = new empModel(empData);
            newEmp.save();
            res.send("Emp is added");
        }
        catch (err) {
            res.send("Server Erro Bad Request");
        }
    }

    static editEmployee = async (req, res) => {
        let { empId } = req.params;
        let empData = req.body.emp;
        try {
            await empModel.updateOne({ _id: empId }, empData);
            console.log("Emp updated")
            res.send("Employee is Updated...");
        }
        catch (err) {
            res.send("Server error Bad Request");
        }
    }

    static deleteEmployee = async (req, res) => {
        let { empId } = req.params;
        try {
            await empModel.deleteOne({ _id: empId });
            console.log("delet")
            res.send("Employees Deleted");
        }
        catch (err) {
            res.send("Server Error Bad Request");
        }
    }
}

export default EmpController;