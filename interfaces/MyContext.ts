import { Context } from 'https://deno.land/x/grammy@v1.13.0/mod.ts';

// custom Context
interface BotConfig {
    botDeveloper: number;
    isDeveloper: boolean;
}
  
export type MyContext = Context & {
    config: BotConfig;
};