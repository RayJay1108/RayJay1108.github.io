const video = document.querySelector(".video-container video")

video.addEventListener("mouseenter", () => {
    video.play();
})

video.addEventListener("mouseleave", () => {
    video.pause();
    video.load();
})

//for loop lit // 

for (let i = 1; i <= 12; i = i + 1) {
    const listItem = document.createElement('li');

    if (i % 2 === 0) {
        listItem.textContent = ('even');
    }

    else {
        listItem.textContent = ('odd');
    }
    document.getElementById("numbers").appendChild(listItem);
};