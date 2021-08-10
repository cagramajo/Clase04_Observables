
document.addEventListener("DOMContentLoaded", ()=>{

    let inp = document.querySelector("#inp");
    let lbl = document.querySelector("#texto")
    const {Observable, fromEvent} = rxjs;
    const {filter, map} = rxjs.operators;
    const observable = fromEvent(inp, 'keyup');

    observable.subscribe((e) =>{
        let texto = e.target.value;
        let reverso = texto.split('').reverse().join('');
        console.log('keyup: ', e.target.value);
        lbl.innerText = reverso;
    })
})

