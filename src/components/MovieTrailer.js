import React from 'react'

function MovieTrailer() {
  const [play, setPlay] = React.useState(false)
  const url = play
    ? `https://www.youtube.com/embed/tu-bgIg-Luo?autoplay=1`
    : `https://www.youtube.com/embed/tu-bgIg-Luo`
  return (
    <div className="trailer">
      <iframe
        width="560"
        height="315"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={() => setPlay(true)}>Play</button>
    </div>
  )
}

export default MovieTrailer