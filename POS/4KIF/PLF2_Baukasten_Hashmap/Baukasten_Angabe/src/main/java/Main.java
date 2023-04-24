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
 // TODO - Aufgabe 1
        return rw;
    }
}