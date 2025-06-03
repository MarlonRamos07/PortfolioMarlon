function MyButton({text}) {

    return(
        <button className="bg-[#B2BAE5] hover:border-solid-[#B2BAE5] hover:bg-[#2B2E36] hover:text-white w-[5.25rem] h-[2.625rem] md:w-[5.438rem] md:h-[2.5rem] font-bold text-[0.875rem] md:text-w-[1.313rem] rounded-[20px] ">
              <a href="#contato" className="w-full h-full flex items-center justify-center">
                {text}
            </a>
        </button>
    )
}



export default MyButton