import SessaoVideos from "../../Components/SessaoVideos";
import Banner from "../../Components/Banner";
import PaginaPadrao from "../../Components/PaginaPadrao";
import styled from "styled-components";



const Home = () => {
    return (
        
        <PaginaPadrao>
            <Banner />
            <SessaoVideos/>
        </PaginaPadrao>
    )
}

export default Home;