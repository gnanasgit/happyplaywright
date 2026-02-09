import {test,chromium} from '@playwright/test'
import { happypage } from '../pages/launchpage'


test('launch happy page', async({page})=>{
    const browser = await chromium.launch()
    const happy = new happypage(page)
    await happy.launchHappy()
    
})