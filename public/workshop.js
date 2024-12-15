document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1200,
    once: false,
    easing: "ease",
  });
});

const host = window.location.origin;

async function createAgent() {
  console.log("Creating Agent");
  // `${host}/agent`
  // "http://localhost:3000/agent"
  await fetch(`${host}/agent`, {
    method: "POST",
    body: JSON.stringify({
      agentName: `${document.getElementById("agentName").value}`,
      agentIcon: `${document.getElementById("agentIcon").value}`,
      agentDescription: `${document.getElementById("agentDescription").value}`,
      agentRole: `${document.getElementById("agentRole").value}`,

      ability1name: `${document.getElementById("ability1name").value}`,
      ability1description: `${
        document.getElementById("ability1description").value
      }`,
      ability2name: `${document.getElementById("ability2name").value}`,
      ability2description: `${
        document.getElementById("ability2description").value
      }`,

      grenade: `${document.getElementById("grenade").value}`,
      grenadedescription: `${
        document.getElementById("grenadedescription").value
      }`,
      ultimate: `${document.getElementById("ultimate").value}`,
      ultimatedescription: `${
        document.getElementById("ultimatedescription").value
      }`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  await loadNewAgent();
}

async function loadNewAgent() {
  alert("Successfully Created an Agent!");
  // `${host}/agents`
  // "http://localhost:3000/agents"
  const response = await fetch(`${host}/agents`);
  const data = await response.json();
  console.log("Data: ", data);

  const container = document.getElementById("createdAgents");

  // Show agent details
  container.innerHTML = `
  <h2>Here are all of the Agents you created!</h2>
   <div class="swiper-container">
       <div class="swiper-wrapper">
           ${createAbilitySlides(data)}
       </div>
   </div>
`;

  new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: false,
    },
    freeMode: false,
    simulateTouch: false,
    allowTouchMove: false,
  });
}

const currentAgents = [
  "Brimstone",
  "Viper",
  "Omen",
  "Killjoy",
  "Cypher",
  "Sova",
  "Sage",
  "Phoenix",
  "Jett",
  "Reyna",
  "Raze",
  "Breach",
  "Skye",
  "Yoru",
  "Astra",
  "KAY/O",
  "Chamber",
  "Neon",
  "Fade",
  "Harbor",
  "Gekko",
  "Deadlock",
  "Clove",
  "Iso",
  "Vyse",
];

function createAbilitySlides(data) {
  const newAgents = [];
  for (let i = 0; i < data.length; i++) {
    if (
      !currentAgents.includes(data[i].agent_name) &&
      !exampleAgents.includes(data[i].agent_name)
    ) {
      newAgents.push(data[i]);
    }
  }

  return newAgents
    .map((ability) => {
      return `
          <div class="swiper-slide">
              <img src="${ability.agent_icon}" alt="${ability.agent_name}">
              <h2>${ability.agent_name}</h2>
              <p> <b>Agent Role:</b> ${ability.agent_role || "Unknown Role"}</p>
              <p> <b>Agent Description:</b> ${
                ability.agent_description || "No description available."
              }</p>
              <h3>Agent Abilities</h3>
              <h4>${ability.ability_1_name || "Ability 1 Name Missing"}</h4>
              <p>${
                ability.ability_1_description || "Ability 1 Description Missing"
              }</p>
              <h4>${ability.ability_2_name || "Ability 2 Name Missing"}</h4>
              <p>${
                ability.ability_2_description || "Ability 2 Description Missing"
              }</p>
              <h4>${ability.grenade_name || "Grenade Name Missing"}</h4>
              <p>${
                ability.grenade_description || "Grenade Description Missing"
              }</p>
              <h4>${ability.ultimate_name || "Grenade Name Missing"}</h4>
              <p>${
                ability.ultimate_description || "Grenade Description Missing"
              }</p>
          </div>

              `;
    })
    .join("");
}

// window.onload = loadNewAgent();

const exampleAgents = ["Sung Jin Woo", "Cha Hae In", "Choi Jong In"];

async function loadExampleAgent() {
  // `${host}/agents`
  // "http://localhost:3000/agents"
  const response = await fetch(`${host}/agents`);
  const data = await response.json();
  console.log("Data: ", data);

  container_two = document.getElementById("exAgents");

  // Show example agent details
  container_two.innerHTML = `
  <h2>Solo Leveling Inspired Agents!</h2>
   <div class="swiper-container">
       <div class="swiper-wrapper">
           ${createExampleAgentSlides(data)}
       </div>
   </div>
`;

  new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: false,
    },
    freeMode: false,
    simulateTouch: false,
    allowTouchMove: false,
  });
}

function createExampleAgentSlides(data) {
  const newAgents = [];
  for (let i = 0; i < data.length; i++) {
    if (exampleAgents.includes(data[i].agent_name)) {
      newAgents.push(data[i]);
    }
  }

  return newAgents
    .map((ability) => {
      return `
          <div class="swiper-slide">
              <img src="${ability.agent_icon}" alt="${ability.agent_name}">
              <h2>${ability.agent_name}</h2>
              <p> <b>Agent Role:</b> ${ability.agent_role || "Unknown Role"}</p>
              <p> <b>Agent Description:</b> ${
                ability.agent_description || "No description available."
              }</p>
              <h3>Agent Abilities</h3>
              <h4>${ability.ability_1_name || "Ability 1 Name Missing"}</h4>
              <p>${
                ability.ability_1_description || "Ability 1 Description Missing"
              }</p>
              <h4>${ability.ability_2_name || "Ability 2 Name Missing"}</h4>
              <p>${
                ability.ability_2_description || "Ability 2 Description Missing"
              }</p>
              <h4>${ability.grenade_name || "Grenade Name Missing"}</h4>
              <p>${
                ability.grenade_description || "Grenade Description Missing"
              }</p>
              <h4>${ability.ultimate_name || "Grenade Name Missing"}</h4>
              <p>${
                ability.ultimate_description || "Grenade Description Missing"
              }</p>
          </div>

              `;
    })
    .join("");
}

window.onload = loadExampleAgent();
