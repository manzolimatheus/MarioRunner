export default function obstacle() {

  // Aqui estamos criando um retangulo vertical que se moverá infinitamente para a esquerda
  // Cada retangulo vem em uma altura aleatoria entre 24px e 64px
  // Numa velocidade de 480px por s
  add([
    sprite('pipe',{
      width: 50,
      height: rand(24,80)
    }),
    area(),
    pos(width(), height() - 48),
    origin("botleft"),
    move(LEFT, 480),
    "obstacle",
  ]);
}
