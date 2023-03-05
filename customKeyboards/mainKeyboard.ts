import { Keyboard } from 'https://deno.land/x/grammy@v1.13.0/mod.ts';

export const mainKeyboard = new Keyboard()
  .text('🎒 Inventory')
  //.text('🧰 Craft').row()
  .text('🗺 Explore').row()
  //.text('🏕 Adventure')
  .text('📝 Sheet')
  .text('📚 Lore').row()
  .resized();