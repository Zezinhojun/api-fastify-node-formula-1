import { TeamsModel } from "../../models/teams-model";
import { serviceGetTeams } from "./teams-service";

export const serviceGetTeam = async (id: number): Promise<TeamsModel | undefined> => {
    const teams = await serviceGetTeams()
    const team: TeamsModel | undefined = teams.find(t => t.id === id);

    return team
}