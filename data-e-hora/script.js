let date = new Date;
            
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
    document.write(date.toLocaleDateString('pt-BR', options));