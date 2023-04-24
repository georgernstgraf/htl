public class Kugel extends Koerper {
    double radius;
    public Kugel(KoerperParameter par) {
        super(par.farbe, par.material);
        setRadius(par.doub1);
    }

    public void setRadius(double radius) {
        if (radius <= 0){
            throw new IllegalArgumentException("Ungueltiger Radius");
        }
        this.radius = radius;
    }

    @Override
    public double getVolumen() {
        return (4 / 3) * Math.PI * Math.pow(radius, 3);
    }
    @Override
    public String toString() {
        return String.format("%s [r: %.2fcm]", super.toString(), radius );
    }

}
