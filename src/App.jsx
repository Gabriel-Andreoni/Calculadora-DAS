import { useState } from 'react';
import upArrow from './images/up-arrow.png';
import downArrow from './images/down-arrow.png';
import Intro from './intro';
import './App.css';

function App() {

  const [faturamento, setFaturamento] = useState();
  const [aliquota, setAliquota] = useState();
  const [desconto, setDesconto] = useState();
  const [receita, setReceita] = useState();
  const [faturamentoMensal, setFaturamentoMensal] = useState();
  const [resultado, setResultado] = useState();

  function calcularDas(e) {
    e.preventDefault();
    let porcentagemAliquota = parseFloat(aliquota / 100).toFixed(3);

    let calculoAliquota = parseFloat(((faturamento * porcentagemAliquota) - desconto) / receita).toFixed(4);

    let calculoDAS = faturamentoMensal * calculoAliquota;

    setResultado(calculoDAS)
  }


  return (
    <>
      <Intro />
      <div className="container">
      <section className="containerChild" id="faturamentoMensal">
          <label htmlFor="receitaBruta">Faturamento do Mês Desejado</label>
          <input type="number" id="receitaBruta" required onChange={(e) => setFaturamentoMensal(e.target.value)} />

          <span className="navButton">
            <a href="#receita">
              <img src={downArrow} alt="botão de avançar" />
            </a>
          </span>
        </section>

        <section className="containerChild" id="receita">
          <label htmlFor="receitaBruta">Receita Bruta dos Doze Meses</label>
          <input type="number" id="receitaBruta" required onChange={(e) => setFaturamento(e.target.value)} />

          <span className="navButton">
            <a href="#aliquota">
              <img src={downArrow} alt="botão de avançar" />
            </a>
          </span>
        </section>

        <section className="containerChild" id="aliquota">
          <label htmlFor="Alíquota">Alíquota sobre o Faturamento dos Doze Meses</label>
          <input type="number" id="Alíquota" required onChange={(e) => setAliquota(e.target.value)} />

          <span className="navButton">
            <a href="#desconto">
              <img src={downArrow} alt="botão de avançar" />
            </a>
          </span>
        </section>

        <section className="containerChild" id="desconto">
          <label htmlFor="ValorDesconto">Valor a ser descontado sobre o Faturamento dos Doze Meses</label>
          <input type="number" id="ValorDesconto" required onChange={(e) => setDesconto(e.target.value)} />

          <span className="navButton">
            <a href="#calcular">
              <img src={downArrow} alt="botão de avançar" />
            </a>
          </span>
        </section>

        <section className="containerChild" id="calcular">
          <label htmlFor="receitaBruta">Faturamento dos Doze Meses</label>
          <input type="number" id="receitaBruta" required onChange={(e) => setReceita(e.target.value)} />

          <button className="containerChildBtn" onClick={calcularDas}>Calcular DAS</button>

          <span className="navButton">
            <a href="#intro">
              <img src={upArrow} alt="botão de avançar" />
            </a>
          </span>

          {resultado && (
            <section className="resultadoContainer">
              <p className="resultadoDAS">Valor do DAS: {resultado.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}</p>
            </section>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
