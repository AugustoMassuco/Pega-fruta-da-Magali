//variaveis
var imgCENARIO;
var magali;
var banana;
var uva;
var melancia;
var fruta = [];
var imgFruta = [];
var pontuação = 0;
var som;
var imgAbertura;
var controleTela = "INICIO";
var vidas = 3;




//CARREGAR IMAGENS
function preload() {
  imgCENARIO = loadImage("jogo/imagem/CENARIO.jpg");
  magali = new Magali();
  imgFruta[0] = loadImage("jogo/imagem/BANANA.png");
  imgFruta[1] = loadImage("jogo/imagem/UVA.png");
  imgFruta[2] = loadImage("jogo/imagem/MELANCIA.png");
  imgFruta[3] = loadImage("jogo/imagem/BOMBA.png");
  som_explosao = loadSound("jogo/SOM/bsong.mp3");
  som = loadSound("jogo/SOM/msong.mp3");
  imgAbertura =  loadImage("IMG/imagens_jogo_magali/1.png");
  imgFinal = loadImage("IMG/imagens_jogo_magali/3.png");
  
  fruta[0] = new Fruta();
  fruta[1] = new Fruta();
  fruta[2] = new Fruta();
}

//bordas do fundo
function setup() {
  createCanvas(600, 400).parent("jogo");
}


function keyPressed(){
    if(keyCode==32){
        controleTela = "JOGO"
    }
}

//imagem de fundo
function draw() {

  if(controleTela == "INICIO"){
   
    mostraAbertura();
  }
else{ if (controleTela == "JOGO"){


    executarJogo();
  }
    }
       

if(controleTela == "Game Over"){
  background(imgFinal);
  vidas = 3
}
}  

