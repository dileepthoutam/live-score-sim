package com.dileep;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.InputStreamReader;

public class BallByBallData {

    public void readBallByBallData(String filename) {

        try(InputStreamReader reader = new InputStreamReader(
                BallByBallData.class.getClassLoader().getResourceAsStream(filename)
        )) {

            CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader());

            int count = 0;
            for (CSVRecord record: csvParser) {
                if (count == 5) {
                    break;
                }
                System.out.println(record.get("runs_off_bat"));
                count++;
            }


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
