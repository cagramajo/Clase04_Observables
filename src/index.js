
const buscapalabra = (palabra, oracion) =>{

}

document.addEventListener("DOMContentLoaded", ()=>{

    let inp = document.querySelector("#inp");
    let lbl = document.querySelector("#texto")
    const {Observable, fromEvent} = rxjs;
    const {mergeMap, retry} = rxjs.operators;
    const observable = fromEvent(inp, 'keyup');

    let subscri = observable.subscribe((e) =>{
        let texto = e.target.value;
        let reverso = texto.split('').reverse().join('');
        if(texto.indexOf('completed') != -1){
            console.log('Deberíamos finalizar OK');
        }
            console.log('keyup: ', e.target.value);
        lbl.innerText = reverso;
    });

    setTimeout(()=>{
        subscri.unsubscribe();
        inp.setAttribute('disabled', "");
    }, 10000)
})

