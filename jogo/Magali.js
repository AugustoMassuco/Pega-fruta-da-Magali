//classe do jogador principal
//atributos da personagem (posição,altura,largura)
class Magali {
    constructor() {
      this.imagem = loadImage("jogo/imagem/MAGALI.png");
      this.posX = 240;
      this.posY = 290;
      this.velocidade = 5;
      this.largura = 100;
      this.altura = 110;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    //como ela vai se movimetar (seta da esquerda e da direita no caso)
    mova() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
  
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }