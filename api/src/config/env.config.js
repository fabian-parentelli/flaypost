import { loadEnvFile } from "process";

loadEnvFile();

export default {
    port: process.env.PORT,
    BackUrl: process.env.BACK_URL,
    mongoDB: process.env.MONGO,
    environment: process.env.ENVIRONMENT,
    userNodemailer: process.env.USERNODEMAILER,
    passNodemailer: process.env.PASSNODEMAILER,
};