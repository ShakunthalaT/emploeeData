Run server with node app.js
Write APIs to perform operations on the table employee containing the following columns,

Columns	Type

id	INTEGER

name	TEXT

phone	INTEGER

email	TEXT

gender TEXT

experience INTEGER 

skills TEXT 

API 1

Path: /employee/

Method: POST

Description:  Creates a new employee in the employee (database),employee id.

Request: 

 {
        "id": 5,
        
        "name": "Kavya",
        
        "phone": 7389803541,
        
        "email": "kavya@123",
        
        "gender": "Female",
        
        "experience": "[1,2,3,4,5 and others]",
        
        "skills": "[HTML,CSS,JavaScript,React.js,Node.js,Python]"
    } 
    
Response: 
  "Employee Successfully Added"
  

API 2 

Path: /employee/

Method: GET

Description:
Returns a list of all employees 

Response:

[{
   "id": 5,
        "name": "Kavya",
        
        "phone": 7389803541,
        
        "email": "kavya@123",
        
        "gender": "Female",
        
        "experience": "[1,2,3,4,5 and others]",
        
        "skills": "[HTML,CSS,JavaScript,React.js,Node.js,Python]",
        ......}] 
        

API 3

Path: /employee/:id/

Method: PUT

Description:
Updates the details of a employee in the (database) based on the employee id

Respnse:
"Employee updated successfully"

API 4

Path: /employee/:id/

Method: DELETE

Description:
Deletes a employee from the (database) based on the id 

Response:
  "employee Removed" 

## Third party packages:
 express,cors,body-parser,sqlite,sqlite3

  
