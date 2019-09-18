class amigos
{
    constructor()
    {
        this._maximo = 3000;
        this.numeros = [];
    }
    busqueda()
    {
        let acumulador;
            for(var i = 1; i <= this._maximo; i++)
                {
                    acumulador = 0;
                    for(var j = 1; j < i; j++)
                    {
                        if(i%j === 0)
                        {
                            acumulador = acumulador+j;
                        }
                    }
                    this.numeros[i] = acumulador;
                }
            for(var i = 1; i < this._maximo; i++)
            {
                for(var j = 2; j < this._maximo; j++)
                    {
                        if(this.numeros[i] === j)
                        {
                            if(this.numeros[j] === i)
                                {
                                    if (i < j)
                                        {
                                            console.log("estos numeros son amigos " + i + " " + j);
                                        }
                                }
                        }
                    }
            }
            }
}
document.querySelector("#buscar").addEventListener("click", ()=>{
    let B = new amigos();
    B.busqueda();
    });
