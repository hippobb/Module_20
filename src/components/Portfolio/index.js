import React from 'react';
function Portfolio() {
  return (
    <section className="my-5">
      <div className="flex-row">
      <div>
        <a href="https://hippobb.github.io/Module_3/" target="_blank">
          <img
            src="module3.png"
            alt='module_3'
          />
        </a>          
    </div>
    <div>
        <a href="https://module14.herokuapp.com/" target="_blank">
          <img
            src="module14.png"
            alt='module_14'
          />
        </a>          
    </div>
    <div>
        <a href="https://module11.herokuapp.com/" target="_blank">
          <img
            src="module11.png"
            alt='module_11'
          />
        </a>          
    </div>
    <div>
        <a href="https://group-4project-2.herokuapp.com" target="_blank">
          <img
            src="project2.png"
            alt='project2'
          />
        </a>          
    </div>
    <div>
        <a href="robot.mp4" target="_blank">
          <img
            src="robot.png"
            alt='robot'
          />
        </a>          
    </div>
      </div>
    </section>
  );
}

export default Portfolio;
