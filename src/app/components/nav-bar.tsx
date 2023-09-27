import MainNav from '@/app/components/main-nav/main-nav';

export default function NavBar() {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <MainNav />
        </div>
      </nav>
    </div>
  );
}
