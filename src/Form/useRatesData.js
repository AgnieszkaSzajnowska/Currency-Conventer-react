import { useEffect, useState } from "react";

const API_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_5rpB3t4z32Fk8JPJEN0gjftiXCXuRzyR9OV1pwlQ&currencies=&base_currency=PLN";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
              const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { data, meta } = await response.json();

                setRatesData({
                    state: "success",
                    rates: data,
                    date: meta,
                });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};