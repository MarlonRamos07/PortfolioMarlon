import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import MyButton from './MyButton'
import '../index.css'
function myNavBar() {
  return (
    <Navbar className="bg-[#121217] pt-7 sticky top-0 shadow p-4 z-50">
      <h1 className="text-[1rem] text-white  h-[1.313rem] md:w-[13.313rem] md:text-[1.125rem] md:h-[1.438rem] font-['Space_Grotesk']  ">Dev Front e QA </h1>
      <NavbarBrand href="https://flowbite-react.com">
      </NavbarBrand>
      <div className="flex md:order-2">
        <MyButton text="Contato">
        </MyButton>
        <NavbarToggle className="ml-3.5 hover:bg-[#B2BAE5] text-black"/>
      </div>
      <NavbarCollapse className="font-['Space_Grotesk'] text-center bg-[#B2BAE5]  md:bg-transparent font-bold mt-4">
        <NavbarLink className="md:!text-white !text-black text-[0.875rem] md:hover:!text-[#B2BAE5]" href="#sobre">
          Sobre Mim 
        </NavbarLink>
        <NavbarLink className="md:!text-white text-[0.875rem] md:hover:!text-[#B2BAE5] !text-black " href="#tech">Tecnologias</NavbarLink>
        <NavbarLink className="md:!text-white text-[0.875rem] md:hover:!text-[#B2BAE5] !text-black" href="#projects">Projetos</NavbarLink>
        <NavbarLink className="md:!text-white text-[0.875rem] md:hover:!text-[#B2BAE5] !text-black" href="#depoimentos">Depoimentos</NavbarLink>
        <NavbarLink className="md:!text-white text-[0.875rem] md:hover:!text-[#B2BAE5] !text-black" href="#social">Redes Sociais</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default myNavBar
