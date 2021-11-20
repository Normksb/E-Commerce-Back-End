# E Commerce Backend
 
  
  ![Screenshot](https://github.com/Normksb/E-Commerce-Back-End/blob/main/images/screenshot.png)
  
[Here is a link to the gitHub repo](https://github.com/Normksb/E-Commerce-Back-End)  

![AUR license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)

## Description
This application is a node/express server backend that provides functionality required for an E Commerce platform. It acts as a RESTful API with a mysql database.


---
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Technologies](#technologies)
- [Questions](#questions)

---
## Installation  
  
Please follow these steps to install the project and any dependancies locally.

```bash
install node.js
clone the repo from gitHub
npm install
 
```

In order to run the app you will need to configure the following environment variables (dotenv is included in the package dependencies for this purpose);

for MYSQL
- DB_NAME  // database name
- DB_HOST  // network address/hostname of MYSQL server
- DB_USER  // MYSQL username
- DB_PASS  // MYSQL password

Once you have configured your environment variables you may create database seed data using the following;

```bash
npm run seed
 
```

---
## Usage

 
To start the express server please use the start script already found in the package.json as follows;

```bash
npm start
```


---
## License

This project is licensed under ![AUR license](https://img.shields.io/static/v1?label=License&message=MIT&color=blue)

---
## Contributing

Contributing to this project is not currently available.


---

## Technologies


- Node JS
- Express JS
- MySQL
- Sequelize

---

## Questions

For any questions/support please contact Norman Bernard.  
- Email: nksb414@gmail.com
- Github: [Norman Bernard](https://github.com/Normksb)
