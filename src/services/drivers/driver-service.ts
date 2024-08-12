import { DriversModel } from "../../models/drivers-model";
import { serviceGetDrivers } from "./drivers-service";

export const serviceGetDriver = async (id: number):Promise<DriversModel | undefined> =>{
    const drivers = await serviceGetDrivers()
    const driver: DriversModel | undefined = drivers.find(d => d.id === id);

   return driver
}