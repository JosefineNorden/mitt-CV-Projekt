async function LoadCV() {
  try {
    const response = await fetch("JSON/cv.json"); // Vägen från HTML/cv.html till JSON-filen

    if (!response.ok) {
      throw new Error('Kunde inte hämta cv.json');
    }

    const data = await response.json();
    populateCV(data);

  } catch (error) {
    console.error('Fel vid inläsning av CV-data:', error);
  }
}

function populateCV(cvData) {
  // utbildningar
  const educationSection = document.getElementById("educationSubsection");
  cvData.utbildningar.forEach(utbildning => {
    educationSection.innerHTML += `
      <article>
        <h3>${utbildning.titel}</h3>
        <p class="ingress">${utbildning.lärosäte}</p>
        <p class="date">${utbildning.tid}</p>
        <p class="breadtext">${utbildning.beskrivning}</p>
      </article>
    `;
  });

  // arbeten
  const workSection = document.getElementById("workSubsection");
  cvData.arbeten.forEach(arbete => {
    workSection.innerHTML += `
      <article>
        <h3>${arbete.titel}</h3>
        <p class="ingress">${arbete.arbetsköpare}</p>
        <p class="date">${arbete.tid}</p>
        <p class="breadtext">${arbete.beskrivning}</p>
      </article>
    `;
  });

  // övrigt
  const otherSection = document.getElementById("otherSubsection");
  cvData.övrigt.forEach(item => {
    otherSection.innerHTML += `
      <article>
        <h3>${item.titel}</h3>
        <p class="date">${item.merinfo}</p>
        <p class="breadtext">${item.beskrivning}</p>
      </article>
    `;
  });
}

//sidan laddas
LoadCV();
