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

      ability1Name: `${document.getElementById("ability1Name").value}`,
      ability1Des: `${document.getElementById("ability1Des").value}`,
      ability2Name: `${document.getElementById("ability2Name").value}`,
      ability2Des: `${document.getElementById("ability2Des").value}`,

      grenadeName: `${document.getElementById("grenadeName").value}`,
      grenadeDes: `${document.getElementById("grenadeDes").value}`,
      ultName: `${document.getElementById("ultName").value}`,
      ultName: `${document.getElementById("ultDes").value}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
