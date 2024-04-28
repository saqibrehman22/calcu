let input= document.getElementById('inputBox')
let buttons= document.querySelectorAll
('button')

let string="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
    }

    else if(e.target.innerHTML == 'AC'){
     string = "";
     input.value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.substring(string.length-0);
        input.value = string
    }
    else{
        string += e.target.innerHTML;
        input.value = string;
    }

    window.addEventListener('keypress', function(e){
        if (e.shiftKey && e.metaKey && e.keyCode == 52) {
            alert("Here it is.");
        }
    }, false);
    })
})
