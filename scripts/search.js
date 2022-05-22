const submit = document.getElementById("submit");
const source = document.getElementById("from-where");
const destination = document.getElementById("where-to");

submit.addEventListener("click", (s) => {
  s.preventDefault();
  if (
    source.value == "" ||
    destination.value == ""
  ) {
    alert("Please fill in all the fields");
  }
  else {
    fetch("http://localhost:3000/flights/" + source + "/" + destination, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          document.getElementById("table").innerHTML = "";
          const trips = JSON.parse(res.body);
          var i = 1 ;
          trips.forEach(trip =>  {

          let newRow = document.createElement('tr');
          newRow.setAttribute("id", "newRow" + i);
          document.getElementById("table").appendChild(newRow);

          let firstDiv = document.createElement('div');
          firstDiv.setAttribute("id", "firstDiv" + i);
          firstDiv.className = "flight-row row g-0"
          document.getElementById("newRow"+i).appendChild(firstDiv);

          let secondDiv = document.createElement('div');
          secondDiv.setAttribute("id", "secondDiv"+i);
          secondDiv.className = "col"
          document.getElementById("firstDiv" + i).appendChild(secondDiv);

          let thirdDiv = document.createElement('div');
          thirdDiv.setAttribute("id", "thirdDiv"+i);
          thirdDiv.className = "d-flex align-items-center"
          thirdDiv.innerHTML='<div><img src="images/Egyptair.png" alt="" /></div>'
          document.getElementById("secondDiv"+i).appendChild(thirdDiv);

          let fourthDiv = document.createElement('div');
          fourthDiv.setAttribute("id", "fourthDiv"+i);
          fourthDiv.className = "flight-info"
          fourthDiv.innerHTML = "<p>"+trip.source +" " +trip.destination+"</p>" +"\n" + 
          '<a class="text-grey" href="payment.html">Egypt Air</a>'          
          document.getElementById("thirdDiv"+i).appendChild(fourthDiv);

          let fifthDiv = document.createElement('div');
          fifthDiv.setAttribute("id", "fifthDiv"+i);
          fifthDiv.className = "col"
          document.getElementById("firstDiv"+i).appendChild(fifthDiv);

          let sixthDiv = document.createElement('div');
          sixthDiv.setAttribute("id", "sixthDiv"+i);
          sixthDiv.className = "flight-info"
          sixthDiv.innerHTML = "<p>"+trip.departure_date +" " + trip.daparture_time+"</p>" 
          document.getElementById("fifthDiv"+i).appendChild(sixthDiv);

          let seventhDiv = document.createElement('div');
          seventhDiv.setAttribute("id", "seventhDiv"+i);
          seventhDiv.className = "col"
          document.getElementById("firstDiv"+i).appendChild(seventhDiv);

          let eighthDiv = document.createElement('div');
          eighthDiv.setAttribute("id", "eighthDiv"+i);
          eighthDiv.className = "flight-info"
          eighthDiv.innerHTML = "<p>"+trip.arrival_date +" " + trip.arrival_time+"</p>" 
          document.getElementById("seventhDiv"+i).appendChild(eighthDiv);

          let ninthDiv = document.createElement('div');
          ninthDiv.setAttribute("id", "ninthDiv"+i);
          ninthDiv.className = "col"
          document.getElementById("firstDiv"+i).appendChild(ninthDiv);

          let tenthDiv = document.createElement('div');
          tenthDiv.setAttribute("id", "tenthDiv"+i);
          tenthDiv.className = "flight-info"
          tenthDiv.innerHTML = "<p>"+(Math.random()*1000 + 500)+ '$' +"</p>" 
          document.getElementById("ninthDiv"+i).appendChild(tenthDiv);

          i++;
        });

        } else {
          alert("error");
        }
      })
      .catch((err) => alert(err.message));
  }

})
