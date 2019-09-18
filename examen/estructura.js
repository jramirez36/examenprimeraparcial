class administracion
{
    constructor(t,b)//t = new tiempo(); b = new base();
    {
        this._tiempo = t;
        this._posiciones = [];
        this._base = b;
    }
    rutas()
    {
        let totaldebases = 5;
        this.llenado(totaldebases);
        let nombre = 27;
        let tiempo = this._tiempo.tiempo(this._posiciones);
    }
    llenado()
    {
        for(var i = 1; i <= this._totaldebases; i++)
        {
            this._posiciones[i] = b.posicion();
        }
    }
}
class base
{
    constructor()
    {
        this._latitud = 22;
        this._longitud = 23;
    }
    get posicion()
    {
        return this._latitud + " " +this._longitud;
    }
}

class tiempo
{
    constructor(posiciones)//es tipo [];
    {
        this._tiempo = 0;
        this._posicion = posiciones;
        this._totaldebases = 5;
    }
    siguiente()
    {
        for(var i = 1; i <= this._totaldebases; i++)
        {
            this.tiempo[i] = this.calculador(this._posicion[i], this._posicion[i+1]);
        }
    }
    anterior()
    {
        for(var i = 1; i <= this._totaldebases; i++)
        {
            this.tiempo[i-1] = this.calculador(this._posicion[i], this._posicion[i]);
        }
    }
    calculador()
    {
        //formula para sacar tiempo segun distancia + tiempos por carretera
    }
}

