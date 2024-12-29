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
        this.socket.onmessage = (event) =>{
            callback(event.data)
        }
    }

    sendMessage(data:object){
        if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket is not open. Call connect() first.");
          }
          this.socket.send(JSON.stringify(data));
    }

    disconnect() {
        if (this.socket) {
          this.socket.close();
        }
      }

}

export const webSocketService = () => {
    console.log("hit")
    return new WebSocketService("ws://localhost:8000/chat");
}