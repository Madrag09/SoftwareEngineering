const express = require('express');
const mysql = require('mysql2'); // Use mysql2 instead of mysql
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Madhav0039', // Replace with your MySQL password
    database: 'airline'
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Route to add a passenger
app.post('/addPassenger', (req, res) => {
    const { surname, name, address, phone } = req.body;
    const query = 'INSERT INTO Passenger (Surname, Name, Address, Phone) VALUES (?, ?, ?, ?)';

    db.query(query, [surname, name, address, phone], (err, result) => {
        if (err) {
            console.error('Error adding passenger:', err);
            res.json({ success: false, message: 'Error adding passenger' });
        } else {
            res.json({ success: true, message: 'Passenger added successfully' });
        }
    });
});

// Route to add a flight
app.post('/addFlight', (req, res) => {
    const { flightnum, origin, dest, date, depTime, arrTime, airplaneNum } = req.body;
    const query = 'INSERT INTO Flight (FlightNum, Origin, Dest, Date, DepTime, ArrTime, AirplaneNum) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [flightnum, origin, dest, date, depTime, arrTime, airplaneNum], (err, result) => {
        if (err) {
            console.error('Error adding flight:', err);
            res.json({ success: false, message: 'Error adding flight' });
        } else {
            res.json({ success: true, message: 'Flight added successfully' });
        }
    });
});

// Route to add staff
app.post('/addStaff', (req, res) => {
    const { empnum, surname, name, address, phone, salary } = req.body;
    const query = 'INSERT INTO Staff (EmpNum, Surname, Name, Address, Phone, Salary) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(query, [empnum, surname, name, address, phone, salary], (err, result) => {
        if (err) {
            console.error('Error adding staff:', err);
            res.json({ success: false, message: 'Error adding staff' });
        } else {
            res.json({ success: true, message: 'Staff added successfully' });
        }
    });
});

// Route to add an airplane
app.post('/addAirplane', (req, res) => {
    const { numser, manufacturer, model } = req.body;
    const query = 'INSERT INTO Airplane (NumSer, Manufacturer, Model) VALUES (?, ?, ?)';

    db.query(query, [numser, manufacturer, model], (err, result) => {
        if (err) {
            console.error('Error adding airplane:', err);
            res.json({ success: false, message: 'Error adding airplane' });
        } else {
            res.json({ success: true, message: 'Airplane added successfully' });
        }
    });
});

// Route to add a city
app.post('/addCity', (req, res) => {
    const { cityName, cityCode } = req.body;
    const query = 'INSERT INTO City (CityName, CityCode) VALUES (?, ?)';

    db.query(query, [cityName, cityCode], (err, result) => {
        if (err) {
            console.error('Error adding city:', err);
            res.json({ success: false, message: 'Error adding city' });
        } else {
            res.json({ success: true, message: 'City added successfully' });
        }
    });
});

// Route for root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});





