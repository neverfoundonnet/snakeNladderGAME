class Tile{
	constructor(x,y,wh,index,next){
		this.x=x;
		this.y=y;
		this.wh=wh;
		this.index=index;
		this.next=next;
		
		if(this.index %2==0)
			this.color=200;
		else
			this.color=100;
	}
	getCenter(){
		let cx=this.x+this.wh/2;  //center of tile in x direction
		let cy=this.y+this.wh/2;  //center of tile in y direction
		return [cx,cy]  //returning (x,y) of the center of the tiles
	}
	show(tiles){
		fill(this.color);
		rect(this.x , this.y ,  this.wh , this.wh);		
		fill(255);
		textSize(16);
		text(this.index+1,this.x,this.y+this.wh);
		

	}

	

	showSnakeAndLadder(tiles){
		var snake=new Map([[98,54],[70,55],[52,42],[25,2],[95,72]]);
		var ladder=new Map([[6,24],[11,40],[60,85],[46,90],[17,69]]);
		if(snake.has(this.index)) //drawing line for snakes
		{
			let myCenter=this.getCenter();
			let nextCenter=tiles[snake.get(this.index)].getCenter();
			
			stroke(0);

			line(myCenter[0],myCenter[1],nextCenter[0],nextCenter[1]);
		}
		if(ladder.has(this.index)) //drawing line fo rladder
		{
			let myCenter=this.getCenter();
			let nextCenter=tiles[ladder.get(this.index)].getCenter();
			
			stroke(255);

			line(myCenter[0],myCenter[1],nextCenter[0],nextCenter[1]);
		}
	}
	
}