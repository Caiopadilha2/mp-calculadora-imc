import { useState } from "react"
import Button from "./components/Button"
import Input from "./components/Input"
import Label from "./components/Label"
import RefereceTable from "./components/ReferenceTable"
import {calculateIMC, classifyIMC} from './utils/IMC'

function App() {

  const [IMCData, setIMCData] = useState<null | {weight: number, height: number, imc: number, imcResult: string }> (null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // get Data from form
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as { weight: string, height: string}
    const { weight, height } = data;

    // Evitar que envie o formulário com campos vazios

    if (!weight || !height) {
      alert('Preencha todos os campos.')
      return
    }

    // Parse e handle das string para numeros
    const weightNumber = parseFloat(weight.replace(',', '.'))
    const heightNumber = parseFloat(height.replace(',', '.')) / 100;
    
    
    if (isNaN(weightNumber) || isNaN(heightNumber)) {
      alert('Os valores precisam ser numéricos.')
      return
    }
    // handle invalid numbers
    if (weightNumber <= 0 || heightNumber <= 0) {
      alert('Os valores precisam ser maiores que zero.')
      return
    }

    if (heightNumber < 0.5 || heightNumber > 2.5) {
      alert('Altura inválida. Deve estar entre 0.5 e 2.5.')
      return
    }

    // Caculate IMC
    const imc = calculateIMC(weightNumber, heightNumber)
    const imcResult = classifyIMC(imc)


    // Classificar o IMC

    // Set result

    setIMCData({
      weight: weightNumber,
      height: heightNumber,
      imc,
      imcResult
    })

    // Limpar formulário

    event.currentTarget.reset()

   
  }

  function handleClickReset(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIMCData(null)
  }
  
  return (
    <main className="bg-white max-w-4xl mx-auto md:py-24 md:px-48 px-5 py-10">
      <section id="form">
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="weight" >Peso (Kg)</Label>  
            <Input disabled={!!IMCData} name="weight" type="text" id="weight"/>
          </div>
          <div className="mt-4">
            <Label htmlFor="height">Altura (Cm)</Label>
            <Input disabled={!!IMCData} name="height" type="text" id="height"/>
          </div>
          {IMCData ? (
            <Button onClick={handleClickReset} type="button">Refazer</Button>
          ) : (<Button type="submit">Calcular IMC</Button>)}

        </form>
      </section>

      <section id="result" className="py-10 px-4 h-40">
      {IMCData ? (
        <table className="text-center text-xs md:text-base md:[&>tbody>tr>td]:p-2 md:[&>tbody>tr>td]:px-4 [&>tbody>tr>td]:px-2 text-neutral-500 mx-auto">
          <thead>
            <tr className="font-bold border-b border-b-rose-400">
              <th>Peso</th>
              <th>Altura</th>
              <th>IMC</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="sm:text-xl">
              <td>{IMCData.weight} Kg</td>
              <td>{IMCData.height * 100} cm</td>
              <td>{IMCData.imc.toFixed(2)}</td>
              <td>{IMCData.imcResult}</td>
            </tr>
          </tbody>
        </table>
      ) : (        <p className="text-center text-neutral-400 text-xl">Saiba agora se está no seu peso ideal.</p>)}
      </section>
      <section id="table">
        <RefereceTable />
      </section>
    </main>
  )
}

export default App
