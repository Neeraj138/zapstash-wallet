import { useState } from "preact/hooks";
import { Wallet } from "../components/Wallet";
import { BTC, ETH, SOL } from "../utils/Constans";
import {
  createBtcWallet,
  createEthWallet,
  createSolWallet,
  getMasterSeed,
} from "../utils/globalUtils";
import FilterIcon from "../assets/filter.svg";
import BtcIcon from "../assets/btc.svg";
import EthIcon from "../assets/eth.svg";
import SolIcon from "../assets/sol.svg";

const renderWallets = (wallets, filterCoin) => {
  const filteredWallets = wallets.filter((wallet) =>
    !filterCoin ? true : wallet.type === filterCoin
  );
  const noOfWallets = filteredWallets.length;
  const walletsComp = [];
  for (let i = noOfWallets - 1; i >= 0; i--) {
    walletsComp.push(<Wallet wallet={filteredWallets[i]} />);
  }
  return walletsComp;
};

export const WalletContainer = (props) => {
  const { selectedCoin, mnemonic } = props;
  const [wallets, setWallets] = useState([]);
  const [acntNos, setAcntNos] = useState({ BTC: 0, ETH: 0, SOL: 0 });
  const [filterCoin, setFilterCoin] = useState("");

  const handleCreateWallet = (selectedCoin) => {
    const masterSeed = getMasterSeed(mnemonic);
    let wallet = {};
    switch (selectedCoin) {
      case BTC:
        wallet = createBtcWallet(masterSeed, acntNos[selectedCoin]);
        break;
      case ETH:
        wallet = createEthWallet(masterSeed, acntNos[selectedCoin]);
        break;
      case SOL:
        wallet = createSolWallet(masterSeed, acntNos[selectedCoin]);
        break;
      default:
        console.log("Invalid/no selected coin");
    }
    setAcntNos((prevAcntNos) => ({
      ...prevAcntNos,
      [selectedCoin]: prevAcntNos[selectedCoin] + 1,
    }));
    setWallets((prevWallets) => [...prevWallets, wallet]);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-screen-lg m-auto">
      <button
        className="font-medium bg-yellow-400 py-2 px-4 rounded hover:bg-yellow-600 dark:text-amber-950 disabled:bg-yellow-700"
        onClick={() => handleCreateWallet(selectedCoin)}
        disabled={!selectedCoin}
      >
        Create Wallet
      </button>
      {Array.isArray(wallets) && wallets.length > 0 ? (
        <div className="w-full py-4">
          <div className="flex items-center justify-between px-2">
            <div className="font-semibold text-lg">WALLETS</div>
            <div className="flex items-center gap-2">
              <div
                className={`cursor-pointer p-2 rounded ${
                  filterCoin === BTC ? "bg-yellow-400" : ""
                }`}
                onClick={() => setFilterCoin(filterCoin === BTC ? "" : BTC)}
              >
                <img src={BtcIcon} className="w-6 h-6" />
              </div>
              <div
                className={`cursor-pointer p-2 rounded ${
                  filterCoin === ETH ? "bg-yellow-400" : ""
                }`}
                onClick={() => setFilterCoin(filterCoin === ETH ? "" : ETH)}
              >
                <img src={EthIcon} className="w-6 h-6" />
              </div>
              <div
                className={`cursor-pointer p-2 rounded ${
                  filterCoin === SOL ? "bg-yellow-400" : ""
                }`}
                onClick={() => setFilterCoin(filterCoin === SOL ? "" : SOL)}
              >
                <img src={SolIcon} className="w-6 h-6" />
              </div>
              <div>
                <img src={FilterIcon} className="w-6 h-6" />
              </div>
            </div>
          </div>
          {renderWallets(wallets, filterCoin)}
        </div>
      ) : null}
    </div>
  );
};
