import apidata from "../Api/thapa_series.json";
import "./NetflixCard.CSS";

function NetflixCard() {
    return (
        <div className="container">
            {apidata.map((currEle) => (
                <div className="card" key={currEle.id}>
                    <h1 className="card-title">{currEle.name}</h1>
                    <img
                        src={currEle.img_url}
                        alt={currEle.name}
                        className="card-image"
                    />

                    <div className="card-content">
                        <p><strong>Rating:</strong> {currEle.rating} ⭐</p>
                        <p><strong>Description:</strong> {currEle.description}</p>
                        <p><strong>Cast:</strong> {currEle.cast}</p>
                        <p><strong>Genre:</strong> {currEle.genre}</p>

                        <a href={currEle.watch_url} target="_blank" rel="noopener noreferrer">
                            <button className="watch-button">Watch Now</button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NetflixCard;
