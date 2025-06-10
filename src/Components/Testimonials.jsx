
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Milene from "../assets/Milene1.jpg";

function Testimonials() {
  return (

    <section className="flex flex-col items-center gap-8" id="depoimentos">
    <h2 className="text-white text-2xl font-bold font-['Space_Grotesk'] md:text-[2.5rem]">Depoimentos</h2>
    <div className="flex flex-col items-center gap-8 md:flex-row md:mt-6">


    <Card className=" bg-[#2B2E36] w-[15rem] border-0">
      <div className="flex flex-col items-center pb-10 gap-4">
        <img alt="Milene" src={Milene} className="w-[7rem] h-[7rem] rounded-full"
        />
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Milene da Luz</h5>
        <span className="font-bold text-xl" >Designer</span>
        <p className="text-sm text-white dark:text-gray-400">Texto de testemunho</p>
      </div>
    </Card>
     </div>
     </section>
  );
}

export default Testimonials