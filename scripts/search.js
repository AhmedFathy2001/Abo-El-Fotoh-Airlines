const submit = document.getElementById("submit");
const source = document.getElementById("from-where");
const destination = document.getElementById("where-to");
const flightCard = document.getElementById("flight-card");
submit.addEventListener("click", async (s) => {
  s.preventDefault();
  if (source.value == "" || destination.value == "") {
    alert("Please fill in all the fields");
  } else {
    console.log(localStorage.getItem("token").toString());
    const trips = await fetch(
      "http://localhost:3000/flights/?source=" +
        source.value +
        "&destination=" +
        destination.value,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          //get token from local storage
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const tripsData = await trips.json();
    tripsData.forEach((trip) => {
      console.log(trip);
      let newRow = document.createElement("tr");
      document.getElementById("table").appendChild(newRow);

      let firstDiv = document.createElement("div");
      firstDiv.className = "flight-row row g-0";
      newRow.appendChild(firstDiv);

      let secondDiv = document.createElement("div");
      secondDiv.className = "col";
      firstDiv.appendChild(secondDiv);

      let thirdDiv = document.createElement("div");
      thirdDiv.className = "d-flex align-items-center";
      thirdDiv.innerHTML =
        '<div><img src="images/Egyptair.png" alt="" width="50px"/></div>';
      secondDiv.appendChild(thirdDiv);

      let fourthDiv = document.createElement("div");
      fourthDiv.className = "flight-info";
      fourthDiv.innerHTML =
        "<p>" +
        trip.source +
        " " +
        trip.destination +
        "</p>" +
        "\n" +
        '<a class="text-grey" href="payment.html">Egypt Air</a>';
      thirdDiv.appendChild(fourthDiv);

      let fifthDiv = document.createElement("div");
      fifthDiv.className = "col";
      fourthDiv.appendChild(fifthDiv);

      let sixthDiv = document.createElement("div");
      sixthDiv.className = "flight-info";
      sixthDiv.innerHTML =
        "<p>" + trip.departure_date + " " + trip.daparture_time + "</p>";
      fifthDiv.appendChild(sixthDiv);

      let seventhDiv = document.createElement("div");
      seventhDiv.className = "col";
      firstDiv.appendChild(seventhDiv);

      let eighthDiv = document.createElement("div");
      eighthDiv.className = "flight-info";
      eighthDiv.innerHTML =
        "<p>" + trip.arrival_date + "  " + trip.arrival_time + "</p>";
      seventhDiv.appendChild(eighthDiv);

      let ninthDiv = document.createElement("div");
      ninthDiv.className = "col";
      firstDiv.appendChild(ninthDiv);

      let tenthDiv = document.createElement("div");
      tenthDiv.className = "flight-info";
      tenthDiv.innerHTML = "<p>" + trip.price + "$" + "</p>";
      ninthDiv.appendChild(tenthDiv);

      //create link to payment page
      let eleventhDiv = document.createElement("div");
      eleventhDiv.className = "col";
      eleventhDiv.innerHTML = '<a href="payment.html">Book</a>';
      firstDiv.appendChild(eleventhDiv);
    });
  }

  // document.getElementById("table").innerHTML = "";
  // let postsContainer;
  // tripsData.forEach((trip) => {
  //   console.log(trip);
  //   postsContainer += `<tr>
  //     <td>${trip.source}</td>
  //     <td>${trip.destination}</td>
  //     <td>${trip.departure_date}</td>
  //     <td>${trip.daparture_time}</td>
  //     <td>${trip.arrival_date}</td>
  //     <td>${trip.arrival_time}</td>
  //     <td>${trip.airline_name}</td>
  //   </tr>`;
  // });
  // document.getElementById("table").innerHTML = postsContainer;
});
