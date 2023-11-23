import { heroes } from '../data/heroes'


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseComponent = (element) => {

    const renderHero = (hero)=>{
        element.innerHTML =hero.name;
    }


    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `
            <h3 style="color:#E6FF00 ">${hero1.name}<h3/>
            <h3 style="color:#FF00C8" >${hero2.name}<h3/>

        `;
    }

    const renderError= (error) => {
        element.innerHTML = `
            <h1 style="color:#FF0000">ERROR !!<h1/>
            <h3>${error}<h3/>
        `;
    }


    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371fd55e2e2a30fe1ccb2'


    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
    .catch(renderError)




    //! FORMA 2
    // let hero1;
    // findHero(id1)
    //     .then(hero =>{
    //         hero1 =hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         renderTwoHero(hero1,hero2)
    //     }).catch(renderError)



    //! FORMA 1 
    // findHero(id1)
    //     .then((hero1)=>{
    //         findHero(id2)
    //             .then(hero2 =>{
    //                 renderTwoHero(hero1, hero2)
    //             })
    //             .catch(renderError)

    //     })
    //     .catch(renderError);

}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHero = (id) =>{
    
    return new Promise( ( resolve, reject )=>{

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }
        reject(`Hero whit ${id} not found`)


         

    } );
}