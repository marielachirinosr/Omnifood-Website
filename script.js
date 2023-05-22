console.log("Hello world")

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function(){
  headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    if (href === "#") window.scrollTo({
      top:0,
      behavior: "smooth",
    });

      if (href !== "#" && href.startsWith("#")) {

        const sectionEl = document.querySelector (href);
        sectionEl.scrollIntoView ({ behavior:"smooth"});      
      }

      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle('nav-open');
  });

});


function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrolHeight == 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");

}

checkFlexGap();