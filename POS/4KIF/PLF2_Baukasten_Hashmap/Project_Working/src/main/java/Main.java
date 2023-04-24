import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.ENGLISH);
        HashSet<Koerper> koerper = readCSVKoerper("geschenke.csv");
        Baukasten baukasten = new Baukasten("Klara", 250.0, koerper);
        System.out.println(baukasten);

    }

    public static HashSet<Koerper> readCSVKoerper(String filename) {
        HashSet<Koerper> rw = new HashSet<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            KoerperParameter par;
//            System.out.println(String.format("Headers: %s", br.readLine()));
            br.readLine();
            String line = br.readLine();
            while (line != null) {
                try {
                    par = new KoerperParameter(line);
                    switch (par.art) {
                        case "Kugel":
                            rw.add(new Kugel(par));
                            break;
                        case "Zylinder":
                            rw.add(new Zylinder(par));
                            break;
                        case "Quader":
                            rw.add(new Quader(par));
                            break;
                        case "Würfel":
                            rw.add(new Wuerfel(par));
                            break;
                        default:
                            throw new IllegalArgumentException(String.format("Not Implemented: %s", par.art));
                    }
                } catch (IllegalArgumentException e) {
                    System.err.println(String.format("Fehlerhafte Zeile: %s", line));
                }
                line = br.readLine();
            }

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return rw;
    }
}