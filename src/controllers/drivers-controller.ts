import { FastifyInstance } from "fastify";
import { Routes } from "../routes/routes";
import { ContentType } from "../utils/content-type";
import { StatusCode } from "../utils/status-code";
import { serviceGetDrivers } from "../services/drivers/drivers-service";
import { serviceGetDriver } from "../services/drivers/driver-service";
import { ParamsModel } from "../utils/params";

export const getDrivers = async (server: FastifyInstance) => {
    server.get(Routes.DRIVERS, async (request, response) => {
        response.type(ContentType.JSON).code(StatusCode.OK)
        return await serviceGetDrivers()
    })
}

export const getDriver = async (server: FastifyInstance) => {
    server.get<{ Params: ParamsModel }>(`${Routes.DRIVERS}/:id`, async (request, response) => {
        const id = parseInt(request.params.id);
        const driver = await serviceGetDriver(id)

        if (!driver) {
            response.type(ContentType.JSON).code(StatusCode.NotFound);
            return { message: "Driver not found." }
        } else {
            response.type(ContentType.JSON).code(StatusCode.OK);
            return driver
        }
    })
}