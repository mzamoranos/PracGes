export default function Sidebar({ closeMenu }) {
    return (
      <div className="md:hidden bg-red-800 text-white p-4 space-y-2">
        <a href="#" onClick={closeMenu} className="block">Inicio</a>
        <a href="#" onClick={closeMenu} className="block">Normativa</a>
        <a href="#" onClick={closeMenu} className="block">Login</a>
      </div>
    );
  }