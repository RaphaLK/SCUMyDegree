const majors = [
    {
        "school": "College of Arts and Sciences",
        "majors": [
            {
                "name": "Ancient Studies",
                "url": "https://www.scu.edu/cas/classics/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Anthropology",
                "url": "https://www.scu.edu/cas/anthropology/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Art History",
                "url": "https://www.scu.edu/cas/art/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Biochemistry",
                "url": "https://www.scu.edu/cas/chemistry/",
                "science": true,
                "relevant_minors": ["Biotechnology"]
            },
            {
                "name": "Biology",
                "url": "https://www.scu.edu/cas/biology/",
                "science": true,
                "relevant_minors": ["Biotechnology"]
            },
            {
                "name": "Chemistry",
                "url": "https://www.scu.edu/cas/chemistry/",
                "science": true,
                "relevant_minors": ["Biotechnology"]
            },
            {
                "name": "Child Studies",
                "url": "https://www.scu.edu/cas/child-studies/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Classical Studies",
                "url": "https://www.scu.edu/cas/classics/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Communication",
                "url": "https://www.scu.edu/cas/communication/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Computer Science",
                "url": "https://www.scu.edu/cas/mathcs/academic-program/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Economics",
                "url": "https://www.scu.edu/business/economics/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Engineering Physics",
                "url": "https://www.scu.edu/cas/physics/academic-program/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "English",
                "url": "https://www.scu.edu/cas/english/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Environmental Studies and Sciences",
                "url": "https://www.scu.edu/cas/ess/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Ethnic Studies",
                "url": "https://www.scu.edu/cas/ethnic-studies/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Greek Language and Literature",
                "url": "https://www.scu.edu/cas/classics/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "History",
                "url": "https://www.scu.edu/cas/history/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Individual Studies",
                "url": "https://www.scu.edu/cas/individual-studies/",
                "science": null,
                "relevant_minors": []
            },
            {
                "name": "Latin and Greek",
                "url": "https://www.scu.edu/cas/classics/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Latin Language and Literature",
                "url": "https://www.scu.edu/cas/classics/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Mathematics",
                "url": "https://www.scu.edu/cas/mathcs/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Military Science",
                "url": "https://www.scu.edu/cas/military-science/",
                "science": null,
                "relevant_minors": []
            },
            {
                "name": "Modern Languages and Literatures",
                "url": "https://www.scu.edu/cas/modernlanguages/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Arabic",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/arabic/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Chinese",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/chinese/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "French",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/french/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "German",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/german/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Italian",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/italian/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Japanese",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/japanese/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Spanish",
                "url": "https://www.scu.edu/cas/modernlanguages/academic-programs/spanish/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Music",
                "url": "https://www.scu.edu/cas/music/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Neuroscience",
                "url": "https://www.scu.edu/cas/neuroscience/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Philosophy",
                "url": "https://www.scu.edu/cas/philosophy/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Physics",
                "url": "https://www.scu.edu/cas/physics/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Political Science",
                "url": "https://www.scu.edu/cas/political-science/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Psychology",
                "url": "https://www.scu.edu/cas/psychology/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Public Health Science",
                "url": "https://www.scu.edu/cas/public-health/",
                "science": true,
                "relevant_minors": ["Biotechnology"]
            },
            {
                "name": "Religious Studies",
                "url": "https://www.scu.edu/cas/religious-studies/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Sociology",
                "url": "https://www.scu.edu/cas/sociology/",
                "science": true,
                "relevant_minors": []
            },
            {
                "name": "Studio Art",
                "url": "https://www.scu.edu/cas/art/academic-programs/studio-art.html",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Theatre and Dance",
                "url": "https://www.scu.edu/theatre/",
                "science": false,
                "relevant_minors": []
            },
            {
                "name": "Women's and Gender Studies",
                "url": "https://www.scu.edu/cas/wgst/",
                "science": true,
                "relevant_minors": []
            }
        ]
    },
    {
        "school": "School of Engineering",
        "majors": [
            {
                "name": "Bioengineering",
                "url": "https://www.scu.edu/engineering/academic-programs/department-of-bioengineering/"
            },
            {
                "name": "Civil, Environmental, and Sustainable Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/engineering/ce/"
            },
            {
                "name": "Computer Science and Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/department-of-computer-engineering/"
            },
            {
                "name": "Electrical Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/department-of-electrical-engineering/"
            },
            {
                "name": "Electrical and Computer Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/department-of-electrical-engineering/"
            },
            {
                "name": "General Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/general-engineering/"
            },
            {
                "name": "Mechanical Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/department-of-mechanical-engineering/"
            },
            {
                "name": "Web Design and Engineering",
                "url": "https://www.scu.edu/engineering/academic-programs/department-of-computer-engineering/"
            }
        ]
    },
    {
        "school": "Leavey School of Business",
        "majors": [
            {
                "name": "Accounting",
                "url": "https://www.scu.edu/business/accounting"
            },
            {
                "name": "Accounting & Information Systems",
                "url": "https://www.scu.edu/business/accounting/academics/"
            },
            {
                "name": "Economics",
                "url": "https://www.scu.edu/business/economics/"
            },
            {
                "name": "Finance",
                "url": "https://www.scu.edu/business/finance/"
            },
            {
                "name": "Individual Studies",
                "url": "https://www.scu.edu/business/undergraduates/individual-studies-major/"
            },
            {
                "name": "Management Information Systems",
                "url": "https://www.scu.edu/business/isa/"
            },
            {
                "name": "Management & Entrepreneurship",
                "url": "https://www.scu.edu/business/management/"
            },
            {
                "name": "Marketing",
                "url": "https://www.scu.edu/business/marketing/"
            }
        ]
    }
]

export default majors;