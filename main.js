var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 3;

width = screen.width
newwidth = screen.width - 70
newheight = screen.height - 300

if (width < 992) {
    canvas.width = newwidth
    canvas.height = newheight
    document.body.style.overflow ="hidden"
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_x, last_position_of_y);

    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}