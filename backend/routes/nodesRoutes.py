from fastapi import APIRouter
from controllers.nodeControllers import getNode,addNode,updateNode,deleteNode

nodeRouter = APIRouter()

nodeRouter.get("/getnode")(getNode)
nodeRouter.post("/addnode")(addNode)
nodeRouter.put("/updatenode")(updateNode)
nodeRouter.delete("/deletenode")(deleteNode)