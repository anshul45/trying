from fastapi import APIRouter
from controllers.edgeControllers import getEdge,addEdge,deleteEdge

edgeRouter = APIRouter()

edgeRouter.post("/addEdge")(addEdge)
edgeRouter.get("/getedge")(getEdge)
edgeRouter.delete("/deleteEdge")(deleteEdge)