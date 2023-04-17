import useFetch from "../hooks/useFetch"
import './styles/residentCard.css'

const ResidentsCard = ({ url }) => {

    const [resident] = useFetch(url)

    return (
        <section className="resident">
            <header className="resident__header">
                <img className="resident__avatar" src={resident?.image} alt="" />
                <div className="resident__status">
                    <div className={`resident__status--circle ${resident?.status}`}></div>
                    <span className="resident__status--label">{resident?.status}</span>
                </div>
            </header>
            <main className="resident__main">
                <h3 className="resident__name">{resident?.name}</h3>
                <hr className="resident__hr" />
                <ul className="resident__list">
                    <li className="resident__item">
                        <span className="resident__item--label">Specie</span>{resident?.species}</li>
                    <li className="resident__item">
                        <span className="resident__item--label">Origin</span>{resident?.origin.name}</li>
                    <li className="resident__item">
                        <span className="resident__item--label">Eppisodes where appear</span>{resident?.episode.length}</li>
                </ul>
            </main>
        </section>
    )
}

export default ResidentsCard