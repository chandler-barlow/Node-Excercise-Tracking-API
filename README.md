# Excercise Tracker

This is a node app to track strength training progress. I built it specifically for tracking my own progress at the gym. While I built it for myself, anyone who wants to fork this app and play around with it themselves is more than able to. The whole project is set to run inside Docker containers so setting it up yourself is pretty easy!

### If you want to mess around with the app

Make sure you have the Docker daemon installed on your machine!

### Installing

To  set up the app

Navigate to the folder you downloaded everything to

```
cd <The root folder of the project>
```

Run docker

```
docker-compose up -d
```
or if you want to see the console logs from the server

```
docker-compose up
```

To access it after you start the containers or make requests
Use port 3000.

To make a request use 

```
http://localhost:3000/
```
Or

```
Http://172.0.0.1:3000/
```

There’s a html file with all the endpoint documentation for the api included
Click that to open it and see all the requests
(It’s not finished currently but ill finish it soon)


## Built With

* [Docker](https://www.docker.com/) - Environment management
* [Npm](https://www.npmjs.com/) - Package Management
* [Mysql](https://www.mysql.com/) - Database server
* [Node](https://rometools.github.io/rome/)
* [Express](https://expressjs.com/)

## NPM packages used
* [morgan](https://www.npmjs.com/package/morgan) - Logging
* [mysql](https://www.npmjs.com/package/mysql) - Mysql node drivers

## Authors

* **Chandler Barlow**
