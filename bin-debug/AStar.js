var AStar = (function () {
    function AStar() {
        //heuristic：启发式的
        //曼哈顿
        //private heuristic : Function = this.manhattan;
        //private heuristic : Function = this.
        this.straightCost = 1.0;
        this.diagCost = Math.SQRT2;
    }
    var d = __define,c=AStar,p=c.prototype;
    //传入当前地图的整个网格
    p.findPath = function (grid) {
        this.grid = grid;
        this.openArray = new Array();
        this.closedArray = new Array();
        this.startNode = grid.startNode;
        this.endNode = grid.endNode;
        this.startNode.g = 0;
        this.startNode.h = this.manhattan(this.startNode);
        this.startNode.f = this.startNode.g + this.startNode.h;
        return this.search();
    };
    //迭代处理直到终止节点
    p.search = function () {
        var node = this.startNode;
        //当前节点不为结束节点时
        while (node != this.endNode) {
            //确保不会访问边界以外的网格
            var startX = Math.max(0, node.x - 1);
            var endX = Math.min(this.grid.numCols - 1, node.x + 1);
            var startY = Math.max(0, node.y - 1);
            var endY = Math.min(this.grid.numRows - 1, node.y + 1);
            //检查当前节点周围的所有节点，从当前节点的“左上角”开始
            for (var i = startX; i <= endX; i++) {
                console.log("i:" + i);
                for (var j = startY; j <= endY; j++) {
                    console.log("j:" + j);
                    var test = this.grid.getNode(i, j);
                    //不必计算起始的的节点(即中间的节点)或是不可走的点
                    if (test == node) {
                        continue;
                    }
                    // 计算g
                    var cost = this.straightCost;
                    //X，y都不相等即在对角线
                    if (!((node.x == test.x) || (node.y == test.y))) {
                        cost = this.diagCost;
                    }
                    var g = node.g + cost;
                    var h = this.manhattan(test);
                    var f = g + h;
                    //如果检查的节点在待查或者已查列表中，则无需再计算g,h,f
                    if (this.isOpen(test) || this.isClosed(test)) {
                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parentNode = node;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parentNode = node;
                        //将现在较小的代价的节点放入待查列表
                        this.openArray.push(node);
                    }
                }
            }
            //检查完了当前节点周围所有的合法节点,将当前节点放到已查列表中
            this.closedArray.push(node);
            if (this.openArray.length == 0) {
                return false;
            }
            //选择待查列表中最小的节点,当做下一次的检测的节点进入while循环
            for (var i = 1; i < this.openArray.length; i++) {
                var min = 0;
                if (this.openArray[i - 1].f < this.openArray[i].f) {
                    min = i - 1;
                }
                else {
                }
                node = this.openArray[min];
            }
        }
        this.buildPath();
        return true;
    };
    p.buildPath = function () {
        this.path = new Array();
        var node = this.endNode;
        this.path.push(node);
        while (node != this.startNode) {
            node = node.parentNode;
            this.path.unshift(node);
        }
    };
    //检测节点是否在开放列表中
    p.isOpen = function (node) {
        for (var i = 0; i < this.openArray.length; i++) {
            if (this.openArray[i] == node) {
                return true;
            }
        }
        return false;
    };
    //检测节点是否在闭合列表中
    p.isClosed = function (node) {
        for (var i = 0; i < this.closedArray.length; i++) {
            if (this.closedArray[i] == node) {
                return true;
            }
        }
        return false;
    };
    p.manhattan = function (node) {
        return Math.abs(node.x - this.endNode.x) * this.straightCost
            + Math.abs(node.y - this.endNode.y) * this.straightCost;
    };
    return AStar;
}());
egret.registerClass(AStar,'AStar');
//# sourceMappingURL=AStar.js.map