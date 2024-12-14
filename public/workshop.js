const host = window.location.origin;

async function createAgent() {
  console.log("Creating Agent");
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
}

async function loadNewAgent() {
  await fetch(`${host}/agents`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data);
    });
}

window.onload = loadNewAgent();
