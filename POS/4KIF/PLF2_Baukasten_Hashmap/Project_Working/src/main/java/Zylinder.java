import org.jetbrains.annotations.NotNull;

public class Zylinder extends Koerper {
    private double radius;
    private double hoehe;

    public Zylinder(@NotNull KoerperParameter par) {
        super(par.farbe, par.material);
        setRadius(par.doub1);
        setHoehe(par.doub2);
    }

    public void setRadius(double radius) {
        if (radius <= 0){
            throw new IllegalArgumentException("ungueltiger Radius");
        }
        this.radius = radius;
    }
    public void setHoehe(double hoehe) {
        if (hoehe <= 0){
            throw new IllegalArgumentException("Ungueltige hoehe");
        }
        this.hoehe = hoehe;
    }

    @Override
    public double getVolumen() {
        return Math.PI * Math.pow(radius, 2) * hoehe;
    }
    @Override
    public String toString() {
        return String.format("%s [r: %.2fcm, h: %.2fcm]", super.toString(), radius, hoehe );
    }

}
