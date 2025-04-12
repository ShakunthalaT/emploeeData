
const express = require("express");
const path = require("path");
const bp = require("body-parser");
const cors = require("cors");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
const dbPath = path.join(__dirname, "employeeData.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer(); 

app.post("/employee/",async (request, response) => {
    const { id, name, phone, email, gender, experience, skills} = request.body;
    const getEmployees = `
    INSERT INTO
      employee(id, name, phone, email, gender, experience,skills)
    VALUES
      ('${id}', '${name}', '${phone}','${email}','${gender}','${experience}','${skills}');`;
    await db.run(getEmployees);
    response.send("Employee Successfully Added");
  });

  
app.get("/employee/", async (request, response) => {
    const getAllEmployees = `
      SELECT
        *
      FROM
        employee;`;
    const employeeArray = await db.all(getAllEmployees);
    response.send(employeeArray);
  });

  app.put("/employee/:id/", async (request, response) => {
    const { id } = request.params;
    const { gender, skills } = request.body;
    const updateEmployee = `
      UPDATE
        employee
      SET 
        
        gender ='${gender}',
        skills ='${skills}'
      WHERE
      id='${id}';`;
    await db.run(updateEmployee);
    response.send("Employee updated successfully");
  });

  app.delete("/employee/:id/", async (request, response) => {
    const { id } = request.params;
    const deleteId = `
    DELETE FROM
      employee
    WHERE
      id = ${id} 
    `;
    await db.run(deleteId);
    response.send("employee Removed");
  });


module.exports = app;

