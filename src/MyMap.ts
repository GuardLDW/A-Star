var config = [
        {x:0, y:0, walkable:true, image:"road_jpg"},
        {x:0, y:1, walkable:true, image:"road_jpg"},
        {x:0, y:2, walkable:true, image:"road_jpg"},
        {x:0, y:3, walkable:true, image:"road_jpg"},
        {x:0, y:4, walkable:true, image:"road_jpg"},
        {x:0, y:5, walkable:true, image:"road_jpg"},
        {x:0, y:6, walkable:true, image:"road_jpg"},
        {x:0, y:7, walkable:true, image:"road_jpg"},

        {x:1, y:0, walkable:true, image:"road_jpg"},
        {x:1, y:1, walkable:true, image:"road_jpg"},
        {x:1, y:2, walkable:true, image:"road_jpg"},
        {x:1, y:3, walkable:true, image:"road_jpg"},
        {x:1, y:4, walkable:true, image:"road_jpg"},
        {x:1, y:5, walkable:true, image:"noRoad_jpg"},
        {x:1, y:6, walkable:true, image:"road_jpg"},
        {x:1, y:7, walkable:true, image:"road_jpg"},

        {x:2, y:0, walkable:true, image:"noRoad_jpg"},
        {x:2, y:1, walkable:true, image:"noRoad_jpg"},
        {x:2, y:2, walkable:true, image:"noRoad_jpg"},
        {x:2, y:3, walkable:true, image:"noRoad_jpg"},
        {x:2, y:4, walkable:true, image:"road_jpg"},
        {x:2, y:5, walkable:true, image:"noRoad_jpg"},
        {x:2, y:6, walkable:true, image:"road_jpg"},
        {x:2, y:7, walkable:true, image:"road_jpg"},

        {x:3, y:0, walkable:true, image:"road_jpg"},
        {x:3, y:1, walkable:true, image:"road_jpg"},
        {x:3, y:2, walkable:true, image:"road_jpg"},
        {x:3, y:3, walkable:true, image:"noRoad_jpg"},
        {x:3, y:4, walkable:true, image:"noRoad_jpg"},
        {x:3, y:5, walkable:true, image:"noRoad_jpg"},
        {x:3, y:6, walkable:true, image:"road_jpg"},
        {x:3, y:7, walkable:true, image:"road_jpg"},

        {x:4, y:0, walkable:true, image:"road_jpg"},
        {x:4, y:1, walkable:true, image:"road_jpg"},
        {x:4, y:2, walkable:true, image:"road_jpg"},
        {x:4, y:3, walkable:true, image:"road_jpg"},
        {x:4, y:4, walkable:true, image:"road_jpg"},
        {x:4, y:5, walkable:true, image:"road_jpg"},
        {x:4, y:6, walkable:true, image:"road_jpg"},
        {x:4, y:7, walkable:true, image:"road_jpg"}   
        ]

class MyMap extends egret.DisplayObjectContainer{

    //width:5*8,height:128*8
    public static SIZE = 128;

    constructor(){

        super();  
        this.init();
        this.initAStar();
    }



    private init(){

        //添加各个网格
        for(var i = 0; i < config.length; i++){

            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,function(e: egret.TouchEvent){

            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / MyMap.SIZE);
            var gridY = Math.floor(localY / MyMap.SIZE);
            console.log(gridX, gridY);

        },this);




        
    }


    private initAStar(){

        var grid : Grid = new Grid(5, 8);
        var aStar : AStar  = new AStar();
        grid.setStartNode(0,0);
        grid.setEndNode(1,1);
        aStar.findPath(grid);
        console.log(aStar.path.length);
        for(var i = 0; i < aStar.path.length; i++){
            console.log(aStar.path[i].x);
            console.log(aStar.path[i].y);
        }

    }

    

}


//网格类，实例化对象表示每一个网格
class Tile extends egret.DisplayObjectContainer{

    x : number;
    y : number;
    walkable : boolean;
    image : string;

    constructor(data){

        super();
        this.init(data);
    }

    private init(data){

        this.x = data.x * MyMap.SIZE;
        this.y = data.y * MyMap.SIZE;
        this.walkable = data.walkable;
        this.image = data.image;

        var bitmap = new egret.Bitmap();
        bitmap.width = 128;//128 * 5 = 640
        bitmap.height = 128;//128 * 8 = 1024
        bitmap.texture = RES.getRes(this.image);
        this.addChild(bitmap);

    }


}


















