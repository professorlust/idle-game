"use strict";

/**
 * This file contains configuration information that should be able to be customized 
 * to allow different templates to work without code rewriting.
 * Fields that start with UI are related to HTML elements.
 * TODO: this should be moved to a Framework folder or something similiar.
 */

const __config = 
{
    ui_play_area: "ui-play-area", //if of where the player will click to gain resources
    ui_helpers_list: "ui-helpers-list",//list where the player helpers objects will be shown
    ui_max_coins: "ui-max-coins", //display the total number of max resource (int value)
    ui_coins: "ui-coins", //display the current number of resource (int value)
    ui_resource_name: "ui-resource-name", //display the resource name (eg.: coins)
    ui_max_resource_name: "ui-max-resource-name", //display the max resource name (eg.: max coins)

};

/**
 * custom config holds information related to the specific game.
 * TODO: This should be moved to a GAME folder or something similar.
 * Observation: ALL strings here (values) will be capitalized.
 */
const __custom_config = 
{
    resource_name: "coins",
    max_resource_name: "max coins",
    helpers_list_name: "helpers"
}



function ApplySettings () 
{

}