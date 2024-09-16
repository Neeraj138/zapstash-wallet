import BtcIcon from "../assets/btc.svg";
import SolIcon from "../assets/sol.svg";
import EthIcon from "../assets/eth.svg";

const CoinChooser = (props) => {
  const { selectedCoin, handleSelect } = props;

  const coins = [
    {
      type: "BTC",
      icon: BtcIcon,
      label: "Bitcoin",
    },
    {
      type: "ETH",
      icon: EthIcon,
      label: "Ethereum",
    },
    {
      type: "SOL",
      icon: SolIcon,
      label: "Solana",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10 px-8 gap-4">
      <div className="font-medium text-xl break-words text-center">
        Click on a currency to generate wallet for it
      </div>
      <div className="grid grid-cols-3 gap-2">
        {coins.map((coin) => (
          <div
            className={`flex items-center justify-center p-2 gap-2 cursor-pointer hover:outline hover:outline-2 hover:outline-yellow-400 hover:rounded ${
              coin.type === selectedCoin
                ? "outline outline-2 outline-yellow-400 rounded"
                : ""
            }`}
            onClick={() => handleSelect(coin.type)}
            key={coin.type}
          >
            <img src={coin.icon} alt={coin.label} />
            <div className="hidden sm:flex">{coin.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinChooser;
