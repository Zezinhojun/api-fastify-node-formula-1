import { TeamsModel } from "../../models/teams-model"
import { repositoryTeam } from "../../repositories/teams"


export const serviceGetTeams = async (): Promise<TeamsModel[]> => {
    return await repositoryTeam()
}