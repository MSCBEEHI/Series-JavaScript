import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.events.beforeItemUse.subscribe((eventData) => {
    let player = eventData.source
    if(eventData.item.typeId === 'minecraft:diamond'){
        menu(player)
    }
})

function menu(player){
    const from = new ActionFormData()
    from.title('menu')
    from.body('test')
    from.button('red\nasd')
    from.button('blue')
    from.button('green')
    from.show(player).then((result) => {
        if(result.selection === 0){
            player.runCommand('give @s bamboo')
        }
        if(result.selection === 1){
            player.tell('blue')
        }
        if(result.selection === 2){
            player.tell('green')
        }
    })
}