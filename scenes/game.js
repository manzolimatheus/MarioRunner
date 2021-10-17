import player from "../components/player.js";
import ground from "../components/ground.js";
import obstacle from "../components/obstacle.js";
import score from "../components/score.js";

export default function game() {
  loadSprite("player", "sprites/player.png");
  loadSprite("ground", "sprites/ground.png");
  loadSprite("pipe", "sprites/pipe.png");
  loadSprite("sky", "sprites/sky.gif");

  scene("game", () => {
    loop(2, () => {
      add([
        sprite("sky", {
          width: width(),
          height: height(),
        }),
        pos(width() + 300, 0),
        scale(0.6),
        z(-1),
        move(LEFT, 280),
      ]);
    });

    // Iniciando player
    player();
    ground();
    score();

    // Função infinita para spawnar obstaculos de tempos em tempos aleatoriamente
    function SpawnObstacle() {
      obstacle();
      wait(rand(0.5, 2), () => {
        SpawnObstacle();
      });
    }
    // Chamando a função
    SpawnObstacle();
  });

  go("game");
}
