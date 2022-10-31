import { world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";

world.events.beforeItemUse.subscribe((eventData) => {
    let player = eventData.source
    if(eventData.item.typeId === 'minecraft:bamboo'){
        yesorno(player)
    }
})

function yesorno(player){
    const from = new MessageFormData()
    from.title('Yesy or No')
    from.body('you need give apple')
    from.button1('Yes')
    from.button2('no')
    from.show(player).then((result) => {
        if(result.selection === 0){
            return;
        }
        if(result.selection === 1){
            player.runCommand('give @s apple')
        }
    })
}
