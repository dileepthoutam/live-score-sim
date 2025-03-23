package com.dileep;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ReadData {

    public static Optional<List<LiveScore>> readBallByBallData(String filename) {

        try(InputStreamReader reader = new InputStreamReader(
                ReadData.class.getClassLoader().getResourceAsStream(filename)
        )) {

            CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader());

            List<LiveScore> scores = new ArrayList<>();
            for (CSVRecord record: csvParser) {
                scores.add(new LiveScore(
                    record.get("ball"),
                    record.get("striker"),
                    record.get("non_striker"),
                    record.get("bowler"),
                    Integer.valueOf(record.get("runs_off_bat")),
                    Integer.valueOf(record.get("extras")),
                    record.get("wicket_type"),
                    record.get("player_dismissed")
                ));
            }

            csvParser.close();
            return Optional.of(scores);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return Optional.empty();

    }

}
