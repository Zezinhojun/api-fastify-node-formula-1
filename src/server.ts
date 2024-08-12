import fastify from "fastify";
import cors from "@fastify/cors"
import { getTeam, getTeams } from "./controllers/teams-controller";
import { getDriver, getDrivers } from "./controllers/drivers-controller";

const server = fastify({ logger: false });
const port = process.env.PORT

server.register(cors, {
    origin: "*",
    // methods: ["GET"]
});

getTeams(server)
getTeam(server)
getDrivers(server)
getDriver(server)

server.listen({ port: Number(port) }, () => {
    console.log("Server init");
})
