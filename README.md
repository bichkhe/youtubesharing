# Youtube Sharing

# Introduction 
This is a mini project for sharing youtube video.

Some key features:
- Authentication
    + Login by Email (OAuth comming soon)
    + Register by email (OAuth comming soon)
- Sharing a youtube video 
- Vote a youtube video

# Prerequisites

Make sure you have a node and yarn,npm with at least version below
NodeJS: version >= v16.14.0
Yarn: ^1.22.18
npm: ^8.3.1

# Installation & Configuration

## Frontend
Run command

Step 1: Install libraries
```bash
yarn 
```


Step 2: Setup server url: you have to make sure a .env created in root directory (the same level with package.json)
with `VITE_BASE_URL` pointing to BE side

```yaml
VITE_BASE_URL=http://192.168.0.10:9800
```


Step 3: Run 
Run 
```bash 
yarn dev
```

## Backend 
Step 1: Install 
```bash
yarn 
```

```bash
yarn dev 
```
A process will be listening aa port `9800`

# Database Setup

We use `postgresl` as sql database 

Step 1: Setup database url 
Create a postgresql database name `youtubesharing` like that


```sql
ALTER USER `youtubesharing` CREATEDB;
GRANT ALL ON schema public TO `youtubesharing`; 
```  

Step 2:  Create a .env and configure `DATABASE_URL` 

For example:
```yaml
DATABASE_URL="<postgresql://youtubesharing:youtubesharing2023@localhost:5432/youtubesharing>"
```

Step 3: Run migration

Go to the root of backend repository and run command 
```bash
npx prisma migrate dev
```

Step 4: Start backend 
```yarn dev```

# Running the Application
Run command and go to browser and pase `http://localhost:5173
```yarn dev```


# Docker 
In this Dockerfile:
1. We start with the official `Node.js 16 Alpine` image as the base image.
2. We set the working directory to `/app` in the container.
3. We copy the `package.json` and `package-lock.json` files to the container.
4. We run `npm install` or `yarn` to install the dependencies.
5. We copy the entire application code to the container.
6. We build the React app using `yarn build`.
7. We expose port `5173`, which is the default port for a React app.
8. We specify the command to start the application using `CMD ["yarn", "dev"]`.

To build the Docker image, navigate to the directory where the Dockerfile is located and run the following command:
```bash
docker build -t your-image-name .
```

Run it
```bash
docker run -p 5173:5173 your-image-name
```
Replace your-image-name with the name of the Docker image you built.

Result like that
```bash
(base) root@sm-ubuntu-srv-ip36:~/nil9/remi/youtubesharing# docker run -p 5173:5173 youtubesharing:latest
yarn run v1.22.19
$ vite

  VITE v4.4.11  ready in 401 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
# Usage
Some features need to be implementd in the future
- Register and Login use OAuth - Go
- Search video by title or user
- Category for youtube videos
- Filter the top voted youtube videos
- When clicking play another video, stop playing current video
- Notify to all user when sharing
- Add transcription for video
- To name of fews..

# Troubleshooting

- Version of nodejs, npm, yarn does not sastify `prerequisites`
- Make sure `.env` created 