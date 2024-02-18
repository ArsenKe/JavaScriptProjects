
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];

//unsplash API
const count = 10;
const apiKey ='key';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Helper Function
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    
    }
}


// Create Elements for links and photos
function displayPhotos(){
    photoArray.forEach((photo) => {
        //create <a> to link to Unsplash
        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target','_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        //create <img> for photo
        const img = document.createElement('img');

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        //Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos();
    } catch (error) {

    }
}
getPhotos();
