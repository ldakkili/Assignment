

  

  

  

  

  

# spectrum-backend

  

  

  

  

  

## Steps

  

  

  

  

1. clone app

  

  

  

  

2. Install dependencies (cd into-the-app && npm i)

  

  

  

3. Update the environment variables in .env file at the root of the project

  

  

  

  

  

## Available Scripts

  

  

  

  

  

  

In the project directory, you can run:

  

  

  

  

  

  

### `npm run dev`

  

  

  

  

  

Server is listening on localhost:port/api/v1

  

  

  

  

  

port can be defined in the config file

  

  

  

### `npm run test`

  

  

  

  

  

Uses jest to run unit test cases

  

  

  

## Environment variables

  

  

Environment variables are in the .env file. Edit  values with correct db username, password etc

  

  

Example env:

    NODE_ENV=development
	DB_CONNECTION='postgresql://postgresUsername:postgrespassword@localhost/dbName'

  

## Database setup

  

  

1. run `npm run migrate` . This will autogenerate all tables needed for this application

  

2. run `npm run seed` . This will fill tables with seed data

  

  

**Note**: These steps are one time work

  ## Available endpoints
  

 1. http://localhost:3000/api/v1/shows
 2. http://localhost:3000/api/v1/packages
