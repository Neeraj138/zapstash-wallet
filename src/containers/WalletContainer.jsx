import { getMasterSeed } from "../utils/globalUtils"

export const WalletContainer = (props) => {
    const {selectedCoin, mnemonic} = props

    const masterSeed = getMasterSeed(mnemonic)
  return (
    <div>
        Wallet Container
    </div>
  )
}
