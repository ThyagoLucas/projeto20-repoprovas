import supertest from "supertest";
import app from "../src/app.js";
import dotenv from 'dotenv'
import prisma from "../src/configs/database/database.js";

dotenv.config()

console.log(`dot env:${process.env.DATABASE_URL}`);

const EMAIL = "thyaclgo@gmail.com";
const PASSWORD = "12345";
const PASSWORDCONF = "12345";
let TOKEN = '';
const login = {email:EMAIL, password:PASSWORD};
const userCreate = { email:EMAIL, password:PASSWORD, passwordConfirmation:PASSWORDCONF}

beforeEach(async () => {
    await prisma.$queryRaw`DELETE FROM sessions`
    await prisma.$queryRaw`DELETE FROM users`
})

describe("User test suit", () => {

    it("given datas, create user", async () => {
        const response1 = await supertest(app).post('/sign-up').send(userCreate); // making registration
        expect(response1.statusCode).toBe(201);

        const response2 = await supertest(app).post('/sign-up').send(userCreate); // try registration with same email
        expect(response2.statusCode).toBe(409);

    })

    it("no given datas, create user", async () => {
        const response = await supertest(app).post('/sign-up').send({});// try registration with invalid datas
        expect(response.statusCode).toBe(400);
    })

    it("given email and password, make login", async () => {

        const response1 = await supertest(app).post('/sign-in').send(login); // user does not registred
        expect(response1.statusCode).toBe(404);
        
        await supertest(app).post('/sign-up').send(userCreate); // create user to login

        const response2 = await supertest(app).post('/sign-in').send(login); // logging in
        expect(response2.statusCode).toBe(201);
        expect(response2.body).not.toBe(null);
    })

    it("no given email and password, make login", async () => {
        const response = await supertest(app).post('/sign-in').send({});
        expect(response.statusCode).toBe(400);
    })
})


