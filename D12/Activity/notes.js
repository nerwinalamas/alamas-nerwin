// Categories

"673ddc16b0c079adda1e870a" // Programming
"673ddc16b0c079adda1e870b" // Data Science
"673ddc16b0c079adda1e870c" // Design

// Students

"673ddc3db0c079adda1e8713" // Alice Johnson
"673ddc3db0c079adda1e8714" // Bob Brown
"673ddc3db0c079adda1e8715" // Charlie White

// Instructors

"673ddc2bb0c079adda1e870f" // John Smith
"673ddc2bb0c079adda1e8710" // Jane Doe
 
[
    {
      "title": "Introduction to MongoDB",
      "description": "Learn the basics of MongoDB.",
      "category": ObjectId("673ddc16b0c079adda1e870a"),
      "instructor": ObjectId("673ddc2bb0c079adda1e870f"),
      "students": [ ObjectId("673ddc3db0c079adda1e8713"), ObjectId("673ddc3db0c079adda1e8714") ],
      "reviews": [
        { "rating": 5, "comment": "Great course!", "student": ObjectId("673ddc3db0c079adda1e8713") },
        { "rating": 4, "comment": "Very informative.", "student": ObjectId("673ddc3db0c079adda1e8714") }
      ]
    },
    {
      "title": "Data Science with Python",
      "description": "A comprehensive guide to data science using Python.",
      "category": ObjectId("673ddc16b0c079adda1e870b"),
      "instructor": ObjectId("673ddc2bb0c079adda1e8710"),
      "students": [ ObjectId("673ddc3db0c079adda1e8715") ],
      "reviews": [
        { "rating": 4, "comment": "Good introduction.", "student": ObjectId("673ddc3db0c079adda1e8715") }
      ]
    }
] // not working

// eto dapat hehe
[
    {
      "title": "Introduction to MongoDB",
      "description": "Learn the basics of MongoDB.",
      "category": { "$oid": "673ddc16b0c079adda1e870a" },
      "instructor": { "$oid": "673ddc2bb0c079adda1e870f" },
      "students": [
        { "$oid": "673ddc3db0c079adda1e8713" },
        { "$oid": "673ddc3db0c079adda1e8714" }
      ],
      "reviews": [
        {
          "rating": 5,
          "comment": "Great course!",
          "student": { "$oid": "673ddc3db0c079adda1e8713" }
        },
        {
          "rating": 4,
          "comment": "Very informative.",
          "student": { "$oid": "673ddc3db0c079adda1e8714" }
        }
      ]
    },
    {
      "title": "Data Science with Python",
      "description": "A comprehensive guide to data science using Python.",
      "category": { "$oid": "673ddc16b0c079adda1e870b" },
      "instructor": { "$oid": "673ddc2bb0c079adda1e8710" },
      "students": [
        { "$oid": "673ddc3db0c079adda1e8715" }
      ],
      "reviews": [
        {
          "rating": 4,
          "comment": "Good introduction.",
          "student": { "$oid": "673ddc3db0c079adda1e8715" }
        }
      ]
    }
]
  

const data = [
    {
        _id: ObjectId('673ddf03b0c079adda1e8727'),
        title: 'Introduction to MongoDB',
        description: 'Learn the basics of MongoDB.',
        category: ObjectId('673ddc16b0c079adda1e870a'),
        instructor: ObjectId('673ddc2bb0c079adda1e870f'),
        students: [
          ObjectId('673ddc3db0c079adda1e8713'),
          ObjectId('673ddc3db0c079adda1e8714')
        ],
        reviews: [
          {
            rating: 5,
            comment: 'Great course!',
            student: ObjectId('673ddc3db0c079adda1e8713')
          },
          {
            rating: 4,
            comment: 'Very informative.',
            student: ObjectId('673ddc3db0c079adda1e8714')
          }
        ]
      },
      {
        _id: ObjectId('673ddf03b0c079adda1e8728'),
        title: 'Data Science with Python',
        description: 'A comprehensive guide to data science using Python.',
        category: ObjectId('673ddc16b0c079adda1e870b'),
        instructor: ObjectId('673ddc2bb0c079adda1e8710'),
        students: [
          ObjectId('673ddc3db0c079adda1e8715')
        ],
        reviews: [
          {
            rating: 4,
            comment: 'Good introduction.',
            student: ObjectId('673ddc3db0c079adda1e8715')
          }
        ]
    }
]















