package com.dileep;

import org.glassfish.tyrus.server.Server;

import java.util.logging.Logger;

public class Main {

    private static final String FILENAME = "ipl-2024-final.csv";
    private static final Logger logger = Logger.getLogger("Main");

    public void startWebSocketServer() {
        Server server = new Server("localhost", 3000, "/ws", null, WebSocketServer.class);
        try {
            server.start();
            logger.info("Websocket server started at ws://localhost:3000/ws/feed");
            Thread.currentThread().join();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            server.stop();
        }
    }

    public static void main(String[] args) {

        BallByBallData ballData = new BallByBallData();
        ballData.readBallByBallData(FILENAME);

    }

}