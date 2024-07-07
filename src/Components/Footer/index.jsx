import styled from "styled-components";
import logo from "../../Assets/Logo.png"

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 90%);
    padding: 42px 0;
    border-top: 4px solid var(--azul);
    box-shadow:0px 0px 24px var(--azul)
`

const Footer = () => {
    return (
        <FooterEstilizado>
            <img src={logo} alt="Alura Flix" />
        </FooterEstilizado>
    )
}

export default Footer;