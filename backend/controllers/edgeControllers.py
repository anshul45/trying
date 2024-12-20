from fastapi import Request
from fastapi.responses import JSONResponse
from lib.prisma_client import prisma
from prisma import Json

async def addEdge(request:Request):
    try:   
            body = await request.json()
            id = body.get("id")
            source = body.get("source")
            sourceHandle = body.get("sourceHandle")
            target = body.get("target")
            targetHandle = body.get("targetHandle")
            type = body.get("type")

            if(not id or not source or not type or not target):
                return JSONResponse(
                status_code=400,
                content={"error": "All Fields are required"}
                )

            saved_edge = await prisma.edge.create(
                data={
                        "edgeId":id,
                        "source":source,
                        "sourceHandle":sourceHandle,
                        "type":type,
                        "target":target,
                        "targetHandle":targetHandle
                        })
    
            return JSONResponse(
                status_code=201,
                content={"message": "edge Added Sucessfully","node":saved_edge}
            )

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )

async def getEdge():
   try:
        nodes = await prisma.edge.find_many()
        edge_data = [node.dict() for node in nodes]
        return JSONResponse(
                status_code=200,
                content={"message": "edge Fetched Sucessfully","edge":edge_data}
            )

   except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )



async def deleteEdge(edgeId):
   try:
          if(not edgeId):
                return JSONResponse(
                status_code=400,
                content={"error": "All Fields are required"}
                 )
          response = await prisma.node.delete(where={"edgeId":edgeId})

          return JSONResponse(
                status_code=200,
                content={"message": "edge Deleted Sucessfully"}
                 )
   except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )