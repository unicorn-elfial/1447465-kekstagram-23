
function getLikes() {
    return Math.floor(Math.random() * 200) + 15;
}
function getId() {
    return Math.floor(math.random() * 25) + 1;
}
function generatePhoto(id) {
    return {
        id: id,
        url: `photos/${id}.jpg`,
        description: "Моя новая фотография",
        likes: getLikes(),
        comments: []
    }
}
function getAvatar() {
    return Math.floor(Math.random() * 6) + 1;
}
function getNames() {
   Math.floor(Math.random() * names.length);
}
function getNextId(min, max) {
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
}
function generationComments() {
    return {
        id: getNextId(),
        avatar: `img/avatar${-getAvatar()}.svg`,
        message: "Всё отлично!",
        name: getNames()
    }
}
console.log(generatePhoto);
