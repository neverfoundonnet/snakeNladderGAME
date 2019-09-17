class Player{
	constructor(){
		this.spot=-1;
	}

	roll(tiles,rolls){
		let r=floor(random(1,7));
		if(currentPlayer==-1){
		console.log('player1 rolled:');
		console.log(r);
		}
		if(currentPlayer==1){
		console.log('player2 rolled:');
		console.log(r);
		}
		let winPoint=99;
		var snake=new Map([[98,54],[70,55],[52,42],[25,2],[95,72]]);
		var ladder=new Map([[6,24],[11,40],[60,85],[46,90],[17,69]]);
		this.spot=this.spot+r;
		if(this.spot>winPoint) //if roll value exceed 100
			this.spot=this.spot-r;
		if(snake.has(this.spot)) //if snake is encountered
			this.spot=snake.get(this.spot); 
		else if(ladder.has(this.spot)) //if ladder is encountered
			this.spot=ladder.get(this.spot);
		
		
	}
 	reset(){
 		this.spot=0;
 	}
	getCenter(){
		let cx=this.x+this.wh/2;  //center of tile in x direction
		let cy=this.y+this.wh/2;  //center of tile in y direction
		return [cx,cy]  //returning (x,y) of the center of the tiles
	}
	show1(tiles){
		let current=tiles[this.spot];
		fill(255);
		if(!current)
			return;
		let center=current.getCenter();
		ellipse(center[0],center[1],32);
		fill(0);
		ellipse(center[0],center[1],16);
	}

	show2(tiles){
		let current=tiles[this.spot];
		fill(0);
		if(!current)
			return;
		let center=current.getCenter();
		ellipse(center[0],center[1],32);
		fill(255);
		ellipse(center[0],center[1],16);
	}
}