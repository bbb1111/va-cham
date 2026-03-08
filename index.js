
const create_circle = () => {
    for ( let i = 0 ; i< circle_count; i++){
            // khởi tạo vị trí
        let posy = Math.random()*window.innerHeight
        let posx = Math.random()*window.innerWidth
        item_list.push({
            type : "circle",
            x : posx,
            y : posy ,
            speed_y : 0,
            speed_x : 0,
            is_hold : false,
            is_drop : true,
            ground : window.innerHeight-150,
            f : []
        })
    }
}

const create_box = ()=>{
    // tạo 
    for (let i = 0 ; i< box_count;i++){
            // khởi tạo vị trí
        let posy = Math.random()*window.innerHeight
        let posx = Math.random()*window.innerWidth
        item_list.push({
            type : "box",
            x : posx,
            y : posy ,
            speed_y : 0,
            speed_x : 0,
            is_hold : false,
            is_drop : true,
            is_ground : false 
        })
    }
}
const create_triangle = ()=>{
    for (let i = 0 ; i< tri_count; i++){
        let posy = Math.random()*window.innerHeight
        let posx = Math.random()*window.innerWidth
        item_list.push({
            type: "tri",
            x       :posx,
            y       :posy,
            speed_x : 0,
            speed_y : 0,
            is_hold : false,
            is_drop : true
        })
        
    }
}
const add_physic = (item) => {
    
    if (item.is_drop){
        item.speed_y += Number(gravity.value)
        item.y+=  item.speed_y
        item.x += item.speed_x
        // move
        if (item.y + 80 > item.ground){
            item.y = item.ground-80 
            item.speed_y *= -Number(bounce.value)
            if(Math.abs(item.speed_y)>0 && Math.abs(item.speed_y)< 1 ){
                item.is_drop = false
            }
        }
    }
        // collision ground
    if(!item.is_drop){
        item.speed_y = Number(gravity.value)
        if (item.y + 80 < item.ground){
            item.is_drop = true
        }
    }

}
const check_item = (e) => {
    item_list.forEach((item) => {
        // Tính khoảng cách từ chuột tới tâm x, y
        let dx = e.clientX - item.x;
        let dy = e.clientY - item.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Giả sử bán kính là 40
        if (distance <= 40) { 
            item.is_hold = true;
        }
    });
}
const move_object = (e)=>{
    item_list.forEach((item)=>{
        if (item.is_hold){
            item.x = e.clientX
            item.y = e.clientY
        }
    })
}
const update = () => {
    clr_screen()
    check_colision()
    item_list.forEach((item) =>{

            if (item.type =="line"){
                line(item.x1,item.y1,item.x2,item.y2)
            }
            else if (!item.is_hold){
                add_physic(item)
            }
        if (item.type == "tri"){
            tri(item.x+40,item.y+40,radius)
        }
        if (item.type == "box"){    
            rect(item.x,item.y,width,height)
        }
        if (item.type == "circle"){
            circle(item.x,item.y,radius)
        }
        f_vector(item.x,item.y,0,item.speed_y)
        if (item.type == "circle"){    
            item.f.forEach((f)=>{
            f_vector(item.x,item.y,f[0],f[1])
            })
        }
    })
    requestAnimationFrame(update);
}



window.addEventListener('mousedown',(e) => {check_item(e)})
window.addEventListener('mousemove',(e) => {move_object(e)})
window.addEventListener('mouseup',(e) => {item_list.forEach((item)=> {item.is_hold=false})})
create_box()
create_triangle()
create_circle()
update()