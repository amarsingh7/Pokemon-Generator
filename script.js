
async function fetchit(){
    try{
        const pokemonname= document.getElementById("pokemonname").value.toLowerCase();
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
    
        if(!response.ok)
            throw new Error("Coudn't fetch");

        const data= await response.json();
        const pokemonS= data.sprites.front_default;
        const imgEle= document.getElementById("pokemonS");

        imgEle.src= pokemonS;
        imgEle.style.display= "block";
    }
    catch(error){
        console.log(error);
    }
}