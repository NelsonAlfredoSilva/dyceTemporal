import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";

import "./Header.css";

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const cerrarMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>

            <div className="headerContainer">

                <div className="menuHambur">

                    <ion-icon
                        name={menuOpen ? "close-outline" : "menu-outline"}
                        className="menuResponsive"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                </div>

                <Link
                    className="headerContainerImg"
                    to="/"
                >
                    <img
                        src={logo}
                        alt="Logo Diseños y Componentes Electrónicos"
                        className="imagen_logo"
                    />
                </Link>

            </div>

            <Nav
                menuOpen={menuOpen}
                cerrarMenu={cerrarMenu}
            />

        </header>
    );
};