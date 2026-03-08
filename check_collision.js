const circle_vs_circle = (ob1,ob2) =>{
    let distance = Math.sqrt((ob1.x-ob2.x)**2 +(ob1.y-ob2.y)**2)
    if ( distance < radius*2){
            let nx = (ob1.x - ob2.x) / (distance|| 1)
            let ny = (ob1.y - ob2.y) / (distance|| 1)
            //over_lap fix
            let half_over_lap = radius*2 - distance
            ob1.x +=  nx*half_over_lap
            ob1.y +=  ny*half_over_lap
            ob2.x -=  nx*half_over_lap
            ob2.y -=  ny*half_over_lap
            //un and ut
            let un = [nx,ny]
            let ut = [ -ny,nx]
            let v1_normal = nx*ob1.speed_x +ny*ob1.speed_y
            let v2_normal =nx*ob2.speed_x +ny*ob2.speed_y
            let v1_tagment = ut[0]*ob1.speed_x +ut[1]*ob1.speed_y
            let v2_tagment = ut[0]*ob2.speed_x +ut[1]*ob2.speed_y

            let new_v1_normal = 2*mass*v2_normal/(mass*2)
            let new_v2_normal = 2*mass*v1_normal/(mass*2)
            ob1.speed_x = new_v1_normal*nx +v1_tagment*ut[0]
            ob1.speed_y = new_v1_normal*ny+v1_tagment*ut[1]
            ob2.speed_x = new_v2_normal*nx +v2_tagment*ut[0]
            ob2.speed_y = new_v2_normal*ny +v2_tagment*ut[1]
    }
}
/*
const circle_vs_line = (ob1,ob2) =>{
    let lin,cir,distance
    if (ob1.type == "line"){
        lin = ob1
        cir  = ob2
    }
    else {
        lin = ob2
        cir = ob1
    }
    distance = Math.abs(lin.line[0]*(cir.x+40) + lin.line[1]*(cir.y+40)+lin.line[2])/Math.sqrt(lin.line[0]**2+lin.line[1]**2)
    if (distance <= radius){
        let overlap = radius-distance
        let len = Math.sqrt(lin.line[0]*lin.line[0]+lin.line[1]*lin.line[1])
        let nx = lin.line[0]/len
        let ny = lin.line[1]/len
        cir.x += nx * overlap
        cir.y += ny * overlap
        let dot = cir.speed_x*nx + cir.speed_y*ny

        cir.speed_x -= 2*dot*nx
        cir.speed_y -= 2*dot*ny
    } 
}*/
const circle_vs_line = (ob1, ob2) => {

    let lin, cir
    if (ob1.type == "line"){
        lin = ob1
        cir = ob2
    } else {
        lin = ob2
        cir = ob1
    }
    let abx = lin.line[0]
    let aby = lin.line[1]
    let amx = cir.x - lin.x1
    let amy = cir.y - lin.y1
    let t = (amx*abx + amy*aby)/(abx*abx + aby*aby)
    t = Math.max(0, Math.min(1, t))
    let px = lin.x1 + t*abx
    let py = lin.y1 + t*aby
    let dx = cir.x - px
    let dy = cir.y - py
    let distance = Math.sqrt(dx*dx + dy*dy)
    if (distance < radius){
        let nx = dx/(distance || 1)
        let ny = dy/(distance || 1)
        let overlap = radius - distance
        cir.x += nx * overlap
        cir.y += ny * overlap
        cir.f = []
        //phap tuyen
        let dot1 = cir.speed_x*-ny +cir.speed_y*nx
        cir.f.push([dot1*-ny,dot1*nx])
        //tiep tuye
        let dot = cir.speed_x*nx + cir.speed_y*ny
        cir.f.push([dot*nx*10,10* dot*ny])
        cir.speed_x -= dot*nx
        cir.speed_y -= dot*ny
    }
}
const check_colision = () =>{
    for (let i = 0 ; i <item_list.length ;i++){
        for (let j = i+1 ; j <item_list.length ;j++){
            item_1 = item_list[i]
            item_2 = item_list[j]
            if (item_1.type == "circle" && item_2.type == "circle"){
                circle_vs_circle(item_1,item_2)
            }
            if ((item_1.type == "circle" && item_2.type == "line")||(item_1.type == "line" && item_2.type == "circle" )){
                circle_vs_line(item_1,item_2)
            }
            else{

            }
        }
    }
}