import org.jetbrains.annotations.NotNull;

public abstract class Koerper implements Comparable<Koerper> {
    String farbe;
    String material;
    double spezGewicht;

    public Koerper(String farbe, String material) {
        setFarbe(farbe);
        setMaterial(material);
        switch (material) {
            case "Kiefernholz":
                setSpezGewicht(0.55);
                break;
            case "Fichtenholz":
                setSpezGewicht(0.47);
                break;
            case "Eichenholz":
                setSpezGewicht(0.77);
                break;
            case "Buchenholz":
                setSpezGewicht(0.72);
                break;
            default:
                throw new IllegalArgumentException(String.format("Kenne das spezifische Gewicht von %s nicht!", material));
        }
    }
    public void setFarbe(String farbe) {
        if (farbe == null || farbe.isBlank() || farbe.isEmpty()) {
            throw new IllegalArgumentException("Ungueltige Farbe");
        }
        this.farbe = farbe;
    }

    public void setMaterial(String material) {
        if (material == null || material.isEmpty() || material.isBlank()) {
            throw new IllegalArgumentException("Ungueltiges Material");
        }
        this.material = material;
    }
    public void setSpezGewicht(double spezGewicht) {
        if (spezGewicht <= 0) {
            throw new IllegalArgumentException("Ungueltiges Gewicht");
        }
        this.spezGewicht = spezGewicht;
    }
    public abstract double getVolumen();

    public final double getGewicht() {
        return getVolumen() * spezGewicht;
    }
    @Override
    public int compareTo(@NotNull Koerper o) {
        // wenn gleiche Farben:
        if (this.farbe.equals(o.farbe)) {
            // Vergleiche Gewichte
            return (int)(this.getGewicht() - o.getGewicht());
        }
        // Vergleiche Farben
        return this.farbe.compareTo(o.farbe);
    }

    public String toString() {
        return String.format("%-8s (Farbe: %-7s | Gewicht: %#6.2fg | Material: %-11s)", this.getClass().getSimpleName(), this.farbe, this.getGewicht(), this.material);
    }

}
