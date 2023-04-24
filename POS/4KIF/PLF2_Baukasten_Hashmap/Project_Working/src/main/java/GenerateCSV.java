import org.jetbrains.annotations.NotNull;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Locale;
import java.util.Random;

public class GenerateCSV {
    final static String[] arten = {"Kugel", "Quader", "Würfel", "Zylinder"};
    final static String[] materialien = {"Eichenholz", "Fichtenholz", "Kiefernholz", "Buchenholz"};
    final static String[] farben = {"rot", "gelb", "grün", "blau", "lila", "rosa", "weiß", "schwarz"};
    final static String[] errors = {
            "Kugel;rot;Eichenholz",               // Kugel mit zuwenig
            "Kugel;rot;Eichenholz;2.31;4.21",     // Kugel mit zuviel
            "Quader;braun;Eichenholz;5.24;4.48;2.22",
            "Irgendeine Unsinns Zeile",
            "Quader;schwarz;Eichenholz;6.62;2.71;5.27;3,12"
    };
    final static Random rnd = new Random();
    static Double min = 2.0;
    static Double max = 7.0;

    public static void main(String[] args) {
        Locale.setDefault(Locale.ENGLISH);
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("geschenke.csv"))) {
            bw.write("Art;Farbe;Material;double1;double2;double3\n");
            for (int i = 0; i < 54; i++) {
                bw.write(getLine());
            }
            bw.flush();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static @NotNull String getLine() {
        String rw;
        if (rnd.nextInt(12) % 5 == 0) {
            rw = pickRandom(errors);
        } else {
            String art = pickRandom(arten);
            rw = String.format("%s;%s;%s;", art, pickRandom(farben), pickRandom(materialien));
            switch (art) {
                case "Würfel":  // 1p
                case "Kugel":    // 1p
                    rw += pickDouble();
                    break;
                case "Zylinder":
                    rw += pickDouble() + ";";
                    rw += pickDouble();
                    break;
                case "Quader":   // 3p
                    rw += pickDouble() + ";";
                    rw += pickDouble() + ";";
                    rw += pickDouble();
                    break;
                default:
                    throw new IllegalArgumentException(String.format("Falsche Art: %s", art));
            }
        }
        return rw + "\n";
    }

    public static String pickRandom(String[] args) {
        return args[rnd.nextInt(args.length)];
    }

    public static String pickDouble() {
        return String.format("%.2f", rnd.nextDouble(min, max));
    }
}
