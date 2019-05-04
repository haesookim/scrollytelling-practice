const waffle = d3.select('#scrolly');

const numbers = d3.range(100);

waffle.selectAll('.block')
.data(numbers)
.enter()
.append('div')
.attr('class', 'block')
.style('background-color', d => (d < 5 ? '#FE4A49' : '#CCCCCC'));