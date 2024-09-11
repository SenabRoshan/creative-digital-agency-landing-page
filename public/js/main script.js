
// contact info animation
$(".input").on("focus", function() {
    let parent = this.parentNode;
    parent.classList.add("focus");
})

$(".input").on("blur", function() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }    
})


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("h6, p, .black-para, .white-bg, .creative, .footer-company-about, h4, .amount");

    // Options for the Intersection Observer
    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Callback function to execute when the element is in view
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target); // Stop observing after adding the class
            }
        });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(callback, options);

    // Observe each element
    elements.forEach(element => {
        observer.observe(element);
    });
});

