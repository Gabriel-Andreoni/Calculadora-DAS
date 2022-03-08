import './saibaMais.css'
import fotoSaibaMais from '../images/foto-saiba-mais.png';
import leftArrow from '../images/left-arrow.png';
import { Link } from 'react-router-dom';

function saibaMais() {
    return (
        <div className="saibaMaisContainer">
            <div className="containerApresentacao">
                <section className="apresentacao">
                    <h1 className="tituloPrincipal">Como meu DAS é calculado?</h1>
                </section>
                <section className="apresentacaoImagem">
                    <img src={fotoSaibaMais} alt="" />
                </section>
            </div>

            <section className="explicacaoContainer">
                <article className="containerSaibaMais propsCustom">
                    <p className="descricaoEmLinha">Primeiro, precisamos saber a <mark>Receita</mark> Bruta acumulada durante o período de 1 ano.</p>

                    <p className="descricaoEmLinha">Para saber esse valor você precisa <mark>somar</mark> todos os <mark>faturamentos</mark> de sua empresa nesse período.</p>
                </article>
                <article className="containerSaibaMais">
                    <p className="descricaoEmLinha">Depois precisamos saber qual é a <mark>Alíquota</mark> referente ao faturamento.</p>

                    <p>Para saber qual Alíquota se encontra seu faturamento, consulte abaixo os seguintes links:
                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo1simples2019-1024x423.png.webp">I - Comércio</a>
                        </li>
                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo2simples2019-1024x423.png.webp">II - Indústria</a>

                        </li>
                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo3simples2019-1024x423.png.webp">III - Prestação de Serviço</a>

                        </li>
                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo4simples2019-1024x423.png.webp">IV - Prestação de Serviço</a>

                        </li>
                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo5simples2019-1024x423.png.webp">V - Prestação de Serviço</a>

                        </li>
                    </p>
                </article>
                <article className="containerSaibaMais propsCustom2">
                    <p className="descricaoEmLinha">Em seguia é necessário sabermos qual será o <mark>Valor</mark> a ser <mark>Descontado</mark> sobre a <mark>Alíquota</mark> que encontramos agora pouco.</p>

                    <p>Para saber qual valor correspondente, consulte abaixo os seguintes links:

                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo1simples2019-1024x423.png.webp">I - Comércio</a>
                        </li>

                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo2simples2019-1024x423.png.webp">II - Indústria</a>
                        </li>

                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo3simples2019-1024x423.png.webp">III - Prestação de Serviço</a>
                        </li>

                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo4simples2019-1024x423.png.webp">IV - Prestação de Serviço</a>
                        </li>

                        <li>
                            <a href="https://www.jornalcontabil.com.br/wp-content/uploads/2019/03/anexo5simples2019-1024x423.png.webp">V - Prestação de Serviço</a>
                        </li>

                    </p>
                </article>
                <article className="containerSaibaMais propsCustom3">
                    <p className="descricaoEmLinha">Com todos os valores em mãos é hora de realizarmos o cálculo da <mark>Alíquota Efetiva</mark>, que será responsável por calcular o DAS.</p>

                    <p className="descricaoEmLinha">
                        Para realizarmos o Cálculo da Alíquota Efetiva é necessarário realizar a seguinte fórmula:
                    </p>
                    
                    <section className="containerFormula">
                            <div>
                                <p>receita bruta dos 12 meses</p>
                            </div>

                            <div>
                                <p>X</p>
                            </div>

                            <div>
                                <p>alíquota referente ao faturamento dos 12 meses</p>
                            </div>

                            <div>
                                <hr />
                            </div>

                            <div>
                                <p>valor a deduzir sobre a alíquota</p>
                            </div>

                            <div>
                                <hr />
                            </div>

                            <div>
                                <p>receita bruta dos 12 meses</p>
                            </div>
                        </section>

                    <p className="descricaoEmLinha">Ao realizar essa conta chegaremos a <mark>Alíquota Efeiva</mark>, com ela é possível calcular o nosso DAS.</p>

                    <p className="descricaoEmLinha">Agora, para sabermos o valor do imposto é bem simples. Precisamos apenas do <mark>Faturamento Mensal</mark> que deseja calcular e a <mark>Alíquota Efetiva</mark> que acabamos de encontrar. </p>

                    <code className="containerResultado"> <mark>faturamento mensal</mark> X <mark>alíquota efetiva</mark> = <mark>valor do das</mark></code>
                </article>
            </section>

            <button className="goBack">
                    <Link to="/calculadora-das/"><img src={leftArrow} alt="" /></Link>
                </button>
        </div>
    )
}

export default saibaMais;