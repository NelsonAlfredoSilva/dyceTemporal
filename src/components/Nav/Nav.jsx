import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = ({ menuOpen, cerrarMenu }) => {

    return (
        <nav className="nav">

            <ul className={`nav-list ${menuOpen ? "menuOpen" : ""}`}>

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "activo" : ""
                        }
                        onClick={cerrarMenu}
                    >
                        Inicio
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Catalogo"
                        className={({ isActive }) =>
                            isActive ? "activo" : ""
                        }
                        onClick={cerrarMenu}
                    >
                        Catálogo
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/Nosotros"
                        className={({ isActive }) =>
                            isActive ? "activo" : ""
                        }
                        onClick={cerrarMenu}
                    >
                        Quienes somos
                    </NavLink>
                </li>

            </ul>

        </nav>
    );
};