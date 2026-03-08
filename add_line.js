
noClickZone.addEventListener('mousedown', (e) => {
  e.stopPropagation(); // Ngăn sự kiện thấm lên window
});

noClickZone.addEventListener('mouseup', (e) => {
  e.stopPropagation(); // Ngăn sự kiện thả chuột thấm lên window
});

const handleMouseDown = (e) => {
  x1 = e.clientX;
  y1 = e.clientY;
  console.log("Điểm bắt đầu (x1, y1):", x1, y1);
};
const handleMouseUp = (e) => {
  x2 = e.clientX;
  y2 = e.clientY;
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
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    } else {
    console.log("Chế độ vẽ: OFF");
    // Quan trọng: Gỡ bỏ sự kiện khi tắt nút
    console.log(item_list)
    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);
  }
});