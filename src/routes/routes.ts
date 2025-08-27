import { Router } from "express";
import { CustomerRoute } from "./customer.route";



export class Routes{
    public router:Router;
    private static instance:Routes;

    public static getInstance():Routes{
        if(!Routes.instance){
            Routes.instance = new Routes();
        }
        return Routes.instance;

    }

    private constructor(){
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes(){
        this.router.use("/greeting", GreetingRoute.getInstance().route);
        this.router.use("/customer", CustomerRoute.getInstance().router);

    }
    
}