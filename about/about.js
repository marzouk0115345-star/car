function animate(id, start, end, duration){
    let obj = document.getElementById(id);
    let startTime = null;

    function step(time){
        if(!startTime) startTime = time;

        let progress = Math.min((time - startTime)/duration, 1);

        obj.innerText = "+" + Math.floor(progress * (end - start) + start);

        if(progress < 1){
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            animate("counter1",0,5000,2000);
            animate("counter2",0,1000,2000);
            animate("counter3",0,200,2000);
        }
    });
},{threshold:0.5});

observer.observe(document.querySelector(".stats"));