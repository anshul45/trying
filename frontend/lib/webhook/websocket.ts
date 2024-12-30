export class WebSocketService {
    private socket: WebSocket | null = null;
    constructor(private url:string){}

    connect(){
        this.socket = new WebSocket(this.url)
        this.socket.onopen = () => console.log("Websocket connected!")
        this.socket.onclose = () => console.log("Websocket disconnected!")
        this.socket.onerror = (e) => console.log("Websocket error :",e)
    }

    onMessage(callback:(message:string) => void) {
        if(!this.socket) {
            throw new Error("WebSocket is not initialized. Call connect() first.");
        }
        this.socket.onmessage = (event:MessageEvent) =>{
            callback(event.data)
        }
    }

    sendMessage(data:object){
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket is not open. Call connect() first.");
          }
          this.socket.send(JSON.stringify(data));
    }

    disconnect(): void {
        if (this.socket) {
          if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.close();
            console.log("WebSocket connection closed.");
          } else {
            console.log("WebSocket is already closed or in the process of closing.");
          }
        }
      }

}

export const webSocketService = () => {
    return new WebSocketService("ws://localhost:8000/chat");
}