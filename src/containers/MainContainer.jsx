import { useState } from "preact/hooks";
import Mnemonic from "../components/Mnemonic"
import CoinChooser from "../components/CoinChooser";
import { WalletContainer } from "./WalletContainer";

const MainContainer = () => {
    const [mnemonic, setMnemonic] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(null);

    console.log(selectedCoin)

  return (
    <div>
        <Mnemonic mnemonic={mnemonic} setMnemonic={setMnemonic}/>
        <CoinChooser selectedCoin={selectedCoin} handleSelect={setSelectedCoin}/>
        <WalletContainer selectedCoin={selectedCoin} mnemonic={mnemonic}/>
    </div>
  )
}

export default MainContainer