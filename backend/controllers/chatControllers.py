from fastapi import WebSocket
from lib.rag_agent.open_ai_llm import OpenAILLMAgent

async def handleConnection(websocket:WebSocket):
     data = await websocket.receive_text()
     print(f"Message received: {data}")
     response = OpenAILLMAgent(data)
     await websocket.send_text(str(response))
