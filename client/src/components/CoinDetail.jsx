import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'

const CoinDetail = () => {
  const { id } = useParams()
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  )
  console.log(response)
  return (
    <div className="coindetail-container">
      <div className="coindetail-details">
        <img src={response?.image.small} alt="" />
        <h1>{response?.name}</h1>
      </div>
    </div>
  )
}

export default CoinDetail
