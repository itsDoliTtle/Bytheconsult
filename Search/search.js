let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");




// to show dropdown list
dropdownBtn.onclick = function () {
    // to rotate arrow icon onclick
    if (list.classList.contains("show")) {
        icon.style.rotate = "0deg";
    }else{
        icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
};


// To hide dropdown list when clicked outside dropdown btn
window.onclick = function (e) {
    if (
        e.target.id !== "drop-text" &&
        e.target.id !== "span" &&  
        e.target.id !== "icon"  
      ) {
          list.classList.remove("show");
          
          icon.style.rotate = "0deg";
      }
};


for (item of listItems) {
    item.onclick = function (e) {
        // To change dropdown btn text onclick on selected list item
        span.innerText = e.target.innerText;

        // To change input in placeholder text on selected list item 
        if (e.target.innerText == "Everything") {
            input.placeholder = "Search All Rooms...";
        }
        else{
            input.placeholder ="Search " + e.target.innerText + "...";
        }

    };
};

