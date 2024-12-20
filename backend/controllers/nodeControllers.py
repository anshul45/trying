from fastapi import Request
from fastapi.responses import JSONResponse
from lib.prisma_client import prisma
from prisma import Json

async def addNode(request:Request):

    try:   
            body = await request.json()
            id = body.get("id")
            position = body.get("position")
            type = body.get("type")
            data = body.get("data")

            if(not id or not position or not type or not data):
                return JSONResponse(
                status_code=400,
                content={"error": "All Fields are required"}
                 )
    
            # Validate `position` and `data` are valid JSON objects
            if not isinstance(position, dict) or not isinstance(data, dict):
                return JSONResponse(
                status_code=400,
                content={"error": "`position` and `data` must be JSON objects"}
                )
    


            saved_node = await prisma.node.create(
                data={
                        "nodeId":id,
                        "position":Json(position),
                        "data":Json(data),
                        "type":type
                        })
    
            return JSONResponse(
                status_code=201,
                content={"message": "Node Added Sucessfully","node":saved_node}
            )

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )


    

async def getNode():
    try:
        nodes = await prisma.node.find_many()
        node_data = [node.dict() for node in nodes]
        return JSONResponse(
                status_code=200,
                content={"message": "Node Fetched Sucessfully","node":node_data}
            )

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )
    

async def updateNode(requset:Request,nodeId):
    try:
        
         if(not nodeId):
                return JSONResponse(
                status_code=400,
                content={"error": "All Fields are required"}
                 )
         body = await requset.json()

         position = body.get('position')
         data = body.get('data')
         if(not body):
                return JSONResponse(
                status_code=400,
                content={"error": "No data for updating node"}
                 )
         
         updatedNode = await prisma.node.update(where={"nodeId":nodeId},data={"position":Json(position),"data":Json(data)})

         print(updatedNode)

         return JSONResponse(
                status_code=200,
                content={"message": "Node Updated Sucessfully","node":updatedNode.dict()}
                 )

    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )

async def deleteNode(nodeId):
    try:
          if(not nodeId):
                return JSONResponse(
                status_code=400,
                content={"error": "All Fields are required"}
                 )
          response = await prisma.node.delete(where={"nodeId":nodeId})

          return JSONResponse(
                status_code=200,
                content={"message": "Node Deleted Sucessfully"}
                 )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )