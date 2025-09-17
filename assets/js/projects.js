document.addEventListener("DOMContentLoaded", () => {

    const projects = [
        {
        title: "BIRAD Classifier App",
        description: "A deep learning project on PyTorch with ResNet and GoogLeNet.",
        details: [
        "Built and fine-tuned a stacked neural network architecture.",
        "Applied hyperparameter optimization and regularization.",
        "Achieved 75% classification accuracy with data augmentation."
        ],
        tools: "Python, PyTorch",
        
        link: "https://github.com/shuhao-alan-fan/BIRAD_CLASSIFIER",
        image: "./assets/img/birad.jpeg"
        },
        {
        title: "GIS Mapper",
        description: "GIS Mapper App built with C++ and EZGL graphic library.",
        tools: "C++, SQL, Libcurl",
        details: [
        "Developed full-stack GIS mapping application with a user-friendly interface, tailored for driver navigation and usability.",
        "Implemented backend SQL queries to retrieve and display real-time traffic and road mark data, while integrating live weather updates using LibCurl and external APIs.",
        "Optimized rendering performance for large-scale maps, boosting frame rates from 70 FPS to 120 FPS for a smoother user experience."
        ],
        link: "https://github.com/shuhao-alan-fan/GIS-MAPPER",
        image: "./assets/img/GIS-mapper.png"
        },
        {
        title: "Processor Extension",
        description: "A De-SoC board-based processor extension to support subroutine and stack operations.",
        tools: "Verilog, ARM assembly, C",
        details: [
        "Engineered a processor on a De-SoC Board with Quartus using verilog that supports subroutines and stack operations together with basic operations.",
        "Developed a arm assembly instructions script to demonstrate the capability of the processor.",
        ],
        link: "https://github.com/shuhao-alan-fan/ProcessorExtentionProject",
        image: "./assets/img/proc_extension.jpg"
        }
    ];


    let currentIndex = projects.length - 1;
    const row = document.getElementById("recent-projects-row");
    const loadMoreBtn = document.getElementById("load-more-btn");

    function renderProject(project){
        const col = document.createElement("div");
        col.classList.add("col","s12","m6","l4");
        
        col.innerHTML = `
                <div class="card medium">
                
                    <div class="card-image waves-effect waves-block waves-light">
                        <img src="${project.image}"  style="height: 100%; width: 100%" class="activator" alt="${project.title}" />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator teal-text hoverline">${project.title}
                            <i class="mdi-navigation-more-vert right"></i> 
                        </span>
                        <p>${project.description}</p>    
                        
                        
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text"><small>Accomplishments</small>
                            <i class="mdi-navigation-close right"></i>
                        </span>
                        <ul>
                            <li><b>Tools:</b> ${project.tools}</li>
                            ${project.details.map(d => `<li>${d}</li>`).join("")}
                        </ul>

                        <div class="card-action">
                            <a aria-label="Visit the GitHub repo for  project" href="${project.link}"
                            target="_blank" data-position="top" data-tooltip="View Source"
                            class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                                class="fa fa-github"></i></a>
                        </div>

                    </div>
                </div>
                `;
        row.appendChild(col);
    }

    function loadProj(num = 1){
        for(let i = 0; i<num && currentIndex >= 0; i++){
        renderProject(projects[currentIndex]);
        currentIndex--;
        }
        if(currentIndex >= projects.lenth){
        loadMoreBtn.style.display = "none";
        }
    }

    loadProj(1);
    loadMoreBtn.addEventListener("click", () =>{
        loadProj(1);
    });

});