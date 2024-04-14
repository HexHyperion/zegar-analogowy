function pageControl(event){
    let key = event.key;
    if (key == "PageUp" || key == "ArrowLeft"){
        if (document.querySelector("#steps label:nth-child(1) input").checked) {
            window.location.replace("../date.html");
        }
        else {
            let inputs = document.querySelectorAll("#steps label input");
            let inputIndex;
            for (let i = 0; i < inputs.length; i++){
                if (inputs[i].checked) {
                    inputIndex = i+1;
                    break;
                }
            }
            document.querySelector(`#steps label:nth-child(${inputIndex}) input`).checked = false;
            document.querySelector(`#steps label:nth-child(${inputIndex-1}) input`).checked = true;
            swap();
        }
    }
    else if (key == "PageDown" || key == "ArrowRight"){
        if (document.querySelector("#steps label:last-child input").checked) {
            window.location.replace("../bye.html");
        }
        else {
            let inputs = document.querySelectorAll("#steps label input");
            let inputIndex;
            for (let i = 0; i < inputs.length; i++){
                if (inputs[i].checked) {
                    inputIndex = i+1;
                    break;
                }
            }
            document.querySelector(`#steps label:nth-child(${inputIndex}) input`).checked = false;
            document.querySelector(`#steps label:nth-child(${inputIndex+1}) input`).checked = true;
            swap();
        }
    }
}