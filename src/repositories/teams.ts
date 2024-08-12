import fs from 'fs'
import path from 'path'
import { TeamsModel } from '../models/teams-model'

const pathData = path.join(__dirname, "../repositories/teamsData.json")
const language = "utf-8"

export const repositoryTeam = async ():Promise<TeamsModel[]> => {
    const data = fs.readFileSync(pathData, language)

    let jsonFile = JSON.parse(data)

    return jsonFile
}