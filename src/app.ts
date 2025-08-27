import cors from "cors";
import express, { Application, Request, Response } from "express";

import globalErrorHandler from "./app/middleware/globalErrorHandler";
import router from "./app/route/intex";
import notFound from "./app/middleware/notFound";

const app: Application = express();

// Parsers
app.use(express.json());


app.use(cors({
  credentials: true,
  origin: [
    "http://localhost:5173",
    "http://localhost:3000", 
    "https://stunning-tartufo-f87c40.netlify.app"
  ]
}));




// Application routes
app.use("/api", router);



// Root route to check if server is running
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Task Manager Server is running",
    api_docs: "Use /api/tasks/* for task management endpoints byee"
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
