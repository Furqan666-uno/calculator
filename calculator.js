const display= document.querySelector('#display');
const buttons= document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick= () => {
        if (item.id==='clear')
        {
            display.innerText='';
        }
        else if(item.id==='backspace') 
        {
            let string= display.innerText.toString()//toString= converts all the text to string type
            display.innerText= string.substr(0,string.length-1)
        }
        else if(display.innerText!='' && item.id==='equal')
        {
            display.innerText= eval(display.innerText)//eval= will do all the calc for display text 
        }
        else if(display.innerText==='' && item.id==='equal')
        {
            display.innerText='Enter a number'
            setTimeout(() => { //to erase the display after 2sec 
                display.innerText=''
            },2000);
        }
        else 
        {
            display.innerText+= item.id
        }
    }
});