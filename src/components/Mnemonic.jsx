import { useState } from "preact/hooks";
import { getMnemonic } from "../utils/globalUtils";

const Mnemonic = (props) => {
  const { mnemonic, setMnemonic } = props;

  const handleGenerateMnemonic = (noOfWords = 24) => {
    setMnemonic(getMnemonic(noOfWords));
  };

  const splitMnemonic = (mnemonic) => {
    const str = mnemonic.toString();
    const arr = str.split(/\s+/);
    return arr;
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {splitMnemonic(mnemonic).map((str) => (
          <div className="text-center">{str}</div>
        ))}
      </div>
      <button
        className="font-medium bg-yellow-400 py-2 px-4 rounded hover:bg-yellow-600 dark:text-amber-950"
        onClick={() => handleGenerateMnemonic()}
      >
        Generate Mnemonic
      </button>
    </div>
  );
};

export default Mnemonic;
