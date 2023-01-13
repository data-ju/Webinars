let horasDiarias = document.querySelector('#Horas_Diárias');
let diasTrabalhados = document.querySelector('#Dias_Trabalhados');
let despesas = document.querySelector('#Despesas_Fixas');
let equipamento = document.querySelector('#Valor_Equipamento');

let resultado = document.querySelector('#Valor_Total');
let Hidden = document.querySelector('#Resultado');

const enviar = document.querySelector('#calcular');

enviar.addEventListener('click', function(e){
  e.preventDefault();
  
  if(horasDiarias.value == "" || diasTrabalhados.value == "" || despesas.value == ""){
        alert('Preencha os campos vazios.');
  } else{
    // Valor do equipamento pago por mês
let equipamentoMês= (Number(equipamento.value) / 12);     
    // Despesas mensais + Equipamento mensal
let despesasTotais = Number(despesas.value) + equipamentoMês;
   // Horas trabalhadas por mês
let HorasMês= Number(horasDiarias.value) * Number(diasTrabalhados.value);
    
const valorHora = (despesasTotais / HorasMês / 0.5).toFixed(2);
    
Hidden.classList.remove('Hidden')
resultado.innerText = `R$ ${valorHora}`
     }
});