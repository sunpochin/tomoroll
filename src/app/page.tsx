import Image from "next/image";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <section id="home" className="min-h-screen">
            <h1>Home</h1>
            <p>Welcome to Tomoroll</p>
          </section>

          <section id="product" className="min-h-screen">
            <h1>Product</h1>
            <p>This is our product introduction.</p>
          </section>

          <section id="about" className="min-h-screen">
            <h1>About Us</h1>
            <p>This is our information.</p>
          </section>

          <section id="contact" className="min-h-screen">
            <h1>Contact</h1>
            <p>This is our contact information.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
