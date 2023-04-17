import LocationInfo from "./LocationInfo"
import ResidentsCard from "./ResidentsCard"
import './styles/mainContent.css'

const MainContent = ({ location }) => {
    return (
        <>
            <LocationInfo location={location} />
            <div className="resident__container">
                {
                    location?.residents.map(url => (
                        <ResidentsCard
                            key={url}
                            url={url}
                        />
                    ))
                }
            </div></>
    )
}

export default MainContent