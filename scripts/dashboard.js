const createAirlineform = document.getElementById("createAirline");
const AirlineId = document.getElementById("airlineId");
const AirlineName = document.getElementById("airlineName");
const AirlineEmail = document.getElementById("airlineEmail");
const AirlinePhone = document.getElementById("airlinePhone");

const updateAirlineform = document.getElementById("updateAirline");
const updateAirlineId = document.getElementById("updateAirlineId");
const updateAirlineName = document.getElementById("updateAirlineName");
const updateAirlineEmail = document.getElementById("updateAirlineEmail");
const updateAirlinePhone = document.getElementById("updateAirlinePhone");

const getAirlineById = document.getElementById("getAirlineById");
const airlineIdGet = document.getElementById("airlineIdGet");
const getAllAirlines = document.getElementById("getAllAirlines");

const deleteAirlineform = document.getElementById("deleteAirline");
const AirlineIdDelete = document.getElementById("airlineIdDelete");

const createTripform = document.getElementById("createTrip");
const TripId = document.getElementById("TripId");
const TripAirlineId = document.getElementById("TripAirline_id");
const DepartureDate = document.getElementById("Departure_date");
const DepartureTime = document.getElementById("Departure_time");
const ArrivalDate = document.getElementById("Arrival_date");
const ArrivalTime = document.getElementById("Arrival_time");
const Source = document.getElementById("Source");
const Destination = document.getElementById("Destination");
const DepartureAirport = document.getElementById("Departure_airport");
const ArrivalAirport = document.getElementById("Arrival_aiport");
const Price = document.getElementById("price");

//get form data from frontend and send to server
console.log(createAirlineform.name);

createAirlineform.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    Airline_id: AirlineId.value,
    Airline_name: AirlineName.value,
    Airline_email: AirlineEmail.value,
    Airline_phone: AirlinePhone.value,
  };
  console.log(data);
  fetch("http://localhost:3000/airlines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //get token from local storage
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    //if response is 201, redirect to dashboard
    .then((res) => {
      if (res.status === 201) {
        res.json().then((data) => {
          console.log(data);
          alert(`Airline ${data.airline_name} created successfully`);
        });
      }
    })
    .then((data) => {
      console.log(data);
    });
});
updateAirlineform.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    Airline_id: updateAirlineId.value,
    Airline_name: updateAirlineName.value,
    Airline_email: updateAirlineEmail.value,
    Airline_phone: updateAirlinePhone.value,
  };
  console.log(data);
  fetch(`http://localhost:3000/airlines/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //get token from local storage
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    //if response is 200, alert success
    .then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          alert(`Airline ${data.airline_name} updated successfully`);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
getAirlineById.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(airlineIdGet.value);
  fetch(`http://localhost:3000/airlines/${airlineIdGet.value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //get token from local storage
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => {
    //if response is 200, alert success
    if (res.status === 200) {
      res.json().then((data) => {
        console.log(data);
        alert(
          `Airline ${data.airline_name} , ${data.airline_email}, ${data.airline_phone}`
        );
      });
    }
  });
});
getAllAirlines.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`http://localhost:3000/airlines`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //get token from local storage
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => {
    //if response is 200, alert success
    if (res.status === 200) {
      res.json().then((data) => {
        console.log(data);
        s = "";
        data.forEach((airline) => {
          s += `Airline ${airline.airline_name} , ${airline.airline_email}, ${airline.airline_phone}\n`;
        });
        alert(s);
      });
    }
  });
});

deleteAirlineform.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(AirlineIdDelete.value);

  fetch(`http://localhost:3000/airlines/${AirlineIdDelete.value}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //get token from local storage
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    //if response is 200, alert success
    .then((res) => {
      if (res.status === 200) {
        alert(`Airline deleted successfully`);
      }
    });
});

createTripform.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    Trip_id: TripId.value,
    Airline_id: TripAirlineId.value,
    Departure_date: DepartureDate.value,
    Daparture_time: DepartureTime.value,
    Arrival_date: ArrivalDate.value,
    Arrival_time: ArrivalTime.value,
    Source: Source.value,
    Destination: Destination.value,
    Departure_airport: DepartureAirport.value,
    Arrival_aiport: ArrivalAirport.value,
    Price: Price.value,
  };
  console.log(data);
  fetch("http://localhost:3000/flights", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //get token from local storage
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  })
    //if response is 201, redirect to dashboard
    .then((res) => {
      if (res.status === 201) {
        res.json().then((data) => {
          console.log(data);
          alert(`Trip ${data.trip_id} created successfully`);
        });
      }
    })
    .then((data) => {
      console.log(data);
    });
});
