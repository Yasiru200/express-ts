import { Response } from "express";
import { HttpStatus } from "./constant/httpStatus.enum";
import { error } from "console";

export const successResponse = (code: HttpStatus, response: Response, data: any, alreadyWrappedWithData: boolean = false) => {

    let responseData = alreadyWrappedWithData ? data : { data };
    response.status(code).json(responseData);
}

export const errorResponse = (code: HttpStatus, response: Response, message: string) => {
    response.status(code).json({error})
}