import { useCallback, useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then("")
  }, [])
  

  return (
    <div>
      <h1>The Coin!</h1>
      {loading ? <strong>Loading...</strong> : null}

    </div>
  );
}

export default App;
