import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>
            <td><img src="Fatec_Logo.png" className="App-logo" alt="logo" /></td>
            <td><img src="logos.png" className="App-logo" alt="logo" /></td>
          </tr>
        </table>

        <div class="App-sobre">
          <hr></hr>
          <h4 class="titulo">MISSÃO</h4>
          <p>Promover a educação tecnológica dentro de referenciais de excelência, formando profissionais com princípios éticos e responsabilidade social, capazes de contribuir ativamente e de forma inovadora para atender as demandas da sociedade.</p>
          <hr></hr>
          <h4 class="titulo">VISÃO</h4>
          <p>Ser referência como instituição de ensino superior e pesquisa tecnológica, caracterizada pela inovação, ética e compromisso com o desenvolvimento sustentável.</p>
          <hr></hr>
          <a href="https://www.vestibularfatec.com.br/home/">
            <img src="banner.png" className="App-logo" alt="logo" />
          </a>
        </div>


      </header>

    </div>
  );
}

export default App;
