const section = document.querySelector("main")


let totalPosts = "";

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


    for(let i = 0; i < posts.length; i++){
    totalPosts += `
                <section class="container-users">
                
                <div class="users">
                    
                    <div class="user-info">
                        <img class="user-img" src="${posts[i].avatar}">
                        <p class="bold">
                            ${posts[i].name} <span class="location">${posts[i].location}</span>
                        </p>
                    </div>
                    
                    <div class="user-post">
                        <img class="images" src="${posts[i].post}" alt="">
                    </div>

                    <div class="actions">
                        <img class="icons heart" src="images/icon-heart.png" alt="">
                        <img class="icons" src="images/icon-comment.png" alt="">
                        <img class="icons" src="images/icon-dm.png" alt="">

                            <div class="likes">
                                <p class="bold">${posts[i].likes} likes</p>
                            </div>
                        
                            <div class="comments">
                                <p class="bold">${posts[i].username} <span class="ligth">${posts[i].comment}</span></p>
                                
                            </div>
                    </div>

                    <div class = "bottom"></div>

                </div>
                
            </section>`
 
    }

  
    section.innerHTML = totalPosts

    const images = document.querySelectorAll(".images")
    const heartIcon = document.querySelectorAll(".heart")

    for (let i = 0; i < posts.length; i++){

    function renderLikes () {
        let newLikes = document.querySelectorAll(".likes .bold")[i];
        posts[i].likes++;
        console.log(newLikes);
        newLikes.textContent = `${posts[i].likes} likes`
    }

    images[i].addEventListener ("dblclick", renderLikes)
    heartIcon[i].addEventListener("click", renderLikes)
    
}