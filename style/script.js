const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult  = document.querySelector(".cpu_result img"),
result   = document.querySelector(".result"),
optionImages   = document.querySelector(".option_image");

optionImages.forEach((image,index) =>{
    image.addEvenListener("click",(e) =>{
        image.classList.add("active");

        optionImages.forEach((image2,index2)=>{
            index !== index2 && image2.classList.remove("active");
        });
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["images/rock.png","images/qogop.png","images/scissors.png" ];
        cpuResult.src = cpuImages[randomNumber];
        let cpuValue = ["R","P","S"][randomNumber];
        let userValue = ["R","P","S"][index];
        console.log(cpuValue,userValue);
    });
});