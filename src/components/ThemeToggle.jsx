import { useEffect, useState } from "preact/hooks";
import LightIcon from "./../assets/light.svg";
import DarkIcon from "./../assets/dark.svg";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currTheme = localStorage.getItem("theme")
    if (currTheme === "dark") {
        document.documentElement.classList.add("dark")
        setIsDark(true)
    } else {
        setIsDark(false)
    }
  }, []);

  const toggleTheme = (theme) => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark")
        setIsDark(true)
    } else {
        document.documentElement.classList.remove("dark")
        setIsDark(false)
    }
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="top-0 right-0 absolute p-2">
      {!isDark && (
        <button
          onClick={() => toggleTheme("dark")}
          className="p-2 rounded-lg hover:bg-yellow-200 text-center"
        >
          <img className="h-5 w-5" src={LightIcon}/>
        </button>
      )}
      {isDark && (
        <button
          onClick={() => toggleTheme("light")}
          className="p-2 rounded-lg hover:bg-slate-800 text-center"
        >
          <img className="h-5 w-5" src={DarkIcon}/>
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
