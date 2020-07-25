const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = "1"
const developers = "496996678088392725"

////////


client.on('message', async msg => {
var prefix = ".";
var user = msg.author;
var a = msg.guild.roles.find("name", 'League Of Legends');
if(!a){
a = await msg.guild.createRole({
name: "League Of Legends",
color: "#ffffff",
permissions:[]
})
 
}
var m = msg.guild.roles.find("name", 'Minecraft');
if(!m){
m = await msg.guild.createRole({
name: "Minecraft",
color: "#ffffff",
permissions:[]
})
}
var f = msg.guild.roles.find("name", 'Fortnite');
if(!f){
f = await msg.guild.createRole({
name: "Fortnite",
color: "#ffffff",
permissions:[]
})
}
var m = msg.guild.roles.find("name", 'Minecraft');
if(!m){
m = await msg.guild.createRole({
name: "Minecraft",
color: "#ffffff",
permissions:[]
})
}
var f = msg.guild.roles.find("name", 'Cs GO');
if(!f){
f = await msg.guild.createRole({
name: "Cs GO",
color: "#ffffff",
permissions:[]
})
}
var b = msg.guild.roles.find("name", 'Creative Destruction');
if(!b){
b = await msg.guild.createRole({
name: "Creative Destruction",
color: "#ffffff",
permissions:[]
})
}
var black = msg.guild.roles.find("name", 'Blacksquad');
if(!black){
black = await msg.guild.createRole({
name: "Blacksquad",
color: "#ffffff",
permissions:[]
})
}
 
if (msg.content.startsWith(prefix +'addmerole')) {
 
if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- لعبة اقاريو ⚽ \n2- لعبة ماين كرافت 👶 \n3- لعبة فورت نايت 👊 \n4- لعبة براوهلا 👌 \n5- لعبة بلاك سكواد 🍸\n6- الغاء ❌ \n7- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {
res.react('⚽').then(r=>{
res.react('👶').then(r=>{
res.react('👊').then(r=>{
res.react('👌').then(r=>{
res.react('🍸').then(r=>{
res.react('❌').then(r=>{
 
let aaa = (reaction, user) => reaction.emoji.name === '⚽' && user.id === msg.author.id;
let mmm = (reaction, user) => reaction.emoji.name === '👶' && user.id === msg.author.id;
let fff = (reaction, user) => reaction.emoji.name === '👊' && user.id === msg.author.id;
let bbb = (reaction, user) => reaction.emoji.name === '👌' && user.id === msg.author.id;
let bbbb = (reaction, user) => reaction.emoji.name === '🍸' && user.id === msg.author.id;
let ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
let ff = res.createReactionCollector(fff, { maxMatches:1 , time: 20000 , });
let bb = res.createReactionCollector(bbb, { maxMatches:1 , time: 20000 , });
let bl = res.createReactionCollector(bbbb,{ maxMatches:1 , time: 20000 , });
let cc = res.createReactionCollector(ccc, { maxMatches:1 , time: 20000 , });
 
aa.on("collect", r => {
msg.guild.member(user.id).addRole(a);
msg.channel.send('`تم اعطائك رتبة للعبة Agar`');
msg.delete();
})
mm.on("collect", r => {
msg.guild.member(user.id).addRole(m);
msg.channel.send('`تم اعطائك رتبة للعبة Mincraft `');
msg.delete();
})
ff.on("collect", r => {
msg.guild.member(user.id).addRole(f);
msg.channel.send('`تم اعطائك رتبة للعبة Fortnite `');
msg.delete();
})
bb.on("collect", r => {
msg.guild.member(user.id).addRole(b);
msg.channel.send('`تم اعطائك رتبة للعبة Brawlhalla `');
msg.delete();
})
bl.on("collect", r => {
msg.guild.member(user.id).addRole(black);
msg.channel.send('`تم اعطائك رتبة للعبة Blacksquad `');
msg.delete();
})
cc.on("collect", r => {
msg.delete();
})
})
})
})
})
})
})
})
}
});




client.login("");
