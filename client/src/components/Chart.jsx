import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'

const Chart = () => {
  const { id } = useParams()
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  )

  const chartData = response.prices.map((price) => ({
    x: price[0],
    y: price[1].toFixed(2)
  }))

  console.log(chartData)

  return <div></div>
}

export default Chart
