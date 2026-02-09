import {Page } from "playwright-core";
import dotenv from 'dotenv';
import { ENV } from "../utils/env";
dotenv.config()

export class happypage{
    private page: Page;

    constructor (page:Page){
        this.page =page;
    }
 async launchHappy() {
    const url = ENV.URL;
  await this.page.goto(url)

 }
 }