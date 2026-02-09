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
     if (!url) {
    throw new Error("ENV.URL is not defined. Please check your .env file.");
  }

  await this.page.goto(url)

 }
 }