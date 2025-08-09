import { getIcons } from "../assets/icons";
import { Counter } from "../components";
export default function Home() {
  const icons = getIcons();
  return (
    <>
      <div className="flex flex-col items-center text-text gap-10 w-full">
        <img src={icons.logo} alt="logo" />
        <Counter />
        <div className="flex gap-5 w-full items-center justify-center">
          <input type="text" placeholder="Task" className="border border-input rounded-[8px] w-[80%] px-3 py-2"/>
          <button className="text-text ">play</button>
        </div>
        <p>Nesse ciclo <strong>foque</strong> por <strong>26m</strong></p>
      </div>
    </>
  );
}
