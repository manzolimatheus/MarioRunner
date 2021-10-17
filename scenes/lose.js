import game from "./game.js";

export default function lose() {

  scene("lose", () => {
    add([text("Game Over!"), pos(center()), origin("center")]);

    add([
      text("Clique em qualquer lugar da tela para reiniciar o jogo.", {
        size: 24,
      }),
      pos(width() / 2, height() / 2 + 80),
      origin("center"),
    ]);

    mouseClick(() => {
      game();
    });
  });

  go("lose");
}
