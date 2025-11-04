import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export default function AboutPage() {
  return (
    <>
    <div>
        <Header />
        <div className="py-10">
            <About />
        </div>
        <Footer />
      
    </div>
    </>
  );
}
