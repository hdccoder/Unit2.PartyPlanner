let happenings = []
const events = document.querySelector(".events")

function render(){
  const html = happenings.map ((event) => {
    return `
        <
        <div class="jstrnfr">
        <h3>${event.name}</h3>
        <p>${event.description}<p>
        <h3>${event.date}<</h3>
        <h3>${event.location}</h3>
        <button>Cancel Party</button>
        </div>
        `

  })
  events.innerHTML = html.join("")
}


async function fetchEvents(){
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events/")
    console.log(response)
    const data = await response.json()
    console.log(data)
    happenings = data.data
   
    render()
}

fetchEvents()