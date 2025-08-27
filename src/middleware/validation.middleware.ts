import Ajv from "ajv";
import ajvFormates from "ajv-formats";
import ajvErrors from "ajv-errors";
import { NextFunction } from "express";

function createajv(){
    const ajv = new Ajv({ allErrors: true});
    ajvFormates(ajv);
    ajvErrors(ajv);

    return ajv;
}
export function ValidateRequestBody(schema: any):(req: Request, res: Response, next: NextFunction) =>  {
 const ajv = createajv();

    return (req:Request, res:Response, next:NextFunction) => {
         
}
    