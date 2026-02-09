import {test} from '@playwright/test'
import { happypage } from '../pages/launchpage'


test('launch happy page', async({page})=>{
    const happy = new happypage(page)
    await happy.launchHappy()
})