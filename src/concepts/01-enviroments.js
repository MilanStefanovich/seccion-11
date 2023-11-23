

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const enviromentsComponent = (element) => {

    console.log(import.meta.env)

    const html = `
        
        Dev:${import.meta.env.DEV}<br/>
        Dev:${import.meta.env.PROD}<br/>
        Dev:${import.meta.env.VITE_API_KEY}<br/>
        Dev:${import.meta.env.VITE_BASE_URL}<br/>

    `;
    element.innerHTML = html;

}