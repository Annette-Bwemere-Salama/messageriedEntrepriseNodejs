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