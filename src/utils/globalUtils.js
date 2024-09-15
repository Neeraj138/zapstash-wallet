import { generateMnemonic, mnemonicToSeedSync } from "bip39";

export const getMnemonic = (noOfWords) => {
  const bits = noOfWords === 24 ? 256 : 128;
  return generateMnemonic(bits);
};

export const getMasterSeed = (mnemonic, passphrase = "mnemonic") => {
  return mnemonicToSeedSync(mnemonic, passphrase);
};
