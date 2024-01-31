
// Crie a variável canvas
var canvas = new fabric.canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
	new_image();
fabric.Imagem.fromURL("golf-b.png",    function(Img)   {
hole_obj = Img;
hole_obj.scaleToWIdth(50);
hole_obj.scaleToHeigh(50);
hole_obj.set({
    top:hole_y,
    left:hole_x
});
canvas.add(hole_obj);
});
new_imagem();
}


function new_image()
{
	// programe o envio da imagem da bola ao canvas
	fabric.Imagem.fromURL("bola.png",    function(Img)   {
		hole_obj = Img;
		hole_obj.scaleToWIdth(50);
		hole_obj.scaleToHeigh(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
canvas.add(ball_obj);
	});


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if((ball_x==hole_x)&&(ball_y)){
    canvas.remove(ball_obj);
document.getElementById("hd3").innerHTML="voce acertou o buraco!!!";
document.getElementById("myCanvas").borderColor="red";
	}


	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
		if (ball_y<=450)
		{
				  ball_y = block_image_height;
				 console.log("altura do bloco da imagem = " + block_image_height);
				 console.log("quando a seta para cima e pressionada, X = " + ball_x + ", Y= "+balla_y);
				 canvas.remove(ball_obj);
				 new_imagem();
				}
			} 





	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
         if (ball_y<=450)
{
          ball_y = block_image_height;
         console.log("altura do bloco da imagem = " + block_image_height);
         console.log("quando a seta para baixo e pressionada, X = " + ball_x + ", Y= "+balla_y);
         canvas.remove(ball_obj);
		 new_imagem();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
            ball_y = block_image_height;
         console.log("altura do bloco da imagem = " + block_image_height);
         console.log("quando a seta para esquerda e  pressionada, X = " + ball_x + ", Y= "+balla_y);
         canvas.remove(ball_obj);
		 new_imagem();

		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
{
          ball_y = block_image_height;
         console.log("altura do bloco da imagem = " + block_image_height);
         console.log("quando a seta para a direita e presionada, X = " + ball_x + ", Y= "+balla_y);
         canvas.remove(ball_obj);
		 new_imagem();








		}
	}
	
}

