import Banner from "../../Components/Banner";
import styled from "styled-components";

const HomeEstilizado = styled.main`
    box-sizing: border-box;
    max-width: 100%;
    height: 100vh;
`


const Home = () => {
    return (
        <HomeEstilizado>
            <Banner />
        </HomeEstilizado>
    )
}

export default Home;