import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;

public class Baukasten {
    double eigenGewicht;
    String nameBesitzer;
    HashMap<String, ArrayList<Koerper>> koerperDict;
    HashSet<Koerper> koerperSet;

    public Baukasten(String nameBesitzer, double eigenGewicht, HashSet<Koerper> koerper) {
        setEigenGewicht(eigenGewicht);
        setNameBesitzer(nameBesitzer);
        this.koerperSet = koerper;
        this.koerperDict = new HashMap<>();
        for (Koerper k : koerper) {
            String art = k.getClass().getSimpleName();
            if (!koerperDict.containsKey(art)) {
                koerperDict.put(art, new ArrayList<>());
            }
            koerperDict.get(art).add(k);
        }
        for (ArrayList arr : koerperDict.values()) {
            Collections.sort(arr);
        }
    }

    public void setEigenGewicht(double eigenGewicht) {
        if (eigenGewicht <= 0) {
            throw new IllegalArgumentException("Ungueltiges Gewicht");
        }
        this.eigenGewicht = eigenGewicht;
    }

    public void setNameBesitzer(String nameBesitzer) {
        if (nameBesitzer == null || nameBesitzer.isBlank() || nameBesitzer.isEmpty()) {
            throw new IllegalArgumentException("Ungueltiger Besitzer");
        }
        this.nameBesitzer = nameBesitzer;
    }

    public void addKoerper(Koerper k) {
        if (k == null) {
            throw new IllegalArgumentException("Ungueltiger Koerper");
        }
// TODO
    }

    public double gesamtGewicht() {
        double gesamtGewicht = eigenGewicht;
        // TODO
        return gesamtGewicht;
    }

    public boolean hasKoerper(Koerper k) {
        return koerperSet.contains(k);
    }


    public String toString() {
        String rw = String.format("======= Baukasten von %s =======\n", nameBesitzer);
        rw += String.format("=== Eigengewicht: %.1fkg\n", gesamtGewicht()/1000);
        for (String art : koerperDict.keySet().stream().sorted().toList()) {
            rw += String.format("  Abteilung %s (%d Vorkommen):\n", art, koerperDict.get(art).size());
            for (Koerper k : koerperDict.get(art)) {
                rw += String.format("    %s\n", k.toString());
            }
        }
        return rw;
    }


}
