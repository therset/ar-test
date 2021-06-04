
// Fetch Messages
export async function getMessages () {
    let messages = null
    fetch('./api/messages.json')
    .then(response => response.json())
    .then(data => {
        console.log('messages.json', data)
        return data
    });
}

// Fetch Models
export async function getModels () {
    let models = null
    fetch('./api/models.json')
    .then(response => response.json())
    .then(data => {
        console.log('models.json', data)
        return data
    });
}

// window.onload = () => {
//     const button = document.querySelector('button[data-action="change"]');
//     button.innerHTML = 'choose model';
//     renderPlaces(messages);
// };

// function staticLoadPlaces() {
//     return [
//         {
//             name: 'Pokèmon',
//             location: {
//                 lat: 51.455604,  
//                 lng: -2.618383,
//             },
//         },
//     ];
// }


var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}