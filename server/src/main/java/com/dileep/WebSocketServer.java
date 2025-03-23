package com.dileep;

import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;

@ServerEndpoint("/feed")
public class WebSocketServer {

    private static final String filename = "ipl-2024-final.csv";
    private static final Logger logger = Logger.getLogger("WebSocketServer");

    @OnOpen
    public void onOpen(Session session) {
        logger.info("Client connected: " + session.getId());
        Optional<List<LiveScore>> scores = ReadData.readBallByBallData(filename);
        if (scores.isEmpty()) {
            logger.info("No data present.");
            return;
        }
        try {
            Thread.sleep(3000);
            for (var score: scores.get()) {
                ObjectMapper mapper = new ObjectMapper();
                String data = mapper.writeValueAsString(score);
                session.getAsyncRemote().sendText(data);
                Thread.sleep(1500);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @OnMessage
    public void onMessage(String message, Session session) throws IOException {
        logger.info("Message received: " + message);
        session.getBasicRemote().sendText("echo: " + message);
    }
}
