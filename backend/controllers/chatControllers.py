from fastapi import WebSocket

async def handleConnection(websocket:WebSocket):
     data = await websocket.receive_text()
     print(f"Message received: {data}")
     await websocket.send_text(f"Echo: {data}")
