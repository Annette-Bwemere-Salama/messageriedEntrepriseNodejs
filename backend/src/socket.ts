interface serverToClientEvents {
    noArg: () => void;
    basicEmit: (a:number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e:number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

interface InterServerEvents {
    ping: () => void;
}

interface SocketData{
    name: string;
    id: number
}




let io: any;

module.exports = {
    init : (httpServer: any) =>{
        require('socket.io')(httpServer)
        return io;
    },
    getIo: () =>{
        if (!io) {
            throw new Error("Socket.io not initialized")
        }
        return io
    }
}