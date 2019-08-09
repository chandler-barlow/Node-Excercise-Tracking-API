# Excercise Tracker

This is a node app to track strength training progress. I built it specifically for tracking my own progress at the gym but it's a pretty general api setup. Feel free to fork and add to the app. If you download a copy and want to run it the whole project is set to run inside Docker containers! Getting it to run on your machine should be pretty easy!

### If you want to mess around with the app

Make sure you have the Docker daemon installed on your machine!

### Installing

To set up the environment

Navigate to the folder you downloaded everything to

```
cd <The root folder of the project>
```

Run docker

```
docker-compose up -d
```
or if you want to see the console logs from the server ( The server logs all requests to console with morgan so the logs are pretty informative)

```
docker-compose up
```

The only exposed port is 3000, if you want to change the port check the dockerfile documentation included.

To make a request use 

```
http://localhost:3000/
```
Or

```
Http://172.0.0.1:3000/
```

There’s a html file with all the endpoint documentation for the api included in the documentation folder.
Click that to open it in your browser and see all the request endpoints.
<br/>~(It’s not finished currently but ill finish it soon)~
<br/> The api documentation is finished for the current endpoints!


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
