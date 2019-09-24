module.exports = {
  type: "mongodb",
  host: "localhost",
  port: 27017,
  username: "username",
  password: "password",
  database: "database",
  synchronize: true,
  logging: false,
  useUnifiedTopology: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  useNewUrlParser: true
};
