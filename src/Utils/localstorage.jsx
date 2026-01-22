

const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile the weekly sales data and generate a summary report.",
        "date": "2025-11-22",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Client Records",
        "description": "Update CRM with the latest client contact information.",
        "date": "2025-11-20",
        "category": "Data Entry",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend weekly team meeting and discuss progress.",
        "date": "2025-11-18",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Rohit",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Design Homepage Banner",
        "description": "Create a new promotional banner for the homepage.",
        "date": "2025-11-21",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Navbar Bug",
        "description": "Resolve the navigation bar alignment issue in mobile view.",
        "date": "2025-11-19",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Review PR #142",
        "description": "Code review for the latest feature update.",
        "date": "2025-11-18",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Update UI Icons",
        "description": "Replace outdated icons with new modern icons.",
        "date": "2025-11-15",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Client Onboarding",
        "description": "Assist with onboarding a new enterprise client.",
        "date": "2025-11-22",
        "category": "Client Support",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Training Material",
        "description": "Create documentation for new hires.",
        "date": "2025-11-19",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Respond to Tickets",
        "description": "Clear remaining customer support tickets.",
        "date": "2025-11-18",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Sandeep",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 3,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Optimize Database",
        "description": "Improve query performance for analytics dashboard.",
        "date": "2025-11-20",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Backup System",
        "description": "Perform weekly backup and verify file integrity.",
        "date": "2025-11-17",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix API Timeout",
        "description": "Investigate timeout issue on orders API endpoint.",
        "date": "2025-11-15",
        "category": "Backend",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Update Environment Variables",
        "description": "Add new payment gateway configuration.",
        "date": "2025-11-14",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Security Scan",
        "description": "Run vulnerability scan and report findings.",
        "date": "2025-11-12",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Write Blog Post",
        "description": "Write a new tech blog article for the company's website.",
        "date": "2025-11-22",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Update",
        "description": "Schedule social media posts for the week.",
        "date": "2025-11-19",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Keyword Research",
        "description": "Analyze SEO keywords for upcoming articles.",
        "date": "2025-11-17",
        "category": "SEO",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setlocalstorage = ()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getlocalstorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin')) 
  
return {employees,admin}
   
}
