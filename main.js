let div = new Array(4);
let length = div.length;
let start = 0;
for(let i = 0; i<length; i++){
    let selector = `.line${i+1}`;
    div[i] = document.querySelectorAll(selector);
}
setTimeout(()=>{
    for(let i = 0; i<length; i++){
        let element = document.createElement("p");
        element.className = "text";
        element.innerHTML = `${start+1}`;
        let parent = div[0][i];
        parent.appendChild(element);
        start++;
    }
},500);
setTimeout(()=>{
    for(let i = 1; i<length; i++){
        let element = document.createElement("p");
        element.className = "text";
        element.innerHTML = `${start+1}`;
        let parent = div[i][3];
        parent.appendChild(element);
        start++;
    }
},700);

setTimeout(()=>{
    for(let i = 2; i>=0; i--){
        let element = document.createElement("p");
        element.className = "text";
        element.innerHTML = `${start+1}`;
        let parent = div[3][i];
        parent.appendChild(element);
        start++;
    }
},900);

setTimeout(()=>{
    for(let i = 2; i>0; i--){
        let element = document.createElement("p");
        element.className = "text";
        element.innerHTML = `${start+1}`;
        let parent = div[i][0];
        parent.appendChild(element);
        start++;
    }
},1100);

setTimeout(()=>{
    for(let i = 1; i<length-1; i++){
        let element = document.createElement("p");
        element.className = "text";
        element.innerHTML = `${start+1}`;
        let parent = div[1][i];
        parent.appendChild(element);
        start++;
    }
},1300);

setTimeout(()=>{
    for(let i = 2; i>0; i--){
        let element = document.createElement("p");
        element.className = "text";
        element.innerHTML = `${start+1}`;
        let parent = div[2][i];
        parent.appendChild(element);
        start++;
    }
},1500);
