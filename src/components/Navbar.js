import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const links = [
    {id: 1, name: "About", url: "/about"},
    {id: 2, name: "Projects", url: "/projects"},
  ];

  const toggleNavbar = () => {
    setOpen(!isOpen);
  }

  return (
  <>
  <nav className="animate fade-in-down p-2 bg-transparent border mb-8 text-neutral-400  border-neutral-500 ">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <NavLink to="/about" className="flex items-center ml-2">
        <span className="self-center text-xl font-semibold whitespace-nowrap">
          <span className="text-emerald-500">[</span>
          <span className="text-neutral-100">nhxv</span>
          <span className="text-emerald-500">]</span>
        </span>
      </NavLink>
      <button data-collapse-toggle="mobile-menu" type="button" 
      className="nav-toggle" 
      aria-controls="mobile-menu" aria-expanded="false" onClick={toggleNavbar}>
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <i className="pi pi-times"></i>
        ) : (
          <i className="pi pi-bars"></i>
        )}

      </button>
      <div className={"w-full md:block md:w-auto" + (isOpen ? "" : " hidden")} id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm">
          {links.map(link => 
            (
            <li key={link.id}>
              <NavLink to={link.url} 
              className={navData => navData.isActive ? 
              "nav-link nav-active" : "nav-link"}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
  </>
  );

}

export default Navbar;