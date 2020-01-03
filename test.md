# RestoPayServer [![time tracker](https://wakatime.com/badge/github/guillaumedeplancke/GIP-NodeAPI.svg)](https://wakatime.com/badge/github/guillaumedeplancke/GIP-NodeAPI)

This a Node.js API which will do all communication with a mysql database for my meal registration system intended as my secondary school thesis.

## Contents

1. [Dependencies](#dependencies)
    1. [Development](#development)
2. [API Endpoints](#endpoints)
    1. [Student](#student)
    1. [Profile](#profile)
    1. [Meal](#meal)
3. [Commands](#commands)
    1. [Example](#command_example)
    1. [Commands list](#command_list)

## Dependencies

[express](https://www.npmjs.com/package/express) - A fast and minimalistic web framework for node

[sequelize](https://www.npmjs.com/package/sequelize) - A Node.js ORM for database systems like MySQL, MariaDB, SQLite, ...

[body-parser](https://www.npmjs.com/package/body-parser) - Parsing request body's with a simple property

[commander](https://www.npmjs.com/package/commander) - CLI command parsing for Node.js

[inquirer](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces

[jimp](https://www.npmjs.com/package/jimp) - Javascript image manipulation program. Example: resizing images

[moment](https://www.npmjs.com/package/moment) - A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

[mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance.

[mariadb](https://www.npmjs.com/package/mariadb) - MariaDB Node.js connector

[morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js


### Development:
[nodemon](https://www.npmjs.com/package/nodemon) - A development tool for automatically restarting the node app when changing files.

## <a name="endpoints"></a>API endpoints

### Student:
| Type | Endpoint        | Description              |
|------|-----------------|--------------------------|
| GET  | /student        | Fetch a student from UID |
| POST | /student/create | Craete a new student     |


### Profile:
| Type | Endpoint              | Description                   |
|------|-----------------------|-------------------------------|
| GET  | /profile              | Fetch a profile from id       |
| POST | /profile/create       | Create a new profile          |
| GET  | /profile/latestmeal   | Fetch latest meal for profile |
| POST | /profile/registermeal | Register a new meal           |

### Meal:
| Type | Endpoint      | Description                      |
|------|---------------|----------------------------------|
| GET  | /meal         | Fetch an already registered meal |
| GET  | /meal/types   | Fetch all available meal types   |
| GET  | /meal/type    | Fetch a specific meal type       |
| POST | /meal/create  | Create a new meal type           |

## Commands

To perform specific actions like creating the database structure, it's handy to have a command which does the work. This command can simply be ran from the console with a CLI command.

#### <a name="command_example"></a>Example: `node app.js database-synchronize`

⚠️ NOTE: The commands listed below can only be performed with the app.js file. They won't work with other files in the project.

### <a name="command_list"></a>Commands list:
| Command              | Description                                                  |
|----------------------|--------------------------------------------------------------|
| resize-check         | Check if there are images which need to be resized           |
| resize-stats         | Show all image stats                                         |
| resize-now           | Resize all images which aren't yet resized                   |
| resize-clean         | Remove all resized images and resize all available images    |
| database-synchronize | Create all database tables with the corresponding structure. |
| database-seed        | Put some data in the database for testing purposes.          |
