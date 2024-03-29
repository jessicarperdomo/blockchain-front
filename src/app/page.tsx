import NavBar from '@/app/components/nav-bar';
import Footer from '@/app/components/footer';
import Hero from '@/app/components/hero';

export default function Page() {
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container row m-auto flex-grow-1">
        <div className="my-auto">
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
}
