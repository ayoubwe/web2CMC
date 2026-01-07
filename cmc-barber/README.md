# CMC Barber

## Overview
CMC Barber is a web application designed to manage barber services. It provides functionalities to add and retrieve barbers, making it easier for users to find and book appointments with their preferred barbers.

## Features
- Add new barbers to the system.
- Retrieve a list of available barbers.
- Simple and intuitive API for managing barber data.

## Project Structure
```
cmc-barber
├── src
│   ├── index.js               # Entry point of the application
│   ├── controllers            # Contains controller files
│   │   └── barberController.js # Handles barber-related requests
│   ├── routes                 # Contains route definitions
│   │   └── index.js           # Sets up application routes
│   ├── models                 # Contains data models
│   │   └── barber.js          # Defines the Barber model
│   └── utils                  # Utility functions
│       └── db.js              # Database connection and interaction
├── test                       # Contains test files
│   └── index.test.js          # Unit tests for the application
├── .gitignore                 # Specifies files to ignore in Git
├── package.json               # npm configuration file
└── package-lock.json          # Locks the versions of dependencies
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd cmc-barber
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
node src/index.js
```
The server will start and listen for incoming requests.

## Running Tests
To run the tests, use:
```
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.