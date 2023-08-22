
class Paper{
    holdingpaper = false;
    prevMouseX = 0;
    prevMouseY = 0;
    mouseX = 0;
    mouseY = 0;
    velocityX = 0;
    velocityY = 0;

    currentpaperX = 0;
    currentpaperY = 0;
    init(paper){
        paper.addEventListener('mousedown' , (e)=>{
           this.holdingpaper = true;
           if(e.button === 0){
            this.prevMouseX = this.currentpaperX;
            this.prevMouseY = this.currentpaperY;
            console.log(this.prevMouseX, this.prevMouseY)
            paper.style.zIndex = 1;
           }
        })
        document.addEventListener('mousemove', (e)=>{
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            let card_posX = document.getElementsByClassName("card-container")[0].getBoundingClientRect().x;
            let card_posY = document.getElementsByClassName("card-container")[0].getBoundingClientRect().y;
            this.velocityX =this.prevMouseX - this.mouseX;
            this.velocityX =this.prevMouseY - this.mouseY;
            if(this.holdingpaper){
                this.currentpaperX += this.velocityX;
                this.currentpaperY += this.velocityY;
                paper.style.transform =  `translateX(${(this.mouseX - card_posX)-100}px) translateY(${(this.mouseY - card_posY)-100}px)`
                console.log("posx",this.mouseX - card_posX)
                console.log(this.mouseX, this.mouseY)
                
            }
        })
        window.addEventListener('mouseup', (e)=>{
            this.holdingpaper = false;
        })
    }
}
const papers = Array.from(document.querySelectorAll('.card'));
papers.forEach(paper => {
    const p = new Paper;
    p.init(paper)
})