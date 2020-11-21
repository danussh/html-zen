var vTitlecontainer = document.createElement("div");
vTitlecontainer.setAttribute("id", "title");
vTitlecontainer.setAttribute("class", "text-center mt-5");
document.body.appendChild(vTitlecontainer);
var vTitle = document.createElement("h3");
vTitle.innerHTML = "CRICKET GAME";
document.getElementById("title").appendChild(vTitle);
var vRow = document.createElement("div");
vRow.setAttribute("class", "row mt-5");
vRow.setAttribute("id", "row");
document.body.appendChild(vRow);
var vColumn1 = document.createElement("div");
vColumn1.setAttribute("class", "col-sm-4 ");
vColumn1.setAttribute("id", "column1");
document.getElementById("row").appendChild(vColumn1);
var vColumn2 = document.createElement("div");
vColumn2.setAttribute("class", "col-sm-4 ");
vColumn2.setAttribute("id", "column2");
document.getElementById("row").appendChild(vColumn2);
var vColumn3 = document.createElement("div");
vColumn3.setAttribute("class", "col-sm-4 ");
vColumn3.setAttribute("id", "column3");
document.getElementById("row").append(vColumn3);
var vTitlescrore1 = document.createElement("h5");
vTitlescrore1.innerHTML = "Team Score 1";
document.getElementById("column1").appendChild(vTitlescrore1);
var vScrore1 = document.createElement("h2");
vScrore1.innerHTML = "0";
vScrore1.setAttribute("id", "score1");
document.getElementById("column1").appendChild(vScrore1);
var vButton1 = document.createElement("button");
vButton1.setAttribute("class", "btn btn-success");
vButton1.setAttribute("id", "hit1");
vButton1.innerHTML = "HIT 1";
document.getElementById("column1").appendChild(vButton1);
var vTimerTitle = document.createElement("h5");
vTimerTitle.innerHTML = "TIMER";
document.getElementById("column2").appendChild(vTimerTitle);
var vTimer = document.createElement("h2");
vTimer.innerHTML = "0";
vTimer.setAttribute("id", "timer");
document.getElementById("column2").appendChild(vTimer);
var vTitleScore2 = document.createElement("h5");
vTitleScore2.innerHTML = "Team Score 2";
document.getElementById("column3").appendChild(vTitleScore2);
var vScore2 = document.createElement("h2");
vScore2.innerHTML = "0";
vScore2.setAttribute("id", "score2");
document.getElementById("column3").appendChild(vScore2);
var vButton2 = document.createElement("button");
vButton2.setAttribute("class", "btn btn-success disabled");
vButton2.setAttribute("id", "hit2");
vButton2.innerHTML = "HIT 2";
document.getElementById("column3").appendChild(vButton2);
var vRowTable = document.createElement("div");
vRowTable.setAttribute("class", "row mt-5");
vRowTable.setAttribute("id", "row_table");
document.body.appendChild(vRowTable);
var vRowTable = document.createElement("div");
vRowTable.setAttribute("class", "row mt-5");
vRowTable.setAttribute("id", "row_table");
document.body.appendChild(vRowTable);
var vTableColumn = document.createElement("div");
vTableColumn.setAttribute("class", "col-sm-5 ");
vTableColumn.setAttribute("id", "table_column1");
document.getElementById("row_table").appendChild(vTableColumn);
var vTableColumn2 = document.createElement("div");
vTableColumn2.setAttribute("class", "col-sm-2 ");
vTableColumn2.setAttribute("id", "table_column2");
document.getElementById("row_table").appendChild(vTableColumn2);
var vTableColumn3 = document.createElement("div");
vTableColumn3.setAttribute("class", "col-sm-5 ");
vTableColumn3.setAttribute("id", "table_column3");
document.getElementById("row_table").append(vTableColumn3);
var vTable1 = document.createElement("table");
vTable1.setAttribute("class", "table");
vTable1.setAttribute("id", "table1");
document.getElementById("table_column1").appendChild(vTable1);
var vTHead1 = document.createElement("thead");
vTHead1.innerHTML =
    "<tr><th>Team 1</th><th>Ball1</th><th>Ball2</th><th>Ball3</th><th>Ball4</th><th>Ball5</th><th>Ball6</th><th>Total score</th></tr>";
document.getElementById("table1").appendChild(vTHead1);
vTHead1.setAttribute("class", "thead-dark");
vTHead1.innerHTML +=
    '<tr id="t11"><th>P1</th></tr><tr id="t12"><th >P2</th></tr><tr  id="t13"><th >P3</th></tr><tr  id="t14"><th >P4</th></tr><tr  id="t15"><th >P5</th></tr><tr id="t16"><th  >P6</th></tr><tr  id="t17"><th>P7</th></tr><tr  id="t18"><th>P8</th></tr><tr  id="t19"><th>P9</th></tr><tr id="t110"><th>P10</th></tr>';
var vTable2 = document.createElement("table");
vTable2.setAttribute("class", "table");
vTable2.setAttribute("id", "table2");
document.getElementById("table_column3").appendChild(vTable2);
var vTHead2 = document.createElement("thead");
vTHead2.innerHTML =
    "<tr><th>Team 1</th><th>Ball1</th><th>Ball2</th><th>Ball3</th><th>Ball4</th><th>Ball5</th><th>Ball6</th><th>Total score</th></tr>";
document.getElementById("table2").appendChild(vTHead2);
vTHead2.setAttribute("class", "thead-dark");
vTHead2.innerHTML +=
    '<tr  id="t21"><th>P1</th></tr><tr id="t22"><th >P2</th></tr><tr  id="t23"><th>P3</th></tr><tr id="t24"><th  >P4</th></tr><tr  id="t25"><th >P5</th></tr><tr  id="t26"><th>P6</th></tr><tr  id="t27"><th>P7</th></tr><tr  id="t28"><th >P8</th></tr><tr id="t29"><th >P9</th></tr><tr  id="t210"><th >P10</th></tr>';
var vResult = document.createElement("h3");
vResult.setAttribute("id", "result");
document.getElementById("table_column2").appendChild(vResult);
var vTimerDisp = document.getElementById("timer");
var vHit1 = document.getElementById("hit1");
var vHit2 = document.getElementById("hit2");
var Cricket = /** @class */ (function () {
    function Cricket() {
        var _this = this;
        this.randNum = function () {
            var run = Math.floor(Math.random() * 7);
            return run;
        };
        this.players = 1;
        this.balls = 1;
        this.total = 0;
        this.teamTotal = 0;
        this.team = 1;
        this.toggle = 1;
        this.running = 0;
        this.seconds = 0;
        this.startTimer = function () {
            if (!_this.running) {
                _this.startTime = new Date().getTime();
                _this.tInterval = setInterval(_this.displayTime, 1);
                _this.running = 1;
            }
        };
        this.displayTime = function () {
            _this.updatedTime = new Date().getTime();
            _this.difference = _this.updatedTime - _this.startTime;
            _this.seconds = Math.floor((_this.difference % (1000 * 60)) / 1000);
            _this.seconds = _this.seconds < 10 ? "0" + _this.seconds : _this.seconds;
            vTimerDisp.innerHTML = _this.seconds + "s";
            if (_this.seconds == 59) {
                _this.resetTimer();
            }
        };
        this.handleWinner = function () {
            var team1 = parseInt(document.getElementById("score1").innerHTML);
            var team2 = parseInt(document.getElementById("score2").innerHTML);
            if (team1 > team2) {
                document.getElementById("result").innerHTML = "Team 1 WON THE MATCH";
            }
            else if (team1 < team2) {
                document.getElementById("result").innerHTML = "Team 2 WON THE MATCH";
            }
            else {
                document.getElementById("result").innerHTML = "Match Tied";
            }
        };
        this.displayRuns = function () {
            if (_this.players < 11) {
                if (_this.players === 1) {
                    _this.startTimer();
                }
                var totalPara = document.createElement("td");
                if (_this.balls < 7) {
                    var run = _this.randNum();
                    var runVal = document.createElement("td");
                    runVal.innerHTML = "" + run;
                    if (run === 0) {
                        document
                            .getElementById("t" + _this.team + _this.players)
                            .appendChild(runVal);
                        totalPara.innerHTML = "<b style=\"color:dodgerblue\">" + _this.total + "</b>";
                        document
                            .getElementById("t" + _this.team + _this.players)
                            .appendChild(totalPara);
                        _this.players++;
                        _this.balls = 1;
                        _this.total = 0;
                    }
                    else {
                        document
                            .getElementById("t" + _this.team + _this.players)
                            .appendChild(runVal);
                        document.getElementById("t" + _this.team + _this.players).setAttribute("class", "btn-warning");
                        _this.balls++;
                        _this.total += run;
                        _this.teamTotal += run;
                        document.getElementById("score" + _this.team).innerHTML = _this.teamTotal;
                    }
                }
                else {
                    totalPara.innerHTML = "" + _this.total;
                    document
                        .getElementById("t" + _this.team + _this.players)
                        .appendChild(totalPara);
                    _this.players++;
                    _this.balls = 1;
                    _this.total = 0;
                }
            }
            else {
                document.getElementById("score" + _this.team).innerHTML = _this.teamTotal;
                _this.resetTimer();
            }
        };
        this.resetTimer = function () {
            _this.difference = 0;
            _this.running = 0;
            _this.seconds = "0";
            vTimerDisp.innerHTML = _this.seconds + "s";
            clearInterval(_this.tInterval);
            if (_this.toggle === 1) {
                vHit1.setAttribute("class", "btn btn-success disabled");
                vHit1.removeEventListener("click", cricket.displayRuns, false);
                vHit2.setAttribute("class", "btn btn-success");
                vHit2.addEventListener("click", cricket.displayRuns);
                _this.team = 2;
                _this.players = 1;
                _this.balls = 1;
                _this.total = 0;
                _this.teamTotal = 0;
                _this.toggle = 0;
            }
            else {
                vHit2.setAttribute("class", "btn btn-success disabled");
                vHit2.removeEventListener("click", cricket.displayRuns, false);
                _this.handleWinner();
            }
        };
    }
    return Cricket;
}());
var cricket = new Cricket();
document.getElementById("hit1").addEventListener("click", cricket.displayRuns);
