public class KoerperParameter {
    String art, farbe, material;
    Double doub1, doub2, doub3;
    public KoerperParameter(String line) {
        String[] parts = line.split(";");
        if (parts.length < 4 ||parts.length > 6) {  // gülitig 4-6
            // zB Kugel;lila;Eiche;3.0
            throw new IllegalArgumentException(String.format("Falsche Anzahl Spalten in Zeile: %s (%d)",
                    line, parts.length));
        }
        doub2 = null;
        doub3 = null;
        art = parts[0];
        farbe = parts[1];
        material = parts[2];
        doub1 = Double.parseDouble(parts[3]);
        if (parts.length == 4) return;
        doub2 = Double.parseDouble(parts[4]);
        if (parts.length == 5) return;
        doub3 = Double.parseDouble(parts[5]);
    }
}
