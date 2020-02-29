const androidProjects = document.getElementsByClassName("android");
console.log(androidProjects);

// androidProjects.map((item, index)=>{
//     return item.addClass("invisible");
// });
// for(const item of androidProjects) {
//     item.classList = [...item.classList,"invisible"].join(" ");
// }
const allButton = document.getElementById("allFilter");
allButton.addEventListener("click",function(event){
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        if(project.classList.contains("invisible")) {
            project.classList.remove("invisible");
        }
    }
});
const androidButton = document.getElementById("androidFilter");
androidButton.addEventListener("click",function(event){
    androidButton.classList = [...androidButton.classList,"active"].join(" ");
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        const classes = project.classList;
        if(!classes.contains("android")) {
            if(classes.contains("invisible")) {
                continue;
            } else{
            project.classList = [...classes, "invisible"].join(" ");
            }
        } else if(classes.contains("invisible")){
            project.classList.remove("invisible");
        }
    }
});

const webButton = document.getElementById("webFilter");
webButton.addEventListener("click",function(event){
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        const classes = project.classList;
        if(!classes.contains("web") ) {
            if(classes.contains("invisible")) {
                continue;
            } else{
            project.classList = [...classes, "invisible"].join(" ");
            }
        } else if(classes.contains("invisible")) {
            project.classList.remove("invisible");
        }
    }
});

const aiButton = document.getElementById("aiFilter");
aiButton.addEventListener("click",function(event){
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        const classes = project.classList;
        if(!classes.contains("ai") ) {
            if(classes.contains("invisible")) {
                continue;
            } else{
            project.classList = [...classes, "invisible"].join(" ");
            }
        } else if(classes.contains("invisible")) {
            project.classList.remove("invisible");
        }
    }
});

const reactButton = document.getElementById("reactFilter");
reactButton.addEventListener("click",function(event){
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        const classes = project.classList;
        if(!classes.contains("react") ) {
            if(classes.contains("invisible")) {
                continue;
            } else{
            project.classList = [...classes, "invisible"].join(" ");
            }
        } else if(classes.contains("invisible")) {
            project.classList.remove("invisible");
        }
    }
});

const djangoButton = document.getElementById("djangoFilter");
djangoButton.addEventListener("click",function(event){
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        const classes = project.classList;
        if(!classes.contains("django") ) {
            if(classes.contains("invisible")) {
                continue;
            } else{
            project.classList = [...classes, "invisible"].join(" ");
            }
        } else if(classes.contains("invisible")) {
            project.classList.remove("invisible");
        }
    }
});

const nodeButton = document.getElementById("nodeFilter");
nodeButton.addEventListener("click",function(event){
    const projects = document.getElementsByClassName("project");
    for(const project of projects) {
        const classes = project.classList;
        if(!classes.contains("node") ) {
            if(classes.contains("invisible")) {
                continue;
            } else{
            project.classList = [...classes, "invisible"].join(" ");
            }
        } else if(classes.contains("invisible")) {
            project.classList.remove("invisible");
        }
    }
});
