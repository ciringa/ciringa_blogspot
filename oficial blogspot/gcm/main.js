console.log('Hello World!')
console.log('gerador de cancelamento 0.0, test 0 @thierrir2 01,27,21')


var nome = ''
function send()
{
  
nome = document.getElementById('inp1').value;


var lista = [
  "Foi cancelado por ser muito gostoso",
  'Foi cancelado por falar mal de kpop',
  'foi cancelado apos publicar twittes atacando o Fc bucetinha suja',
  'Foi cancelado por espalhar fake news sobre prostituição',
  'Foi cancelado apos espalhar fake news sobre orgia',
  'foi cancelado por fuder o jair messias Bolsonaro',
  'Foi cancelado porque entrou no BBB',
  'Foi cancelado por dar o cu em suruba gay',
  'Foi cancelado por causa de twittes racistas sobre Penguins ',
  'Foi cancelado por... nao precisa de motivo ',
  'Foi cancelado por vazar nudes do lula 😍',
  'Foi cancelado por pedo... pc Siqueira filia',
  'Foi cancelado por dar o cu para diogo defante',
  'Foi cancelado por dizer que hoemens tem direitos',
  'Foi cancelado por dizer que mulheres tem direitos'
  
  
  
  ]  
  
  
var rand = lista[Math.floor(Math.random()*lista.length )];


alert(nome + ' ' + rand)
}
