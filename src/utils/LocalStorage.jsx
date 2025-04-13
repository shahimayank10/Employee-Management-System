const employees= [
    {
      "name": "Alice Sharma",
      "email": "alice.sharma@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Update Resume",
          "taskDescription": "Update the resume with latest project details.",
          "taskDate": "2025-04-15",
          "category": "HR",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Submit Report",
          "taskDescription": "Submit the monthly performance report.",
          "taskDate": "2025-04-10",
          "category": "Admin",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "name": "Ravi Mehra",
      "email": "ravi.mehra@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Fix UI Bug",
          "taskDescription": "Resolve alignment issue on login page.",
          "taskDate": "2025-04-12",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review pull requests from frontend team.",
          "taskDate": "2025-04-13",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "name": "Sneha Kapoor",
      "email": "sneha.kapoor@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Conduct weekly sync-up with the team.",
          "taskDate": "2025-04-14",
          "category": "Management",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Client Presentation",
          "taskDescription": "Present the project progress to the client.",
          "taskDate": "2025-04-16",
          "category": "Client",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "name": "Aman Verma",
      "email": "aman.verma@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Database Cleanup",
          "taskDescription": "Remove unused tables and optimize queries.",
          "taskDate": "2025-04-11",
          "category": "Database",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Backup Schedule",
          "taskDescription": "Automate daily backup for production database.",
          "taskDate": "2025-04-13",
          "category": "Database",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "name": "Pooja Singh",
      "email": "pooja.singh@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Marketing Campaign",
          "taskDescription": "Plan the new email marketing campaign.",
          "taskDate": "2025-04-15",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Social Media Analytics",
          "taskDescription": "Analyze the performance of recent posts.",
          "taskDate": "2025-04-10",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ]

  const admin=[{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }]


  export function setLocalStorage(){
   
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));

  }

  export function getLocalStorage(){
    JSON.parse(localStorage.getItem("employees"));
    JSON.parse(localStorage.getItem("admin"));

    return {employees,admin };
  }