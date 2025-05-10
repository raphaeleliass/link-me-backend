import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Link-Me API",
      version: "1.0.0",
      description: "API documentation for Link-Me application",
    },
    servers: [
      {
        url: "http://localhost:4444",
        description: "Development server",
      },
      {
        url: "https://link-me-production.vercel.app",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/modules/*/*.routes.ts"], // Path to the API routes with Swagger annotations
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
