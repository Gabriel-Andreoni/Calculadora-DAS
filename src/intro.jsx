import './intro.css'
import Tax from './images/tax.png'
import {Link} from 'react-router-dom';

function Intro() {
        return (
            <>
                <div className="containerIntro" id="intro">
                    <section className="containerApresentacao">
                        <h1 className="h1Apresetancao">Calcule o valor do seu DAS agora mesmo</h1>
                        <article>
                            <button className="containerIntroBtn">
                                <a href="#faturamentoMensal">Calcular DAS</a>
                            </button>
                            <button className="containerIntroBtn">
                                <Link to="/calculadora-das/routes/saibaMais">Saiba Mais</Link>
                            </button>
                        </article>
                    </section>
                    <section className="containerImagem">
                        <img src={Tax} alt="foto de uma pessoa calculando o imposto" />
                    </section>
                </div>
            </>
        )
    }

export default Intro;