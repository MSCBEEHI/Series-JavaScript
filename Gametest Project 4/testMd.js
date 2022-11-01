import { world } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

world.events.beforeItemUse.subscribe((eventData) => {
    let player = eventData.source
    if(eventData.item.typeId === 'minecraft:stick'){
        openUI(player)
    }
})

function openUI(player){
    let color = ['red','green','blue']
    const from = new ModalFormData()
    from.title('test')
    from.dropdown('color', color)
    from.textField('name','example: kon')
    from.slider('money',0,1000,10)
    from.toggle('off/on')
    from.show(player).then((result) => {
        if(result.formValues[3] = false){
            player.tell(`${color[result.formValues[0]]} ${result.formValues[1]} ${result.formValues[2]}`)
        }
        if(result.formValues[3] = true){
            player.tell(`§l${color[result.formValues[0]]} ${result.formValues[1]} ${result.formValues[2]}§r`)
        }
    })
}
