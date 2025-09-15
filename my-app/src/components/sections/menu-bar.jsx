import React, { useState } from 'react';
import "./Styles/menubar.css";

const menuItems = [
  { label: 'Sobre', href: '#apresentação' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
  { label: 'Contratar', href: '#contato' },
];

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu-bar">
      <div className="menu-logo">Andrew Klayver</div>

      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`menu-items ${isOpen ? 'show' : ''}`}>
        {menuItems.map(item => (
          <li key={item.label}>
            <a href={item.href} className={item.label === 'Contratar' ? 'btn-contratar' : ''}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
