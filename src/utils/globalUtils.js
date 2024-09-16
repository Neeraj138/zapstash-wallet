import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import * as bs58 from "bs58";
import { hdkey } from "@ethereumjs/wallet";
import BIP32Factory from "bip32";
import * as ecc from "tiny-secp256k1";
import { bitcoin } from "bitcoinjs-lib/src/networks";
import { payments } from "bitcoinjs-lib";
import { BTC, ETH, SOL } from "./Constans";

export const getMnemonic = (noOfWords) => {
  const bits = noOfWords === 24 ? 256 : 128;
  return generateMnemonic(bits);
};

export const getMasterSeed = (mnemonic, passphrase = "mnemonic") => {
  return mnemonicToSeedSync(mnemonic, passphrase);
};

const getAddress = (node, network) => {
  return payments.p2pkh({ pubkey: node.publicKey, network }).address;
};

export const createBtcWallet = (masterSeed, acntNo) => {
  const bip32 = BIP32Factory(ecc);
  const path = `m/44'/0'/${acntNo}'/0'`;
  const node = bip32.fromSeed(masterSeed);
  const child = node.derivePath(path);

  return {
    address: getAddress(child, bitcoin),
    publicKey: bs58.default.encode(child.publicKey),
    privateKey: child.toWIF(),
    path: path,
    acntNo: acntNo,
    type: BTC,
  };
};

export const createEthWallet = (masterSeed, acntNo) => {
  const path = `m/44'/60'/${acntNo}'/0'`;
  const node = hdkey.EthereumHDKey.fromMasterSeed(masterSeed);
  const child = node.derivePath(path).getWallet();
  return {
    address: child.getAddressString(),
    publicKey: child.getPublicKeyString(),
    privateKey: child.getPrivateKeyString(),
    path: path,
    acntNo: acntNo,
    type: ETH,
  };
};

export const createSolWallet = (masterSeed, acntNo) => {
  const path = `m/44'/501'/${acntNo}'/0'`;
  const keypair = Keypair.fromSeed(
    derivePath(path, masterSeed.toString("hex")).key
  );
  return {
    address: keypair.publicKey.toBase58(),
    publicKey: keypair.publicKey.toBase58(),
    privateKey: bs58.default.encode(keypair.secretKey),
    path: path,
    acntNo: acntNo,
    type: SOL,
  };
};
