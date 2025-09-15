import React from 'react';

const menuItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
    { label: 'Contratar', href: '#contratar' },
];

const MenuBar = () => (
    <nav style={{
        width: '100%',
        padding: '1rem 2rem',
        boxSizing: 'border-box',
        position: 'fixed',
        top: 0,
        right: 0,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        zIndex: 1000,
    }}>
        <ul style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
        }}>
            {menuItems.map(item => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        style={{
                            textDecoration: 'none',
                            color: '#222',
                            fontWeight: item.label === 'Contratar' ? 'bold' : 'normal',
                            padding: item.label === 'Contratar' ? '0.5rem 1rem' : '0',
                            borderRadius: item.label === 'Contratar' ? '4px' : '0',
                            background: item.label === 'Contratar' ? '#007bff' : 'transparent',      
                            transition: 'background 0.2s',
                        }}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export default MenuBar;