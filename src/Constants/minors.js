const minors = [
    {
        "school": "College of Arts and Sciences",
        "minors": [
            {
                "name": "African American Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Anthropology",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Arabic, Islamic, and Middle Eastern Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Anthropology", "Art History", "Ethnic Studies", "History", "Modern Languages and Literatures", "Political Science", "Religious Studies"]
            },
            {
                "name": "Art History",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Asian American Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Asian Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": []
            },
            {
                "name": "Biology",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Biotechnology",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Biochemistry", "Biology", "Chemistry"]
            },
            {
                "name": "Catholic Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": []
            },
            {
                "name": "Chemistry",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Classics",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Communication",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Computer Science",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Creative Writing",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Dance",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Economics",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "English",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Ethnic Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Environmental Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "French and Francophone Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Gerontology",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Anthropology", "Psychology", "Public Health Science"],
                "interdiscipline_limit": 2
            },
            {
                "name": "History",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Italian Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "International Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Anthropology", "Communications", "Economics", "English", "Music", "Political Science", "Sociology"]
            },
            {
                "name": "Japanese Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Latin American Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Anthropology", "Art History", "English", "Environmental Science", "History", "Modern Languages and Literatures", "Political Science", "Public Health Science", "Religious Studies", "Sociology"]
            },
            {
                "name": "Latina/o/x Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Mathematics",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Medieval and Renaissance Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Anthropology", "Art History", "Classical Studies", "English", "History", "Modern Languages and Literatures", "Music", "Philosophy", "Political Science", "Public Health Science", "Religious Studies", "Sociology", "Theatre", "Women's and Gender Studies"]
            },
            {
                "name": "Music",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Musical Theatre",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Dance", "Music", "Theatre"]
            },
            {
                "name": "Philosophy",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Physics",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Political Science",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Professional Writing",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Public Health",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Religious Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Sociology",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Spanish Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Studio Art",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Sustainability",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Accounting", "Biology", "Civil, Environmental, and Sustainable Engineering", "Chemistry", "Communications", "Economics", "Engineering", "Environmental Science", "Management Information Systems", "Management & Entrepreneurship", "Mechanical Engineering", "Philosophy", "Physics", "Political Science", "Religious Studies"]
            },
            {
                "name": "Theatre",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Theatre Design and Technology",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Urban Education",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Child Studies", "English", "Environmental Science", "Ethnic Studies", "History", "Political Science", "Psychology", "Public Health Science", "Sociology"]
            },
            {
                "name": "Women's and Gender Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            }
        ]
    },
    {
        "school": "School of Engineering",
        "minors": [
            {
                "name": "Aerospace Engineering",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Bioengineering",
                "schools": ["School of Engineering", "science"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Computer Science and Engineering",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Construction Management",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Electrical Engineering",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Electrical and Computer Engineering",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Computer Science and Engineering", "Electrical Engineering"]
            },
            {
                "name": "Engineering",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Bioengineering", "Civil, Environmental, and Sustainable Engineering", "Computer Science and Engineering", "Electrical Engineering", "Mechanical Engineering"]
            },
            {
                "name": "Healthcare Innovation and Design",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Mechanical Engineering",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Technical Innovation, Design Thinking, and the Entrepreneurial Mindset",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            }
        ]
    },
    {
        "school": "Leavey School of Business",
        "minors": [
            {
                "name": "Business Analytics",
                "schools": ["Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Economics",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Entrepreneurship",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Economics", "Environmental Science", "Finance", "Mechanical Engineering", "Management & Entrepreneurship", "Marketing", "Public Health Science", "Sociology"]
            },
            {
                "name": "International Business",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Accounting", "Economics", "Environmental Science", "Finance", "History", "Management & Entrepreneurship", "Marketing", "Political Science", "Psychology", "Sociology"]
            },
            {
                "name": "Marketing",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Management Information Systems",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Real Estate",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": false,
                "interdisciplinary_majors": []
            },
            {
                "name": "Retail Studies",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Accounting", "Communications", "Management Information Systems", "Marketing", "Psychology", "Sociology"]
            },
            {
                "name": "Sustainable Food Systems",
                "schools": ["College of Arts and Sciences", "School of Engineering", "Leavey School of Business"],
                "interdisciplinary": true,
                "interdisciplinary_majors": ["Anthropology", "Biology", "Civil, Environmental, and Sustainable Engineering", "Environmental Science", "Management & Entrepreneurship", "Marketing", "Political Science", "Public Health Science", "Sociology"]
            }
        ]
    }
];

export default minors;