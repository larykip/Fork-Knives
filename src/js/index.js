import axios from 'axios';

async function results(ex) {
    
    try{
        const result = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${ex}`);
        console.log(result);
        const recipe = result.data.recipes.publisher;
        const counter = result.data. count
        console.log(recipe);
    }catch(error){
        alert(error);
    }
}
results('pizza');