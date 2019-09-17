let tiles=[];
let rolls=[];
let index;


function setup(){
	createCanvas(500,500); 
	let resolution=50;
	index=0;
	let cols=width/resolution;
	let rows=height/resolution;
	let x=0;
	let y=(rows-1)*resolution;
	let dir=1;
	for(let i=0;i<cols*rows;i++){
		let tile=new Tile(x,y,resolution,i, i+1);
		tiles.push(tile);
		rolls[index]=tile;
		x=x+(resolution*dir);
		
		if(x>=width || x<= -resolution){
			dir *=-1;
			x +=resolution*dir;
			y -=resolution;
			
		}
		index++;
		
	}
	
	player1=new Player();
	player2=new Player();

}
var currentPlayer=-1;


function play(){
	
	
	if(currentPlayer==-1){	
	
		player1.roll(tiles,rolls);
	
		if(player1.spot==99)
		{
			console.log("player1 win!!!");	
			player1.reset();
			player2.reset();
		}
	}
	if(currentPlayer==1){
	
		player2.roll(tiles,rolls);
	
		if(player2.spot==99)
		{
			console.log("player2 win!!!");
		
			player1.reset();
			player2.reset();
		}
	}
	
	currentPlayer=currentPlayer*-1;
	
}

function draw(){
	

	background(51);

	for (let tile of tiles){
		tile.show(tiles);
	}
	for (let tile of tiles){
		tile.showSnakeAndLadder(tiles);
	}
	if(player1.spot!=101 && player2.spot!=101){	
		
		player1.show1(tiles);
		player2.show2(tiles);	
		
	}
		

}