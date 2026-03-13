import Hero from "@/components/Hero";
import ServiciosCorporativos from "@/components/ServiciosCorporativos";
import ServiciosParticulares from "@/components/ServiciosParticulares";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiciosCorporativos />
      <ServiciosParticulares />
      <Blog />
      <Footer />
    </main>
  );
}
