const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100; 
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setIMC(imcCalculado.toFixed(2)); 
    }
  };

  const classificarIMC = () => {
    if (imc) {
      if (imc < 18.5) {
        return 'Baixo peso';
      } else if (imc < 24.9) {
        return 'Peso normal';
      } else if (imc < 29.9) {
        return 'Sobrepeso';
      } else {
        return 'Obesidade';
      }
    }
    return '';
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Você está classificado como: {classificarIMC()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
