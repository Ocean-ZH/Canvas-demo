function ball_module () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var ball = {
        x: 100,
        y: 100,
        radius: 25,
        color: '#afc',
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };
    
    ball.draw();
}


export default ball_module;