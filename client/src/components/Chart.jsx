import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import moment from 'moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const Chart = () => {
  const { id } = useParams()
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  )

  const chartData = response?.prices.map((price) => ({
    x: price[0],
    y: price[1].toFixed(2)
  }))

  const options = {
    responsive: true
  }

  const data = {
    labels: chartData?.map((price) => moment(price.x).format('MMMDD')),
    datasets: [
      {
        fill: true,
        label: id,
        data: chartData?.map((price) => price.y),
        borderColor: 'black',
        backgroundColor: 'blue'
      }
    ]
  }

  return (
    <div className="chart-wrapper">
      <Line className="chart" options={options} data={data} />
    </div>
  )
}

export default Chart
