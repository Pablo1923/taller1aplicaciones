let label, btns, btn_borrar, lista, i;

label = document.getElementById("label");
btns = document.querySelectorAll(".btn");
btn_borrar = document.querySelector(".btn-erase")

lista = [0,1,2,3,4,5,6,7,8,9];
i = 0;

lista = lista.sort(function() {
    return Math.random() - 0.5
});

btns.forEach(boton => {
    boton.textContent = lista[i];
    boton.value = lista[i];
    i++;
})

btns.forEach(boton => {
    boton.addEventListener("click", () => {
        
        if(label.textContent.length <= 3){
            let btnApretado = boton.value;
            label.textContent += btnApretado;
        }
    })
})

btns.forEach(boton => {
    boton.addEventListener("mouseover", function() {
        btns.forEach(boton => {
            boton.textContent = "*";
        })
    })
})

btns.forEach(boton => {
    boton.addEventListener("mouseout", function() {
        btns.forEach(boton => {
            boton.textContent = boton.value;
        })
    })
})

btn_borrar.addEventListener("click", function() {
    label.textContent = "";
})


