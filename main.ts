player.onTravelled(SWIM_WATER, function () {
    blocks.fill(
    ICE,
    pos(-1, -1, -1),
    pos(1, -1, 1),
    FillOperation.Replace
    )
    player.say("¡Es increíble!")
})
player.onChat("piscina", function () {
    blocks.fill(
    WATER,
    pos(-4, -1, -4),
    pos(4, -1, 4),
    FillOperation.Replace
    )
})
