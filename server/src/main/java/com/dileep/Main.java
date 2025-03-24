package com.dileep;

import org.glassfish.tyrus.server.Server;

import java.util.logging.Logger;

public class Main {

    private static final Logger logger = Logger.getLogger("Main");
    private static final String PORT = "3000";

    public static void startWebSocketServer() {
        Server server = new Server("localhost", 3000, "/ws", null, WebSocketServer.class);
        try {
            server.start();
            logger.info(String.format("Websocket server started at ws://localhost:%s/ws/feed", PORT));
            Thread.currentThread().join();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            server.stop();
        }
    }

    public static void main(String[] args) {

        startWebSocketServer();

    }

}
