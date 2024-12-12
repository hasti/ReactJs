import { useEffect, useState } from 'react';



function useCurrencyInfo(currency: string){
    const [currencyInfo, setCurrencyInfo] = useState([]);
    const currencyUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
   // console.log(currencyUrl);
    useEffect(() => {
        fetch(currencyUrl)
        .then(response => response.json())
        .then(response => {setCurrencyInfo(response[currency]);
        })
    }, [currency, currencyUrl]);

    return currencyInfo;
}

export default useCurrencyInfo;
 /*
 In the above code, we have created a custom hook  useCurrencyInfo  which takes a currency as an argument and returns the currency information. 
 Now, let’s use this custom hook in our  CurrencyConverter  component.
 */