"use client";
import { useState } from 'react';

export default function Reserva() {
  const [diasSelecionados, setDiasSelecionados] = useState<number[] | null>(null);
  const [avancar, setAvancar] = useState(false);
  const [adultos, setAdultos] = useState<number>(1);
  const [criancas, setCriancas] = useState<number>(0);
  const [idadesCriancas, setIdadesCriancas] = useState<string[]>([]);

  const data = new Date();
  const hoje = data.getDate();

  const dias = [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, null, null, null],
  ];

  const handleClickDia = (dia: number) => {
    setDiasSelecionados((diasSelecionadosPrev) => {
      if(diasSelecionadosPrev?.includes(dia)) {
        return diasSelecionadosPrev.filter((d) => d !== dia);
      }
      else {
        return [...(diasSelecionadosPrev || []), dia];
      }
    })
  };

  const handleAdultosChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAdultos(Number(event.target.value));
  };

  const handleCriancasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const numCriancas = Number(event.target.value);
    setCriancas(numCriancas);
    setIdadesCriancas(Array(numCriancas).fill(''));
  };

  const handleIdadeChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const novasIdades = [...idadesCriancas];
    novasIdades[index] = event.target.value;
    setIdadesCriancas(novasIdades);
  };

  if(avancar) {
    return (
      <div className='flex flex-col items-center'>
        <h4 className="text-xl sm:text-2xl font-semibold text-secundaria">SELECIONE A QUANTIDADE DE PESSOAS</h4>
        <div className="pt-3 pb-5 grid grid-cols-2 gap-2 place-content-between w-[300px] sm:w-[620px]">
          <select
            value={adultos}
            onChange={handleAdultosChange}
            className="pl-3 py-3 border text-terciaria"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num} adultos
              </option>
            ))}
          </select>
          <select
            value={criancas}
            onChange={handleCriancasChange}
            className="pl-3 py-3 border text-terciaria"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num}>
                {num} crianças
              </option>
            ))}
          </select>
          {idadesCriancas.map((idade, index) => (
            <select
              key={index}
              value={idade}
              onChange={(event) => handleIdadeChange(index, event)}
              className="pl-3 py-3 border text-terciaria"
            >
              <option value="">Idade da criança {index+1}</option>
              {[...Array(13).keys()].map((num) => (
                <option key={num} value={num}>
                  {num} anos
                </option>
              ))}
            </select>
          ))}
        </div>
        <button className="bg-primaria rounded-full w-72 h-14 text-xl font-semibold text-white">PESQUISAR</button>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center'>
      <h4 className="text-xl sm:text-2xl font-semibold text-secundaria">SELECIONE O PERÍODO DA SUA RESERVA</h4>
      <div className="pt-3 pb-5 w-[300px] sm:w-[620px]">
        <div className="grid grid-cols-7 gap-2 place-content-between sm:gap-y-2">
          {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((dia) => (
            <div key={dia} className="text-center sm:text-lg text-terciaria">
              {dia}
            </div>
          ))}
          {dias.map((semana, indexSemana) =>
            semana.map((dia, indexDia) => {
              const isDisabled = dia !== null && dia <= hoje;
              
              return (
                <button
                  key={`${indexSemana}-${indexDia}`}
                  className={`text-center p-2 rounded text-primaria 
                    ${dia === diasSelecionados?.find((d) => d === dia)
                      ? 'bg-secundaria text-white'
                      : 'bg-transparent'} 
                    ${isDisabled ? 'opacity-30' : 'opacity-100'}
                  `}
                  onClick={() => dia && handleClickDia(dia)}
                  disabled={isDisabled}
                >
                  {dia || ''}
                </button>
              )
            })
              
          )}
        </div>
      </div>
      <button className="bg-primaria rounded-full w-72 h-14 text-xl font-semibold text-white" onClick={() => setAvancar(true)}>AVANÇAR</button>
    </div>
  );
};