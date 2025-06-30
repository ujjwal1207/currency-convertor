import { use, useState } from "react";
import React from "react";
import useCurrency from "./hooks/useCurrency";
import { InputBox } from "./components";
import "./App.css";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [result, setresult] = useState(0);

  const currencyinfo = useCurrency(from);

  const options = Object.keys(currencyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setresult(amount);
    setamount(result);
  };

  const convert = () => {
    setresult(amount * currencyinfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/025/516/541/small/generative-ai-stock-market-chart-lines-financial-graph-on-technology-abstract-background-represent-financial-crisis-financial-meltdown-technology-concept-trading-market-concept-free-photo.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountchange={(e) => {
                  setamount(e);
                  setresult(e * currencyinfo[from]);
                }}
                selectCurrency={from}
                onCurrencychange={(e) => {
                  setfrom(e);
                  currencyinfo=useCurrency(e);
                  setresult(amount * currencyinfo[e]);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={result}
                currencyOption={options}
                onAmountchange={(e) => {
                  setresult(e * currencyinfo[to]);
                }}
                selectCurrency={to}
                onCurrencychange={(e) => {
                  setto(e);
                  setresult(amount * currencyinfo[e]);
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
