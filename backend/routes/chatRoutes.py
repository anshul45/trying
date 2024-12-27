from fastapi import WebSocket, APIRouter, WebSocketDisconnect
from controllers.chatControllers import handleConnection

chatRouter = APIRouter()

@chatRouter.websocket("/chat")
async def handle_connection(websocket: WebSocket):
    await websocket.accept()
    print("WebSocket connected")
    try:
        while True:
            try:
                await handleConnection(websocket)
            except WebSocketDisconnect:
                break
            except Exception as e:
                print(f"Error handling message: {e}")
    except WebSocketDisconnect:
        await handle_disconnect(websocket)
        


async def handle_disconnect(websocket: WebSocket):
    try:
        if websocket.application_state != "DISCONNECTED":
            await websocket.close()
            print("WebSocket disconnected")
    except Exception as e:
        print(f"Error closing WebSocket: {e}")
