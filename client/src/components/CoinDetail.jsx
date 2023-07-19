import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'

const CoinDetail = () => {
  const { id } = useParams()
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  )

  return (
    <div className="coindetail-container">
      <div className="coindetail-details">
        <img className="chart-img" src={response?.image.small} alt="" />
        <h1 className="chart-title">{response?.name}</h1>
      </div>
      <div className="description-container">
        <p
          className="chart-description"
          dangerouslySetInnerHTML={{ __html: response?.description.en }}
        ></p>
      </div>
    </div>
  )
}

export default CoinDetail
