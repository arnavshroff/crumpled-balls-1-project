class dustbin
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.dustbinObject);
        this.width=width;
        this.height=height;
    }

    display()
    {
        fill("blue");
        strokeWeight(5);
        stroke("skyblue");
        rectMode(CENTER);
        rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

    }
}
