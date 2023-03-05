import { Keyboard } from 'https://deno.land/x/grammy@v1.13.0/mod.ts';

export const startKeyboard = new Keyboard()
  .text('🆕 Roll New Punk').row()
  .text('📚 Lore')
  .resized();