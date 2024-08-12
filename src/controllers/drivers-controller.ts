import { FastifyInstance } from "fastify";
import { Routes } from "../routes/routes";
import { ContentType } from "../utils/content-type";
import { StatusCode } from "../utils/status-code";
import { serviceGetDrivers } from "../services/drivers-service";
import { DriversModel } from "../models/drivers-model";

interface DriverParams {
    id: string
}

export const getDrivers = async (server: FastifyInstance) => {
    server.get(Routes.DRIVERS, async (request, response) => {
        response.type(ContentType.JSON).code(StatusCode.OK)
        return await serviceGetDrivers()
    })
}

export const getDriver = async (server: FastifyInstance) => {


    server.get<{ Params: DriverParams }>(`${Routes.DRIVERS}/:id`, async (request, response) => {
        const id = parseInt(request.params.id);

        const drivers = await serviceGetDrivers()
        const driver: DriversModel | undefined = drivers.find(d => d.id === id);

        if (!driver) {
            response.type(ContentType.JSON).code(StatusCode.NotFound);
            return { message: "Driver not found." }
        } else {
            response.type(ContentType.JSON).code(StatusCode.OK);
            return driver
        }
    })
}