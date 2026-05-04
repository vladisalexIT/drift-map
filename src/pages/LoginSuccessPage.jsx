import { Link } from "react-router-dom";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import SpaceBackground from "../components/SpaceBackground";
import MovieSidePosters from "../components/MovieSidePosters";

export default function LoginSuccessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <SpaceBackground />

      <div className="relative z-10">
        <MovieSidePosters />

        <div className="relative z-10 mx-auto max-w-[1160px] px-4 py-8">
          <Header />

          <section className="flex min-h-[60vh] items-center justify-center">
            <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/10 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <h2 className="text-4xl font-extrabold tracking-tight text-[#f5e2e2]">
                Ну, вошли, и что?
              </h2>
              <p className="mt-4 text-lg text-white/75">
                Пиццу бесплатно хотите?
              </p>

              <Link
                to="/"
                className="mt-8 inline-flex rounded-full bg-[#ff7a1a] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#f06f0f]"
              >
                Вернуться на главную
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}