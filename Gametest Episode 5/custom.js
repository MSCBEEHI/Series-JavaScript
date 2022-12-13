import { world } from '@minecraft/server'

let prefix = '*'

class custom {
    constructor(keyword, command = [], description) {
        this.k = prefix + keyword
        this.c = command
        this.d = `§7<${description}>§r`
    }
}

let data = [
    new custom('apple', ['give @s apple', 'say you get apple'], 'use to get apple'),
    new custom('spawn', ['tp @s 0 10 0'], 'use go to spawn')
]

world.events.beforeChat.subscribe((eventData) => {
    let player = eventData.sender
    let msg = eventData.message
    if(msg.startsWith(prefix)) {
        eventData.cancel = true
        for(let t of data) {
            if(msg.startsWith(t.k)) {
                t.c.map(r => player.runCommandAsync(r))
                break
            } else if (msg.startsWith(`${prefix}help`)) {
                let list = [`คอมมานที่มีอยู่ทั้งหมดจำนวน ${data.length}\n`]
                data.map(p => list.push(`${p.k} ${p.d}\n`))
                player.tell(list.join(''))
                break
            }
        }
    }
})
