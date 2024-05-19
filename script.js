document.addEventListener('DOMContentLoaded', () => {
    const airplaneForm = document.getElementById('airplaneForm');
    const flightForm = document.getElementById('flightForm');
    const passengerForm = document.getElementById('passengerForm');
    const staffForm = document.getElementById('staffForm');
    const cityForm = document.getElementById('cityForm');

    airplaneForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const numser = document.getElementById('numser').value;
        const manufacturer = document.getElementById('manufacturer').value;
        const model = document.getElementById('model').value;

        fetch('/addAirplane', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ numser, manufacturer, model }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Airplane added successfully');
            } else {
                alert('Error adding airplane');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    flightForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const flightnum = document.getElementById('flightnum').value;
        const origin = document.getElementById('origin').value;
        const dest = document.getElementById('dest').value;
        const date = document.getElementById('date').value;
        const deptime = document.getElementById('deptime').value;
        const arrtime = document.getElementById('arrtime').value;
        const airplanenum = document.getElementById('airplanenum').value;

        fetch('/addFlight', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ flightnum, origin, dest, date, deptime, arrtime, airplanenum }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Flight added successfully');
            } else {
                alert('Error adding flight');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    passengerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const surname = document.getElementById('surname').value;
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        fetch('/addPassenger', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ surname, name, address, phone }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Passenger added successfully');
            } else {
                alert('Error adding passenger');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    staffForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const empnum = document.getElementById('empnum').value;
        const surname = document.getElementById('staffSurname').value;
        const name = document.getElementById('staffName').value;
        const address = document.getElementById('staffAddress').value;
        const phone = document.getElementById('staffPhone').value;
        const salary = document.getElementById('salary').value;

        fetch('/addStaff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ empnum, surname, name, address, phone, salary }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Staff added successfully');
            } else {
                alert('Error adding staff');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    cityForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cityname = document.getElementById('cityname').value;
        const citycode = document.getElementById('citycode').value;

        fetch('/addCity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cityname, citycode }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('City added successfully');
            } else {
                alert('Error adding city');
            }
        })
        .catch(error => console.error('Error:', error));
    });
});



