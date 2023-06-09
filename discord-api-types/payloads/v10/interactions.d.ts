import type { APIApplicationCommandDMInteraction, APIApplicationCommandGuildInteraction, APIApplicationCommandInteraction } from './_interactions/applicationCommands';
import type { APIApplicationCommandAutocompleteDMInteraction, APIApplicationCommandAutocompleteGuildInteraction, APIApplicationCommandAutocompleteInteraction } from './_interactions/autocomplete';
import type { APIMessageComponentDMInteraction, APIMessageComponentGuildInteraction, APIMessageComponentInteraction } from './_interactions/messageComponents';
import type { APIModalSubmitDMInteraction, APIModalSubmitGuildInteraction, APIModalSubmitInteraction } from './_interactions/modalSubmit';
import type { APIPingInteraction } from './_interactions/ping';
export * from './_interactions/applicationCommands';
export * from './_interactions/autocomplete';
export * from './_interactions/base';
export * from './_interactions/messageComponents';
export * from './_interactions/modalSubmit';
export * from './_interactions/ping';
export * from './_interactions/responses';
/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export declare type APIInteraction = APIPingInteraction | APIApplicationCommandInteraction | APIMessageComponentInteraction | APIApplicationCommandAutocompleteInteraction | APIModalSubmitInteraction;
/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export declare type APIDMInteraction = APIApplicationCommandDMInteraction | APIMessageComponentDMInteraction | APIApplicationCommandAutocompleteDMInteraction | APIModalSubmitDMInteraction;
/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export declare type APIGuildInteraction = APIApplicationCommandGuildInteraction | APIMessageComponentGuildInteraction | APIApplicationCommandAutocompleteGuildInteraction | APIModalSubmitGuildInteraction;
//# sourceMappingURL=interactions.d.ts.map