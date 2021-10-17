import lose from "../scenes/lose.js";

export default function player() {
  // ========== CRIANDO PLAYER ==========

  loadSound("jump", "../audio/jump.mp3");
  loadSound("djump", "../audio/djump.mp3");
  loadSound("lose", "../audio/lost.mp3");

  // Adicionado player na tela
  // sprite carrega uma imagem para o objeto
  // pos declara onde o objeto nasce
  // scale declara o tamanho do objeto
  // area define colisão
  // body define um corpo fisico sensivel a gravidade
  const player = add([
    sprite("player"),
    pos(80, 40),
    scale(0.03),
    area(),
    body({
      jumpForce: 700,
    }),
    // rotate(30), Rotaciona a sprite em 30 graus
    // color(0,0,255) Adiciona um overlay de cor, no caso preto
  ]);

  // ========== COMANDOS ==========

  let contador = 3;

  const labelContador = add([
    text(`2Jump: ${contador}`, {
      size: 36,
    }),
    pos(24, 84),
  ]);

  function check() {
    if (contador <= 0) {
      labelContador.text = "Recarregando...";

      wait(3, () => {
        contador += 3;
        labelContador.text = `FreeJump: ${contador}`;
      });
    }
  }

  keyPress("space", () => {
    if (contador > 0) {
      labelContador.text = `2Jump: ${contador}`;
      player.jump();
      play("djump");
      contador--;
      check();
    }
  });

  mouseClick(() => {
    //   Se o jogador estiver em contato com o chão, ele pode pular, feito através da função grounded do Kaboom
    if (player.grounded()) {
      play("jump", {
        volume: 0.5,
      });
      player.jump();
    }
  });

  // ========== COLISÕES ==========

  //   collides é uma função de area(),
  // Onde cada vez que o player colidir com o objeto de tag obstacle
  // Ele mostrará um sprite de kaboom na posição do player e mexerá a tela
  player.collides("obstacle", () => {
    addKaboom(player.pos);
    play("lose");
    shake();
    wait(0.2, () => {
      lose();
    });
  });
}
