const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

div1.addEventListener('mouseenter', () => {
    div1.innerHTML = '<h4>With a decade of industry leadership, we specialize in dynamic websites, intuitive UI/UX design, and strategic branding, delivering top-tier digital solutions</h4>';
});

div1.addEventListener('mouseleave', () => {
    div1.innerHTML = '<span>10</span><h4>Years of Experience</h4>';
});

// Repeat similar event listeners for div2, div3, div4
div2.addEventListener('mouseenter', () => {
    div2.innerHTML = '<h4>Welcome</h4><span>Details for Welcome</span>';
});

div2.addEventListener('mouseleave', () => {
    div2.innerHTML = '<h4>Content 2</h4><span>Details for Content 2</span>';
});

div3.addEventListener('mouseenter', () => {
    div3.innerHTML = '<h4>Welcome</h4><span>Details for Welcome</span>';
});

div3.addEventListener('mouseleave', () => {
    div3.innerHTML = '<h4>Content 3</h4><span>Details for Content 3</span>';
});

div4.addEventListener('mouseenter', () => {
    div4.innerHTML = '<h4>Welcome</h4><span>Details for Welcome</span>';
});

div4.addEventListener('mouseleave', () => {
    div4.innerHTML = '<h4>Content 4</h4><span>Details for Content 4</span>';
});

