// function 
import { getModels } from './script.js'

window.onload = () => {

    let models
    fetch('./api/models.json')
    .then(response => response.json())
    .then(data => {
        console.log('models.json', data)
        models = data
        const container = document.querySelector('.models')
        models.forEach(model => {
            const element = document.createElement('div')
            element.innerHTML = model.info
            element.classList.add('bg-gray')
            container.append(element)
        })
    });

}
// here s where the gltf loader goes
//carousel for choice

