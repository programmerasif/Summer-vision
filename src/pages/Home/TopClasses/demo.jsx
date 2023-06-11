[
  {
    "email": "lionelscaloni@gmail.com",
    "image": "https://i.ibb.co/pQwppH3/football.jpg",
    "name": "Lionel Scaloni",
    "category": "Football",
    "duration": "2",
    "studentNumber": 31,
    "type": "Outdoor Game"
  },
  {
    "email": "jamiesiddons@gmail.com",
    "image": "https://i.ibb.co/PhyvJZV/0073240-0073240-cricket.jpg",
    "name": "Jamie Siddons",
    "category": "Cricket",
    "duration": "2.5",
    "studentNumber": 11,
    "type": "Outdoor Game"
  },
  { "email": "patrickmouratoglou@gmail.com",
    "image": "https://i.ibb.co/7V4vhjK/cricket.jpg",
    "name": "Patrick Mouratoglou",
    "category": "Tennis",
    "duration": "1",
    "studentNumber": 22,
    "type": "Outdoor Game"
  },
  {
    "email": "lukecalcatera@gmail.com",
    "image": "https://i.ibb.co/QvfVbQ6/golf.jpg",
    "name": "Luke Calcatera ",
    "category": "Golf",
    "duration": "2",
    "studentNumber": 17,
    "type": "Outdoor Game"
  },
  {
    "email": "sanantonio@gmail.com",
    "image": "https://i.ibb.co/mvyVs7q/basketball.jpg",
    "name": "San Antonio",
    "category": "Basketball",
    "studentNumber": 37,
    "type": "Outdoor Game"
  },
  { 
    "email": "jasonmitchell@gmail.com",
    "image": "https://i.ibb.co/Kmbw9ZG/swiming.webp",
    "name": "Jason Mitchell",
    "category": "Swimming",
    "duration": "1",
    "studentNumber": 35,
    "type": "IndoorGame"
  }
  ,
  { 
    "email": "ryanjohnson@gmail.com",
    "image": "https://i.ibb.co/sCC3bX0/Volleyball.jpg",
    "name": "Ryan Johnson",
    "category": "volleyball",
    "duration": "1",
    "studentNumber": 27,
    "type": "Indoor Game"
  }
  ,
  { 
    "email": "michaelturner@gmail.com",
    "image": "https://i.ibb.co/vd1pmKd/boxing.jpg",
    "name": "Michael Turner",
    "category": "Boxing",
    "duration": "1",
    "studentNumber": 33,
    "type": "Indoor Game"
  }
  ,
  { 
    "email": "davidrodriguez@gmail.com",
    "image": "https://i.ibb.co/p1nSNQw/bassbal.webp",
    "name": "David Rodriguez",
    "category": " baseball ",
    "duration": "1",
    "studentNumber": 30,
    "type": "Indoor Game"
  }
]



[
  {
    "image": "image1.jpg",
    "name": "Soccer Training",
    "TrainerName": "John Doe",
    "email": "john.doe@example.com",
    "AvailableSeats": 10,
    "Price": 99.99,
    "approve" : "ok"
  },
  {
    "image": "https://i.ibb.co/mvyVs7q/basketball.jpg",
    "name": "Basketball",
    "TrainerName": "San Antonio",
    "email": "sanantonio@gmail.com",
    "AvailableSeats": 8,
    "Price": 79.99,
    "approve" : "ok"
  },
  {
    "image": "https://i.ibb.co/7V4vhjK/cricket.jpg",
    "Name": "Tennis",
    "TrainerName": "Patrick Mouratoglou",
    "email": "mike.johnson@example.com",
    "AvailableSeats": 6,
    "Price": 59.99,
    "approve" : "ok"
  },
  {
    "image": "https://i.ibb.co/QvfVbQ6/golf.jpg",
    "Name": "Golf",
    "TrainerName": "Luke Calcatera ",
    "email": "lukecalcatera@example.com",
    "AvailableSeats": 12,
    "Price": 129.99,
    "approve" : "ok"
  },
  {
    "image": "https://i.ibb.co/Kmbw9ZG/swiming.webp",
    "Name": "Swimming ",
    "TrainerName": "Jason Mitchell",
    "email": "jasonmitchell@example.com",
    "AvailableSeats": 5,
    "Price": 89.9,
    "approve" : "not-ok"
  },
  {
    "image": "https://i.ibb.co/p1nSNQw/bassbal.webp",
    "Name": "Baseball",
    "TrainerName": "Daniel Wilson",
    "email": "davidrodriguez@gmail.com",
    "AvailableSeats": 15,
    "Price": 109.99,
    "approve" : "ok"
  },
  {
    "image": "https://i.ibb.co/sCC3bX0/Volleyball.jpg",
    "Name": "Volleyball",
    "TrainerName": "Sarah Mitchell",
    "email": "sarah.mitchell@example.com",
    "AvailableSeats": 10,
    "Price": 89.99,
    "approve" : "ok"
  },
  {
    "image": "https://i.ibb.co/vd1pmKd/boxing.jpg",
    "Name": "Boxing ",
    "TrainerName": "James Anderson",
    "email": "james.anderson@example.com",
    "AvailableSeats": 8,
    "Price": 79.99,
    "approve" : "not-ok"
  },
  {
    "Image": "image9.jpg",
    "Name": "Rugby ",
    "TrainerName": "Matthew Roberts",
    "InstructorEmail": "matthew.roberts@example.com",
    "AvailableSeats": 10,
    "Price": 99.99,
    "approve" : "ok"
  },
  {
    "Image": "image10.jpg",
    "Name": "Athletic ",
    "TrainerName": "Alex Turner",
    "InstructorEmail": "alex.turner@example.com",
    "AvailableSeats": 12,
    "Price": 119.99,
    "approve" : "ok"

  }
]




  // sending all users data into data base
  const person = { name: user?.displayName, email: user?.email }
  fetch(`http://localhost:5000/all-user`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(person)
})
.then(res => res.json())





<form  onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>









