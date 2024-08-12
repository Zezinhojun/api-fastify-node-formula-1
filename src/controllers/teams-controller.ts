import { FastifyInstance } from "fastify"
import { Routes } from "../routes/routes"
import { ContentType } from "../utils/content-type"
import { StatusCode } from "../utils/status-code"
import { serviceGetTeams } from "../services/teams-service"

export const getTeams = async (
    server: FastifyInstance) => {
    server.get(Routes.TEAMS, async (request, response) => {
        response.type(ContentType.JSON).code(StatusCode.OK)
        return await serviceGetTeams()
    })
}