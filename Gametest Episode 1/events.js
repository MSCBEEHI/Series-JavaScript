import { world } from "@minecraft/server";

world.events.beforeChat.subscribe((eventData) => {
    let player = eventData.sender
    let msg = eventData.message
    eventData.cancel = true
    player.runCommand(`tellraw @a {"rawtext":[{"text":"[§7MEMBER§r] ${player.name}: ${msg}"}]}`)
})

world.events.beforeItemUse.subscribe((eventData) => {
    let player = eventData.source
    if(eventData.item.typeId === 'minecraft:book'){
        player.runCommand('give @s apple')
    }
})