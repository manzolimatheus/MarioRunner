export default function ground() {

  // rect esta gerando um retangulo com width de 100% e height de 48px
  // pos esta definindo x = 0 e y = 100% - 48px(Tamanho do retangulo)
  // outline adiciona uma borda ao objeto, no caso de 1 pixel
  // area definindo colisão
  // solid defindo como um objeto solido
  // color declarando cor, no caso verde
  add([
    sprite("ground", {
      width: width(),
      height: height(),
      tiled: true
    }),
    pos(0, height() - 48),
    area(),
    solid(),
  ]);
}
