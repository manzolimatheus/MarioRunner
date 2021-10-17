export default function score(){

    let score = 0

    const scoreLabel = add([
        text(`${score}pts`),
        pos(24,24)
    ])

    action(() => {
        score++
        scoreLabel.text = `${score}pts`
    })

}