import { useState } from "preact/hooks";
import Mnemonic from "../components/Mnemonic";
import CoinChooser from "../components/CoinChooser";
import { WalletContainer } from "./WalletContainer";

const MainContainer = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <div>
      <Mnemonic
        mnemonic={mnemonic}
        setMnemonic={setMnemonic}
        setSelectedCoin={setSelectedCoin}
      />
      {mnemonic && (
        <CoinChooser
          selectedCoin={selectedCoin}
          handleSelect={setSelectedCoin}
        />
      )}
      {mnemonic && selectedCoin && (
        <WalletContainer selectedCoin={selectedCoin} mnemonic={mnemonic} />
      )}
    </div>
  );
};

export default MainContainer;
