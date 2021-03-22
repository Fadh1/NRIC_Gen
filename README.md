# NRIC Number Generator

A simple application to generate NRIC numbers. This project was created with React and Ant Design Components.

## Installation and Setup

Move into your desired folder and clone this repository.

    git clone https://github.com/Fadh1/NRIC_Gen.git

Move into the client directory.

    cd NRIC_GEN/client

Install the project and it's neccessary dependencies.

    npm install

Start the server.

    npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker

Alternatively, you may also run the docker image of the application.

Get the docker image

    docker pull fad1/nric_gen:first

Run the file in the port

    docker run -d -it  -p 80:80/tcp --name nric_gen fad1/nric_gen:first

With this, we create and run an interactive container in the background. The app will be available at port 80 so we have used the -p option and map the container port to the external host port using 80:80/tcp.

To find the port that the docker is running at you may use

    docker ps

The port used is indicated. The port used for the author's machine was 0.0.0.0:80.
