let label, btns, lista, i;

label = document.getElementById("label");
btns = document.querySelectorAll(".btn");
lista = [0,1,2,3,4,5,6,7,8,9];
i = 0;

lista = lista.sort(function() {
    return Math.random() - 0.5
});

btns.forEach(boton => {
    boton.textContent = lista[i];
    i++;
})

btns.forEach(boton => {
    boton.addEventListener("click", () => {
        
        if(label.textContent.length <= 3){
            let btnApretado = boton.textContent;
            label.textContent += btnApretado;
        }
    })
})