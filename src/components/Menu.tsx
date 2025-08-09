import { getIcons } from "../assets/icons";

export default function Menu() {
    const icons = getIcons();
  return (
    <>
      <nav className="w-screen flex justify-center absolute bottom-0">
        <ul className="flex items-center justify-center gap-15 bg-nav h-auto w-[70%] rounded-t-[22px] p-8">
          <li>
            <button className="bg-text rounded-[8px] p-2">
              <img src={icons.home} alt="home" />
            </button>
          </li>
          <li>
            <button className="bg-text rounded-[8px] p-2">
              <img src={icons.history} alt="history" />
            </button>
          </li>
          <li>
            <button className="bg-text rounded-[8px] p-2">
              <img src={icons.config} alt="config" />
            </button>
          </li>
          <li>
            <button className="bg-text rounded-[8px] p-2">
              <img src={icons.theme} alt="theme" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
