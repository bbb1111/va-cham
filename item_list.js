

// tạo vector lực 
function f_vector  (x, y, fx, fy){
    let scale = 10
    let endX = x + fx * scale
    let endY = y + fy * scale
    // vẽ đường
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(endX, endY)
    ctx.stroke()
    // vẽ mũi tên
    let angle = Math.atan2(fy, fx)
    let arrow = 10
    ctx.beginPath()
    ctx.moveTo(endX, endY)
    ctx.lineTo(
        endX - arrow * Math.cos(angle - Math.PI/6),
        endY - arrow * Math.sin(angle - Math.PI/6)
    )
    ctx.moveTo(endX, endY)
    ctx.lineTo(
        endX - arrow * Math.cos(angle + Math.PI/6),
        endY - arrow * Math.sin(angle + Math.PI/6)
    )

    ctx.stroke()
}

const rect = (x,y,width,height )=>{
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, width, height);
}

// tạo hình tam giác nhận x,y,radius
const tri = (x,y,radius) =>{
    ctx.beginPath()
    ctx.moveTo(x+radius*Math.cos(135*Math.PI/180),y+radius*Math.sin(135*Math.PI/180)  )
    ctx.lineTo(x+radius*Math.cos(315*Math.PI/180),y+radius*Math.sin(315*Math.PI/180))
    ctx.lineTo(x+radius*Math.cos(405*Math.PI/180),y+radius*Math.sin(405*Math.PI/180))
    ctx.closePath()
    ctx.fillStyle = "green"
    ctx.fill()
}
// tạo hình tròn nhận x,y,radius
const circle = (x,y,radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    
    ctx.fillStyle = "#FF5733"; // Màu tô bên trong
    ctx.fill();                // Thực hiện tô màu
    
    ctx.lineWidth = 5;         // Độ dày viền
    ctx.strokeStyle = "black"; // Màu viền
    ctx.stroke();              // Thực hiện vẽ viền
}

function clr_screen(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);   // Điểm bắt đầu
    ctx.lineTo(x2, y2);   // Điểm kết thúc
    
    // Đối với đoạn thẳng, ta dùng Stroke (đường viền) thay vì Fill (đổ màu)
    ctx.lineWidth = 2;    // Bạn có thể chỉnh độ dày tùy ý
    ctx.stroke();         // Lệnh quan trọng nhất để hiện đường vẽ
    
    // Lưu ý: Không cần ctx.closePath() nếu bạn chỉ vẽ một đoạn thẳng rời rạc
}