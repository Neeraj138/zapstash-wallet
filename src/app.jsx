import ThemeToggle from "./components/ThemeToggle";
import MainContainer from "./containers/MainContainer";

const App = () => {
  return (
    <div className="bg-yellow-50 min-h-screen dark:bg-slate-950 dark:text-yellow-50">
      <ThemeToggle />
      <div className="text-5xl font-medium text-center p-10 pb-5">
        ZapStash Wallet
      </div>
      <MainContainer />
    </div>
  );
};

export default App;
