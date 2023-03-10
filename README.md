# AUTOPARC BACKEND

![My Image](logo/logo.png)

A school project for Ynov Toulouse.

## Table of Contents

- [About](#about)
    - [Features](#features)
    - [Models](#models)
    - [Built with](#built-with)
- [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Using](#using)
- [Testing](#testing)
- [Guidelines](#guidelines)
- [Contributors](#contributors)

## About

To validate the Master 2 degree, we have to develop a project during the year. This project is in 3 tiers architecture.
### Features

- Connection
- List of cars
- List of users
- List of OM (mission order)
- See car informations
- Create, update car
- See user informations
- Create, update user
- See OM informations
- Create, update OM
- Assign user to OM
- Filter element in user/car/om table
- See parcs
- Create, update parc
- Notifications

### Models

- User
  - id (number unique of the user)
  - firstname
  - username
  - email
  - password
  - role
- Car
  - id
  - color
  - brand
  - VIN
  - state
  - attrition
  - model
- OM
  - id
  - type
  - state
  - idCar
  - startZone
  - endingZone
  - idUser
  - date
  - idParc
  - description

### Built with

- [Nest.js](https://nestjs.com/)
    - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [MongoDB](https://www.mongodb.com/)
    - A popular NoSQL database program.

## Getting started

### Prerequisites

1. [Install Node.js](https://nodejs.org/en/download/)

### Installation

Request access to an administrator for the Auto Parc organization and the BTV project

1. Clone the repository:

``
git clone https://gitlab.com/eBouttier/autoparc_back.git
``

2. Install dependencies:

``
npm install
``

## Using

1. Init the database:

Create an .env file in the back project and add the variables that have been defined in the .env.example

2. Start the server:

Enter the autoparc_back folder by following the command: 

``
cd ./autoparc_back
``

Start the project by following the command:

``
npm run start:dev
``

Use the link to use the api on a browser or on Postman : 

``
http://localhost:3000/api
``


## Testing

Run E2E tests:

unit tests:

``
npm run test
``

e2e tests:

``
npm run test:e2e
``

test coverage:

``
npm run test:cov
``

## Guidelines

We adopted guidelines.
See [GUIDELINES.md](GUIDELINES.md) for more information.

## Contributors

- Elysa BOUTTIER
- Julie CELLI
- Ambasse DJABIRI
- Thomas LE BIHAN
- Brucie Francelle LEKEDJI ZAHOUN
