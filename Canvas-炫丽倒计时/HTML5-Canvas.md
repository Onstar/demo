# Canvas

## 绘制直线

```
<canvas id = "canvas"></canvas>
<script>
var canvas = documnet.getElementById("canvas")

if(canvas.getContext("2d")){ //判断浏览器是否有该属性，有，则表示支持。
	var context = canvas.getContext("2d");		//获取绘图环境
	canvas.width;		// 设置canvas的宽度
	canvas.height;		// 设置canvas的高度
}else{
	alert("当前浏览器不支持Canvas，请更换浏览器")
	}
</script>

```

```
Draw
//绘制路径
context.moveTo(x,y)
context.lineTo(x,y)

//多个路径分开处理使用下面两个方法处理

context.beginPath()		//定义一个路径的开始

.... //在这里面绘制路径

context.closePath()		//定义一个路径的结束，如果这个路径不是封闭的，它就会自动帮助该路径进行封闭。

// beginPath() 和 closePath() 不一定要配合使用。
// 单独使用 beginPath() 也可以绘制多个路径


context.lineWidth	//定义线条宽度
context.strokeStyle	//定义线条颜色
context.fillStyle	//定义填充的颜色

context.stroke()	//绘制线条
context.fill()		//绘制填充颜色块

```

## 绘制弧线

```
context.arc(centerX,centerY,radius,staringAngle,endingAngle,anticlockwise)

// centerX: 圆心的x轴坐标
// centerY: 圆心的Y轴坐标
// radius: 圆的半径
// startingAngle: 开始的弧度值
// endingAngle:	结束的弧度值
// anticlockwise：可选属性，定义弧形是顺时针方向绘制，还是逆时针方向绘制，默认为false，顺时针。

```