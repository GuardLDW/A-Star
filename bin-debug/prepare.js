//单个节点
var OneNode = (function () {
    function OneNode(x, y) {
        this.x = x;
        this.y = y;
    }
    var d = __define,c=OneNode,p=c.prototype;
    return OneNode;
}());
egret.registerClass(OneNode,'OneNode');
//整个网格
var Grid = (function () {
    function Grid(numCols, numRows) {
        this.numCols = numCols;
        this.numRows = numRows;
        this.nodes = new Array();
        //创建二维数组，每个元素是一个节点
        for (var i = 0; i < this.numCols; i++) {
            this.nodes[i] = new Array();
            for (var j = 0; j < this.numRows; j++) {
                this.nodes[i][j] = new OneNode(i, j);
            }
        }
    }
    var d = __define,c=Grid,p=c.prototype;
    //获取节点
    p.getNode = function (i, j) {
        return this.nodes[i][j];
    };
    //设置结束节点
    p.setEndNode = function (i, j) {
        this.endNode = this.nodes[i][j];
    };
    //设置起始节点
    p.setStartNode = function (i, j) {
        this.startNode = this.nodes[i][j];
    };
    //设置节点是否可通过
    p.setWalkable = function (i, j, value) {
        this.nodes[i][j].walkable = value;
    };
    //获取结束节点
    p.getEndNode = function () {
        return this.endNode;
    };
    //获取起始节点
    p.getStartNode = function () {
        return this.startNode;
    };
    //获取网格列数
    p.getNumCols = function () {
        return this.numCols;
    };
    //获取网格行数
    p.getNumRows = function () {
        return this.numRows;
    };
    return Grid;
}());
egret.registerClass(Grid,'Grid');
//# sourceMappingURL=prepare.js.map