let date = new Date;
            
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
    document.write(date.toLocaleDateString('pt-BR', options));


let data=new Date();
    let hor=data.getHours();
    let min=data.getMinutes();
    let seg=data.getSeconds();