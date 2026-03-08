
noClickZone.addEventListener('mousedown', (e) => {
  e.stopPropagation(); // Ngăn sự kiện thấm lên window
});

noClickZone.addEventListener('mouseup', (e) => {
  e.stopPropagation(); // Ngăn sự kiện thả chuột thấm lên window
});

noClickZone.addEventListener('touchstart', (e) => {
  e.stopPropagation(); // Ngăn sự kiện thấm lên window
});

noClickZone.addEventListener('touchend', (e) => {
  e.stopPropagation(); // Ngăn sự kiện thả chuột thấm lên window
});

const handleMouseDown = (e) => {
  let clientX , clientY
  if (e.type.includes('touch')){
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  }
  else{
      clientX = e.clientX
      clientY = e.clientY    
  }
  x1 = clientX;
  y1 = clientY;
  console.log("Điểm bắt đầu (x1, y1):", x1, y1);
};
const handleMouseUp = (e) => {
  let clientX , clientY
  if (e.type.includes('touch')){
    clientX = e.touches[0].clientX
    clientY = e.touches[0].clientY
  }
  else{
      clientX = e.clientX
      clientY = e.clientY    
  }
  x2 = clientX;
  y2 = clientY;
  console.log("Điểm kết thúc (x2, y2):", x2, y2);
  let vector_ab = [x2 -x1 ,y2 -y1]
  item_list.push({
    type : "line",
    x1 : x1,
    y1 : y1,
    x2 : x2,
    y2 : y2,
    line : vector_ab
  })
}

toggleBtn.addEventListener('change', function() {
  console.log("halluu")
  if (this.checked) {

    console.log("Chế độ vẽ: ON");

    window.removeEventListener('touchstart', handleMouseDown);
    window.removeEventListener('touchend', handleMouseUp);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    } else {
    console.log("Chế độ vẽ: OFF");
    // Quan trọng: Gỡ bỏ sự kiện khi tắt nút
    console.log(item_list)

    window.removeEventListener('touchstart', handleMouseDown);
    window.removeEventListener('touchend', handleMouseUp);

    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);

  }
});
