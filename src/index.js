
document.addEventListener("DOMContentLoaded", ()=>{

    let inp = document.querySelector("#inp");
    let texto = document.querySelector("#texto")
    const {Observable, fromEvent} = rxjs;
    const {filter, map} = rxjs.operators;
    const observable = fromEvent(inp, 'keyup');

    observable.subscribe((e) =>{
        console.log('keyup: ', e.target.value);
        texto.innerText = e.target.value;
    })
})

