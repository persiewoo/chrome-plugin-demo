
window.setWatch = function (){
    if(window.watchId){
        console.log("---------------------- " + window.watchId)
        return;
    }
    window.watchId = window.setInterval(function(){
        if(document.getElementsByClassName("m-exam-dialog").length < 1){
            console.log(">>>>>>>>>>>>>>>>>>>> 无弹窗")
            return;
        }
        var strQue = document.getElementsByClassName("d-qus-tit")[0].getElementsByClassName("d-qus-body")[0].innerText;
        var vals = strQue.split("=")[0].split(" ");
        vals[0] = parseInt(vals[0]);
        vals[2] = parseInt(vals[2]); 
        var strOp = vals[1];
        var result;
        if(strOp === "+"){
            result = vals[0] + vals[2];
        }
        else if(strOp === "-"){
            result = vals[0] - vals[2];
        }
        else if(strOp === "÷"){
            result = vals[0] / vals[2];
        }
        else{
            result = vals[0] * vals[2];
        }
        var opArr = document.getElementsByClassName("ipt-txt ipt-txt-content");
        var tarInd;
        for (let index = 0; index < opArr.length; index++) {
            const element = opArr[index];
            let val = parseInt(element.innerText)
            if(val == result){
                tarInd = index;
                break;
            }
        }
        document.getElementsByClassName("radio")[tarInd].click()
        document.getElementsByClassName("blue")[0].click()
        setTimeout(function(){
            document.getElementsByClassName("blue")[0].click();
            console.log("test ok");
        },3000);
     }, 60000);
    console.log (">>>>>>>>>>>>>>>>>>>>> watchId = " + window.watchId);
}

window.unWatch = function (){
    if(window.watchId){
        window.clearInterval(window.watchId);
        window.watchId = null;
    }
}

window.pExamQue = function (){
    let questions = document.getElementsByClassName("exam-tit ng-binding");
    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
        console.log(element.innerText)
    }
}

window.setWatch();