const eventList = document.getElementById("eventList");
const filterInput = document.getElementById("filter");

// Fetch events from local JSON file
async function loadEvents() {
  try {
    const response = await fetch("events.json");  // Fetch data from events.json
    const events = await response.json();         // Convert JSON to JS array
    renderEvents(events);                         // Render all events

    // Filter logic
    filterInput.addEventListener("input", () => {
      const keyword = filterInput.value.toLowerCase();
      const filtered = events.filter(e => e.category.toLowerCase().includes(keyword));
      renderEvents(filtered);
    });
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

// Function to display events
function renderEvents(events) {
  eventList.innerHTML = events.map(({ name, category, date }) => `
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm">
        <div class="card-body">
          <h5>${name}</h5>
          <p>Category: ${category}</p>
          <p>Date: ${date}</p>
        </div>
      </div>
    </div>
  `).join("");
}

loadEvents();
