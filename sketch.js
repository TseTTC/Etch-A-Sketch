const container = document.getElementById("container");

function grid(size){
  for (let rows = 0; rows<size; rows++){
    for (let columns = 0; columns < size; columns++){
      container.innerHTML += "<div class='grid' onmouseover=\"this.className='trail'\"></div>" ;
    }
  }
}


function clearGrid(){
  var gridClass = document.getElementsByClassName("trail");
  for(let i = gridClass.length -1 ; i >= 0; i--){
    gridClass[i].classList.add("grid")
    gridClass[i].classList.remove("trail")
    
  }
}
grid(16)

