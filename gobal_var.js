const width= 80
const height =80
const radius = 80 * Math.sin(45*Math.PI/180)
const gravity = document.querySelector('#gravity')
const fiction = document.querySelector('#friction')
let bounce = document.querySelector('#bounce')
let box_count = 0
let tri_count = 0
let circle_count = 5
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const toggleBtn = document.getElementById('toggleBtn');
let x1 ,y1
let x2,y2
const item_list = []
const noClickZone = document.getElementById('tool_box');
const mass = 10
