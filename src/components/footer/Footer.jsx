import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import { SlCalender } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import "../footer/footer.css";


export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <div className="colunaFooter">
                    <h3>Quem somos?</h3>
                    <span className="divisoria" />
                    <p>Somos a plataforma que valoriza o trabalho dos jardineiros e conecta apaixonados por jardins a serviços personalizados.</p>
                    <div className="linkIcons">
                        <a href="#" className="backgroundIcon"><GrFacebookOption /></a>
                        <a href="#" className="backgroundIcon"><GrInstagram /></a>
                        <a href="#" className="backgroundIcon"><GrLinkedin /></a>
                        <a href="#" className="backgroundIcon"><GrGithub /></a>
                    </div>
                </div>
                <div className="colunaFooter">
                    <h3>Conheça</h3>
                    <span className="divisoria" />
                    <nav>
                        <ul className="listFooter">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">UMblog</a></li>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Nossos serviços</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="colunaFooter">
                    <h3>Confira:</h3>
                    <span className="divisoria" />
                    <nav>
                        <ul className="listFooterContent">
                            <li>
                                <a href="#">Conheça mais sobre jardinagem</a>
                                <div className="confiraFooter">
                                    <span className="IconsFooter"><SlCalender /></span>
                                    <span className="calender">23 May 2021</span>
                                </div>
                            </li>
                            <li>
                                <a href="#">Qual é a nossa missão?</a>
                                <div className="confiraFooter">
                                    <span className="IconsFooter"><SlCalender /></span>
                                    <span className="calender">23 May 2021</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <br />
            <div className="copyright">
                <p className="copy">&copy; copyright 2023 by UMBU</p>
                <button className="showUp"><IoIosArrowUp /></button>
            </div>
        </footer>
    )
}