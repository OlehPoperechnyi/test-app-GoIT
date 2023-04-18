import SearchField from "../../components/SeachField/SearchField";
import './Home.css';
import {useRef} from "react";

const Home = () => {
    const searchFieldRef = useRef();

    return <div className="homeContainer">
        <SearchField ref={searchFieldRef} />
    </div>
}

export default Home;
