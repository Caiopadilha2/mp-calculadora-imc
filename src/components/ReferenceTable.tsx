function RefereceTable() {
  return (
    <table className="mx-auto text-neutral-600 text-left md:text-base text-sm">
          <thead className="bg-zinc-100 text-rose-400 ">
            <tr>
              <th className="px-6 py-2">IMC</th>
              <th className="px-6 py-2">Classificação</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-zinc-100 [&>tr>td]:px-6 [&>tr>td]:py-1">
            <tr>
              <td>Menor que 18.5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18.5 e 24.9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29.9</td>
              <td>Acima do peso</td>
            </tr>
            <tr>
              <td>Entre 30 e 34.9</td>
              <td>Obesidade grau I</td>
            </tr>
            <tr>
              <td>Entre 35 e 39.9</td>
              <td>Obesidade grau II (severa)</td>
            </tr>
            <tr>
              <td>Maior que 40</td>
              <td>Obesidade grau III (mórbida)</td>
            </tr>
          </tbody>
        </table>
  )
}

export default RefereceTable;