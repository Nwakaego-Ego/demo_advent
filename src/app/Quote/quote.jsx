import axios from "axios";
import { useState, useEffect } from "react";

const useQuote = (api) => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(api);
      setQuote(response?.data.content);
      console.log(response.data.content);
    } catch (error) {
      setError("Error fetching quote");
    }
  };
  useEffect(() => {
    fetchQuote();
  }, [api]);

  return { quote, fetchQuote };
};

export default useQuote;
