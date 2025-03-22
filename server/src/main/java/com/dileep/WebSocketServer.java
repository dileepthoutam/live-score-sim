package com.dileep;

import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.logging.Logger;

@ServerEndpoint("/feed")
public class WebSocketServer {

    private static final Logger logger = Logger.getLogger("WebSocketServer");

    @OnOpen
    public void onOpen(Session session) {
        logger.info("Client connected: " + session.getId());
    }

    @OnMessage
    public void onMessage(String message, Session session) throws IOException {
        logger.info("Message received: " + message);
        session.getBasicRemote().sendText("echo: " + message);
    }
}
