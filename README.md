# Graphql (Apollo Server) Simple Example

run database 

`docker-compose up -d`

> if you are aleady using the mongoDB hosting, you do not need the docker-compose commend line.

copy `ormconfig-example.js` to `ormconfig.js`

settings `ormconfig.js` database information

connect to `http://localhost:4001/graphql`

you can send query

_addUser_

```
mutation {
  addUser(input: {
    username: "firstuser"
  }) {
    _id
    username
  }
}
```

_select user_


```
{
  findOneUserByUsername(username: "firstuser"){
    _id
    username
  }
}
```
