const submit = document.getElementById("submit");
const source = document.getElementById("from-where");
const destination = document.getElementById("where-to");

submit.addEventListener("click", async (s) => {
  s.preventDefault();
  if (source.value == "" || destination.value == "") {
    alert("Please fill in all the fields");
  } else {
    const trips = await fetch(
      "http://localhost:3000/flights/?source=" +
        source.value +
        "&destination=" +
        destination.value,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const tripsData = await trips.json();
    document.getElementById("table").innerHTML = "";
    let postsContainer;
    tripsData.forEach((trip) => {
      console.log(trip);
      postsContainer += `<tr>
        <td>${trip.source}</td>
        <td>${trip.destination}</td>
        <td>${trip.departure_date}</td>
        <td>${trip.daparture_time}</td>
        <td>${trip.arrival_date}</td>
        <td>${trip.arrival_time}</td>
        <td>${trip.airline_name}</td>
      </tr>`;
    });
    document.getElementById("table").innerHTML = postsContainer;
  }
});
