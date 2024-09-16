import { useState } from "preact/hooks";

export const Wallet = (props) => {
  const { wallet } = props;
  const [showDetails, setShowDetails] = useState(false);
  const getDetail = (key, val, isSensitive = false) => {
    return (
      <div className="flex flex-col">
        <div className="font-bold">{key}</div>
        <div
          className={`${
            isSensitive ? "blur-sm hover:blur-none" : ""
          } break-words`}
        >
          {val}
        </div>
      </div>
    );
  };
  if (!wallet) {
    return null;
  }
  return (
    <div className="my-2">
      <div
        className="flex items-center justify-between bg-yellow-400 hover:bg-yellow-500 dark:bg-slate-900 dark:hover:bg-slate-700 dark:text-slate-100 font-semibold rounded px-2 py-2 cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div>{`${wallet.type}-Wallet`}</div>
        <div>{wallet.path}</div>
      </div>
      {showDetails && (
        <div className="flex flex-col px-2 py-2 gap-1 bg-yellow-100 dark:bg-slate-800">
          {getDetail("Address", wallet.address)}
          {getDetail("Public Key", wallet.publicKey)}
          {getDetail("Private Key", wallet.privateKey, true)}
        </div>
      )}
    </div>
  );
};
