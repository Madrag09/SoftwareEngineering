-- Drop the database if it exists to start fresh
DROP DATABASE IF EXISTS airline;

-- Create the database
CREATE DATABASE airline;
USE airline;

-- Table for Passengers
CREATE TABLE IF NOT EXISTS Passenger (
    PassengerID INT AUTO_INCREMENT PRIMARY KEY,
    Surname VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(20) NOT NULL
);

-- Table for Airplanes
CREATE TABLE IF NOT EXISTS Airplane (
    NumSer INT PRIMARY KEY,
    Manufacturer VARCHAR(255) NOT NULL,
    Model VARCHAR(255) NOT NULL
);

-- Table for Flights
CREATE TABLE IF NOT EXISTS Flight (
    FlightID INT AUTO_INCREMENT PRIMARY KEY,
    FlightNum VARCHAR(20) NOT NULL,
    Origin VARCHAR(255) NOT NULL,
    Dest VARCHAR(255) NOT NULL,
    Date DATE NOT NULL,
    DepTime TIME NOT NULL,
    ArrTime TIME NOT NULL,
    AirplaneNum INT NOT NULL,
    FOREIGN KEY (AirplaneNum) REFERENCES Airplane(NumSer)
);

-- Table for Staff
CREATE TABLE IF NOT EXISTS Staff (
    StaffID INT AUTO_INCREMENT PRIMARY KEY,
    EmpNum VARCHAR(20) NOT NULL,
    Surname VARCHAR(255) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    Salary DECIMAL(10, 2) NOT NULL
);

-- Table for Cities
CREATE TABLE IF NOT EXISTS City (
    CityID INT AUTO_INCREMENT PRIMARY KEY,
    CityName VARCHAR(255) NOT NULL,
    CityCode VARCHAR(10) NOT NULL
);

-- Table to manage Flight-City relationships (Intermediate Stops)
CREATE TABLE IF NOT EXISTS FlightCity (
    FlightCityID INT AUTO_INCREMENT PRIMARY KEY,
    FlightID INT NOT NULL,
    CityID INT NOT NULL,
    StopOrder INT NOT NULL,
    FOREIGN KEY (FlightID) REFERENCES Flight(FlightID),
    FOREIGN KEY (CityID) REFERENCES City(CityID)
);

-- Table to manage Flight-Passenger relationships
CREATE TABLE IF NOT EXISTS FlightPassenger (
    FlightPassengerID INT AUTO_INCREMENT PRIMARY KEY,
    FlightID INT NOT NULL,
    PassengerID INT NOT NULL,
    FOREIGN KEY (FlightID) REFERENCES Flight(FlightID),
    FOREIGN KEY (PassengerID) REFERENCES Passenger(PassengerID)
);

-- Table to manage Flight-Staff relationships
CREATE TABLE IF NOT EXISTS FlightStaff (
    FlightStaffID INT AUTO_INCREMENT PRIMARY KEY,
    FlightID INT NOT NULL,
    StaffID INT NOT NULL,
    FOREIGN KEY (FlightID) REFERENCES Flight(FlightID),
    FOREIGN KEY (StaffID) REFERENCES Staff(StaffID)
);

ALTER TABLE Flight MODIFY COLUMN DepTime TIME DEFAULT NULL;

ALTER TABLE Flight MODIFY COLUMN ArrTime TIME DEFAULT NULL;

ALTER TABLE Flight MODIFY COLUMN AirplaneNum INT DEFAULT NULL;

ALTER TABLE City MODIFY COLUMN CityName VARCHAR(255) DEFAULT NULL;

ALTER TABLE City MODIFY COLUMN CityCode VARCHAR(255) DEFAULT NULL;




