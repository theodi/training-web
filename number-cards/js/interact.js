var numbers = [ 33750, 33750, 33750, 33750, 44000, 44000, 44000, 45566, 65000, 95000, 103500, 112495, 138188, 141666, 181500, 185000, 190000, 194375, 195000, 205000, 292500, 301999, 4600000, 5600000 ];
var rows = 7;
var cols = 5;
var max_rows = 6;
var max_cols = 7;
var markers = [ 125000, 500000 ];

addElements(numbers);
drawRandom(numbers,max_rows,max_cols);

$("#showGrid").click(function(){
    rows = 6;
    cols = 5;
    reDrawGrid(numbers,rows,cols);
});

$("#showNumberLine").click(function(){
    rows = 1;
    cols = 1000;
    reDrawGrid(numbers,rows,cols);
});

$("#showRandom").click(function(){
  reDrawRandom(numbers,max_rows,max_cols);
});
/*
$(".number").click(function(event) {
  $("#"+event.target.id).toggleClass('red');
});
*/
$(".number").on('mousedown', function (evt) {
  $(".number").on('mouseup mousemove', function handler(evt) {
    if (evt.type === 'mouseup') {
      $("#"+event.target.id).toggleClass('red');
    } else {
      // drag
    }
    $(".number").off('mouseup mousemove', handler);
  });
});

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function addElements(numbers) {
  $.each(numbers, function(idx) {
    $("body").append('<div id="number'+idx+'" class="number">'+formatNumber(numbers[idx])+'</div>'); 
  });
  /*$.each(markers, function(idx) {
    $("body").append('<div id="marker'+idx+'" class="marker"><text class="marker_text">'+formatNumber(markers[idx])+'</text><arrow class="marker_arrow"></arrow></div>'); 
  });
  */
}

function drawRandom(numbers,max_rows,max_cols) {
  var done = {};
  $.each(numbers, function(idx) {
    var row = Math.floor(Math.random() * max_rows);
    var col = Math.floor(Math.random() * max_cols);
    var key = row + ',' + col;
    while (done[key]) {
      var row = Math.floor(Math.random() * max_rows);
      var col = Math.floor(Math.random() * max_cols);
      var key = row + ',' + col;
    }
    done[key] = "true";
    var y = 100 * row;
    var x = 200 * col;
    var element = document.getElementById('number'+idx);
    makeInteractive(element,x,y);
  });
}

function reDrawRandom(numbers,max_rows,max_cols) {
  var done = {};
  console.log('in here');
  $.each(numbers, function(idx) {
    var row = Math.floor(Math.random() * max_rows);
    var col = Math.floor(Math.random() * max_cols);
    var key = row + ',' + col;
    while (done[key]) {
      var row = Math.floor(Math.random() * max_rows);
      var col = Math.floor(Math.random() * max_cols);
      var key = row + ',' + col;
    }
    done[key] = "true";
    var y = 100 * row;
    var x = 200 * col;
    putBackGrid('number'+idx,x,y);
  });
}


function drawGrid(numbers,rows,cols) {
  var row = 0;
  $.each(numbers, function(idx) {
    if (idx % cols == 0 && idx > 0) {
      row += 1;
    }
    var y = 100 * row;
    var x = 200 * (idx % cols);
    var element = document.getElementById('number'+idx);
    makeInteractive(element,x,y);
    $.each(markers, function(index) {
      if ((markers[index] >= numbers[idx]) && (markers[index] <= numbers[idx + 1])) {
        var markerElement = document.getElementById('markers'+index);
        makeInteractive(markerElement,x+160,y-20);
      }
    });
  });
}

function putBackGrid(element,x,y) {
    var transitionEvent = whichTransitionEvent();
    $("#"+element).css('transition','all 0.3s linear');
    $("#"+element).css('transform','translate(' + x + 'px, ' + y + 'px)');
    $("#"+element).one(transitionEvent, function(event) {
      var topass = document.getElementById(element);
      makeInteractive(topass,x,y);
    });
}

function reDrawGrid(numbers,rows,cols) {
  var row = 0;
  $.each(numbers, function(idx) {
    if (idx % cols == 0 && idx > 0) {
      row += 1;
    }
    var y = 100 * row;
    var x = 200 * (idx % cols);
    putBackGrid('number'+idx,x,y);
  });
  setTimeout(function () { drawGrid(numbers,rows,cols);},1000);
}

function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

function makeInteractive(element,x,y) {
  element.style.transition = '';
  element.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  interact(element)
    .draggable({
      modifiers: [
        interact.modifiers.snap({
          targets: [
            interact.createSnapGrid({ x: 10, y: 10 })
          ],
        range: Infinity,
        restrictlativePoints: [ { x: 0, y: 0 } ]
        }),
        /*interact.modifiers.restrict({
          restriction: element.parentNode,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
          endOnly: true
        })*/
      ],
    inertia: true
  })
  .on('dragmove', function (event) {
    x += event.dx
    y += event.dy

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'
  })

}