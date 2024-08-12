import { FastifyInstance } from "fastify"
import { Routes } from "../routes/routes"
import { ContentType } from "../utils/content-type"
import { StatusCode } from "../utils/status-code"
import { serviceGetTeams } from "../services/teams/teams-service"
import { serviceGetTeam } from "../services/teams/team-service"
import { ParamsModel } from "../utils/params"


export const getTeams = async (
    server: FastifyInstance) => {
    server.get(Routes.TEAMS, async (request, response) => {
        response.type(ContentType.JSON).code(StatusCode.OK)
        return await serviceGetTeams()
    })
}

export const getTeam = async (server: FastifyInstance) => {
    server.get<{ Params: ParamsModel }>(`${Routes.TEAMS}/:id`, async (request, response) => {
        const id = parseInt(request.params.id);
        const team = await serviceGetTeam(id)

        if (!team) {
            response.type(ContentType.JSON).code(StatusCode.NotFound);
            return { message: "Team not found." }
        } else {
            response.type(ContentType.JSON).code(StatusCode.OK);
            return team
        }
    })
}