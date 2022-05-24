const search = document.getElementById("search")
const from = document.getElementById("from where")
const to = document.getElementById("where to")
const depart = document.getElementById("depart")
const adult = document.getElementById("adult")

search.addEventListener("click", (e) => {
    e.preventDefault();
    if (from.value === "" || to.value === "" || depart.value==="" || adult.value==="") {
        alert("please fill in all fields")
    }
    else{ 
        window.location.href = "./search.html"
    }
})
