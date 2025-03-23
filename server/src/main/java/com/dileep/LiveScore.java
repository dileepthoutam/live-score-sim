package com.dileep;

public record LiveScore(
    String ball,
    String striker,
    String nonStriker,
    String bowler,
    int runsOffBat,
    int extras,
    String wicketType,
    String playerDismissed
) {
     
}
