import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="pb-[40px] border-b border-solid border-[#f6f6f6]">
      <a href="#" className="flex items-center gap-4 w-fit">
        <img src={logo} alt="Logo" />
        <div>
          <h1 className="font-extrabold text-2xl tracking-tighter text-[#181818] uppercase">
            REACT PIZZA
          </h1>
          <p className="font-normal text-[16px] text-[#7b7b7b]">Самая реактивная пицца</p>
        </div>
      </a>
    </div>
  );
}
