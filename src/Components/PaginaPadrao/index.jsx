import styled from "styled-components"
import Footer from "../Footer"
import Header from "../Header"

const BodyEstilizado = styled.div`
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
`


const PaginaPadrao = ({ children }) => {
    return (
        <BodyEstilizado>
            <Header/>
            {children}
            <Footer/>
        </BodyEstilizado>
    )
}

export default PaginaPadrao;