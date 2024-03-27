import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Menu from "@/components/sections/menu";
import Reserve from "@/components/sections/reserve";
import Divider from "@/components/ui/divider";

export default function Home() {
  return (
    <div className="min-h-screen h-full">
      <Hero />
      <Divider />


      <Menu />
      <Divider />

      <Reserve />
      <Divider />
      
      <About />
    </div>
  );
}
