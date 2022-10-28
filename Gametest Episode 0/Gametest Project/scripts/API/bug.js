import { system } from '@minecraft/server'
system.events.beforeWatchdogTerminate.subscribe(evd => evd.cancel = true)
/**
 * @author MSC BEEHI
 * @description This Script was created by MSC BEEHI
 * @copyright 2021-2022 MSCBEEHI
 * @youtube https://youtube.com/c/MSCBEEHI
 * @discordServer https://bit.ly/3szUBmK
 */