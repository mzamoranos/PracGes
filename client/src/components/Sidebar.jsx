export default function Sidebar({ closeMenu }) {
    return (
      <div className="Sidebar">
        <a href="#" onClick={closeMenu} className="block">Inicio</a>
        <a href="#" onClick={closeMenu} className="block">Normativa</a>
        <a href="#" onClick={closeMenu} className="block">Login</a>
      </div>
    );
  }