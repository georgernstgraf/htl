import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class BaukastenTest {
    private Baukasten baukastentest;
    private Wuerfel w1, w2;
    private Kugel ku1, ku2;
    private Zylinder zy1, zy2;
    private Quader q1, q2;


    @BeforeEach
    void setUp() {
        w1 = new Wuerfel(new KoerperParameter("Würfel;blau;Kiefernholz;4"));
        w2 = new Wuerfel(new KoerperParameter("Würfel;rot;Eichenholz;6"));
        ku1 = new Kugel(new KoerperParameter("Kugel;gruen;Fichtenholz;5"));
        ku2 = new Kugel(new KoerperParameter("Kugel;lila;Kiefernholz;3"));
        zy1 = new Zylinder(new KoerperParameter("Zylinder;gelb;Eichenholz;2;4"));
        zy2 = new Zylinder(new KoerperParameter("Zylinder;weiß;Fichtenholz;3;5"));
        q1 = new Quader(new KoerperParameter("Quader;rot;Kiefernholz;3;4;5"));
        q2 = new Quader(new KoerperParameter("Quader;schwarz;Eichenholz;3;2;6"));
        baukastentest = new Baukasten("Klara", 150,
                new HashSet<Koerper>(List.of(new Koerper[]{w1, w2, ku1, ku2,zy1, zy2, q1, q2})));
    }

    @Test
    void bastel () {
        String a = "6.73";
        Double d = Double.parseDouble(a);
        System.out.println(String.format("a: |%s|, d: |%.5f|",a, d));
    }
    public void fuelleArray(){
        baukastentest.addKoerper(w1);
        baukastentest.addKoerper(w2);
        baukastentest.addKoerper(ku1);
        baukastentest.addKoerper(ku2);
        baukastentest.addKoerper(zy1);
        baukastentest.addKoerper(zy2);
        baukastentest.addKoerper(q1);
        baukastentest.addKoerper(q2);
    }

    @Test
    void gesamtGewicht() {
        fuelleArray();
        System.out.println(baukastentest.gesamtGewicht());

    }

    @Test
    void hasKoerper() {
        System.out.println("#Teste das hasKoerper bezueglich eines Objekts das im Array ist");
        baukastentest.addKoerper(w1);
        assertTrue(baukastentest.hasKoerper(w1));

        System.out.println("#Teste das hasKoerper bezueglich eines Objekts das nicht im Array ist");
        assertFalse(baukastentest.hasKoerper(w2));

        System.out.println("#Teste das hasKoerper bezueglich eines Objekts das null ist");
        boolean exceptionGeworfen = false;
        try {
            baukastentest.hasKoerper(null);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            exceptionGeworfen = true;
        }
        assertTrue(exceptionGeworfen);
    }

    @Test
    void testToString() {
        fuelleArray();
        System.out.println(baukastentest.toString());

    }


}