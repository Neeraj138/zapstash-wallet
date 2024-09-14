import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <div className="bg-yellow-50 min-h-screen dark:bg-slate-950 dark:text-yellow-50">
      <ThemeToggle/>
      <div className="text-4xl font-medium text-center p-8">ZapStash Wallet</div>
      <div className=""></div>
    </div>
  )
};

export default App;
