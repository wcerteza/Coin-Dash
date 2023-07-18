import useAxios from '../hooks/useAxios'
import Coin from './Coin'

const Markets = () => {
  const { response } = useAxios(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=17&page=1&sparkline=false&locale=en'
  )

  return (
    <main className="market-wrapper">
      <h1 className="market-title">Market</h1>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </main>
  )
}
export default Markets
