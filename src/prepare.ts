//单个节点
class OneNode{

    public x;
    public y;
    public f;
    public g;
    public h;
    public walkable;
    public parentNode;

    constructor(x : number, y : number){
        
        this.x = x;
        this.y = y;

    }

}


//整个网格
class Grid{

    private startNode;
    private endNode;
    private numCols;
    private numRows;
    private nodes;

    constructor(numCols : number, numRows : number){

        this.numCols = numCols;
        this.numRows = numRows;
        this.nodes = new Array();

        //创建二维数组，每个元素是一个节点
        for(var i = 0; i < this.numCols; i++){

            this.nodes[i] = new Array();
            for(var j = 0; j < this.numRows; j++){

                this.nodes[i][j] = new OneNode(i,j);
            }
        }
    }

    //获取节点
    public getNode(i : number, j : number){

        return this.nodes[i][j];
    }

    //设置结束节点
    public setEndNode(i : number, j : number){

        this.endNode = this.nodes[i][j];
    }

    //设置起始节点
    public setStartNode(i : number, j : number){

        this.startNode = this.nodes[i][j];
    }

    //设置节点是否可通过
    public setWalkable(i : number, j : number, value : boolean){

        this.nodes[i][j].walkable = value;
    }


    //获取结束节点
    public getEndNode(){

        return this.endNode;
    }

    //获取起始节点
    public getStartNode(){

        return this.startNode;
    }

    //获取网格列数
    public getNumCols(){

        return this.numCols;
    }

    //获取网格行数
    public getNumRows(){

        return this.numRows;
    }


}