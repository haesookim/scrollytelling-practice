const waffle = d3.select('#scrolly');

const numbers = d3.range(100);

waffle.selectAll('.block')
.data(numbers)
.enter()
.append('div')
.attr('class', 'block')
.style('background-color', d => (d < 5 ? '#FE4A49' : '#CCCCCC'));


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById('scrolly').style.position = "relative";
    document.getElementById('scrolly').style.top = "750px";
  } else {
    document.getElementById('scrolly').style.position = "sticky";
    document.getElementById('scrolly').style.top = "300px";
  }
}