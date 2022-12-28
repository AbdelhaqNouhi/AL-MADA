## AL-MADA-DBM

Le plus grands fonds d'investissements à capitaux privés de la scène panafricaine AL MADA procéde la digitalisation par la programmation d'un système de gestion de base de données.

Crée un environnement d’exécution des requêtes avec les données de la base passant par des API.
Facilite l'intégrations des traitements sur les données dans une transaction.


## Tech Stack in
<!-- **Client:** React, TailwindCSS -->

 **Node-Js**, **Express**, **GraphQL server**, **Docker** **Mongo DB**

## Performance Criteria

### ETL Extract-transform-load d'une base de donnees use mongoimport from mongo:

```bash
mongoimport --host <hostname>:<port> -u <username> -p <password> --db <database> --collection <collection> --type csv --file <filename> --fields <field1>,<field2>,<field3>
```

if it throw error for authentication !! 
try this --authenticationDatabase admin

```bash
mongoimport --host <hostname>:<port> -u <username> -p <password>  --authenticationDatabase admin --db <database> --collection <collection> --type csv --file <filename> --fields <field1>,<field2>,<field3>
```

### Docker 
is a tool that allows you to easily package, deploy, and manage applications and their dependencies in containers. Containers are lightweight, standalone, and executable packages that contain everything an application needs to run, including the application code, system tools, libraries, and runtime.


## How to run the project

Clone the project

```bash
  git clone
```

Install dependencies

```bash
  npm install
```

Run the project

for your machine in port 3000 run
```bash
  npm run dev
```

for your docker container in port 4000 run 
```bash
 docker compose up -d
```

## Endpoints

| Method    | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `http://localhost:4000/api/signup` | **SignUp** |
| `POST` | `http://localhost:4000/api/signin` | **SignIn**|
| `GET` | `http://localhost:4000/Api/GetAllEmployee` | **GetAllEmployee**|
| `POST` | `http://localhost:4000/Api/CreateEmployee` | **CreateEmployee**|
| `PUT` | `http://localhost:4000/api/UpdateEmployee/:id` | **UpdateEmployee**|
| `DELETE` | `http://localhost:4000/api/DeleteEmployee/:id` | **DeleteEmployee**|


## Authors

- [@Abdelhaq Nouhi](https://github.com/AbdelhaqNouhi)


#### It still bieng implemented ...