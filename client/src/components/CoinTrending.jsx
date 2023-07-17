const CoinTrending = ({ coin }) => {
  return (
    <>
      <div className="trending-list">
        <div className="trending-items">
          <span>{coin.score + 1}.</span>
          <img src={coin.small} alt="" />
        </div>
      </div>
    </>
  )
}

export default CoinTrending
