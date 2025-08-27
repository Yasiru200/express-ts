import { Request, Response } from "express";
import {HttpStatus} from "../common/constant/httpStatus.enum";
import { errorResponse, successResponse } from "../common/resposeHandler";
import { ERRORS } from "../common/constant/errors.constant";

export class CustomerController {
    private static instance: CustomerController;

    public static getInstance(): CustomerController {
        if (!CustomerController.instance) {
            CustomerController.instance = new CustomerController();
        }
        return CustomerController.instance;
    }

    private constructor() { }

    getCustomer = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const customer = {
                id: 1,
                name: "John Doe",
                email: "john.doe@gmail.com",
                phone: "1234567890",
                address: "123 Main St, City, Country",
            };
            
            successResponse(HttpStatus.OK, res, customer);
        } catch (error) {
            errorResponse(HttpStatus.INTERNAL_SERVER_ERROR, res, ERRORS.GET_FAILED);
        }
    }
}
