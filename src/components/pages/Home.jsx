import MainTitle from "../layouts/mainTitle"
import Carosel from "../layouts/carosel"
import AboutUs from "../layouts/aboutUs"
import FeedBack from "../layouts/feedBack"
import FormContact from "../form/formContact"


const Home = () => {

    return (
        <div>
            <MainTitle />
            <Carosel />
            <AboutUs />
            <FeedBack />
            <FormContact />
        </div>
    )
}

export default Home