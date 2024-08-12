import { DriversModel } from "../models/drivers-model"
import { repositoryDrivers } from "../repositories/drivers"

export const serviceGetDrivers = async (): Promise<DriversModel[]> => {
    return await repositoryDrivers()
}