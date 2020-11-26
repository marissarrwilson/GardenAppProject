import react from 'React'
// import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
// import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Header from '../components/Header'
import PantryCard from "../components/PantryCard"




function Pantry() {

    

    return (
        <div>
            <Navbar />
            <Header />
            <PantryCard
                name=""
                image=""
                description=""
                weight=""

            />

        </div>

    )
}

export default Pantry;
