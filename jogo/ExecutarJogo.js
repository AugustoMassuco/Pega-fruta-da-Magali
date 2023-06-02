function executarJogo(){
    background(imgCENARIO);
  magali.mova();
  //ciclo do movimento daas frutas
  for (var i = 0; i < fruta.length; i++) {
    fruta[i].mova();
    if (fruta[i].posY > 450) {
      fruta[i] = new Fruta(fruta[i].posY, fruta[i].imagem);
    }
    // código para as frutas serem coletadas.
    if (
      magali.xInicial < fruta[i].xFinal &&
      magali.xFinal > fruta[i].xInicial &&
      magali.yInicial < fruta[i].yFinal &&
      magali.yFinal > fruta[i].yInicial
    ) {
      //se a condição...
      if (fruta[i].imagem == imgFruta[3]) {
        pontuação = 0;
        fruta[i] = new Fruta();
        //audio da bomba
        som_explosao.play();
        vidas -=1;
      if(vidas == 0){
        controleTela = "Game Over";
      }
      }
      //senão
      else {
        pontuação += 1;
        fruta[i] = new Fruta();
        //audio da pontuação
        som.play();
      }
    }
  }
  //texto da pontuação
  textSize(15);
  text("PONTUAÇÃO TOTAL: " + pontuação, 40, 50);

  textSize(15);
  text("VIDAS: " + vidas, 40, 70);
}