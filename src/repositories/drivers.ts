import fs from 'fs'
import path from 'path'
import { DriversModel } from '../models/drivers-model'

const pathData = path.join(__dirname, "../repositories/driversData.json")
const language = "utf-8"

export const repositoryDrivers = async (): Promise<DriversModel[]> => {
    const data = fs.readFileSync(pathData, language)

    let jsonFile = JSON.parse(data)

    return jsonFile
}