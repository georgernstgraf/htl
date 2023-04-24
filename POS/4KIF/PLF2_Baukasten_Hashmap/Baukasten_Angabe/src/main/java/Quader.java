public class Quader extends Koerper {
    private double l, b, h;
    public Quader(KoerperParameter par) {
        super(par.farbe, par.material);
        setL(par.doub1);
        setB(par.doub2);
        setH(par.doub3);
    }
    public Quader(String farbe, String material, Double l, Double b, Double h){
        super(farbe, material);
        setL(l);
        setB(b);
        setH(h);
    }

    public void setL(double l) {
        if (l <= 0) {
            throw new IllegalArgumentException("Ungueltige Laenge");
        }
        this.l = l;
    }
    public void setB(double b) {
        if (b <= 0) {
            throw new IllegalArgumentException("Ungueltige Breite");
        }
        this.b = b;
    }

    public void setH(double h) {
        if (h <= 0) {
            throw new IllegalArgumentException("Ungueltige hoehe");
        }
        this.h = h;
    }

    @Override
    public double getVolumen() {
        return l * b * h;
    }


    @Override
    public String toString() {
        return String.format("%s [l: %.2fcm, b: %.2fcm, h: %.2fcm]", super.toString(), l,b,h );
    }
  

}
