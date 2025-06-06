
import { Dropdown, DropdownItem } from "flowbite-react";

 function MyDropdown({onSelectSection}) {
  return (
    <div className="mb-10">
    <Dropdown label="Veja meus projetos" dismissOnClick={false} className="bg-[#B2BAE5] text-black hover:bg-transparent hover:text-white hover:border-white hover:border hover:cursor-pointer  ">
      <DropdownItem onClick={() => onSelectSection('Landing-Page')}>Landing Pages</DropdownItem>
      <DropdownItem onClick={() => onSelectSection('Sistema')}>Sistemas</DropdownItem>
      <DropdownItem onClick={() => onSelectSection('Website')}>WebSites</DropdownItem>
    </Dropdown>
    </div>
  );
}
export default MyDropdown
