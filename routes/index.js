import express from "express";
import Response from "../app/utils/responseHandler";
import AuthRoute from "./authRoute";

/**
 * Main Router that contains Application routes
 * @returns {object} this.routes
 */

class Router {
    constructor() {
        this.router = express.Router();

        this.authRoute = new AuthRoute(this.router);
        this.response = null;
    }

    indexRoute() {
        this.router.get("/", (req, res) => {
            this.response = new Response(req, res);
            this.response.success({
                message: "Welcome.",
                data: []
            });
        });
    }

    run() {
        this.indexRoute();

        return this.router;
    }
}

export default Router;