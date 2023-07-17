import { useParams } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
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
  console.log(chartData)
  const options = {
    responsive: true
  }

  const data = {
    labels: ['1', '20', '2'],
    datasets: [
      {
        fill: true,
        label: id,
        data: ['10', '2', '90'],
        borderColor: 'black',
        backgroundColor: 'blue'
      }
    ]
  }
  // console.log(chartData)

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart
