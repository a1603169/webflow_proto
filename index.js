function checkOnlyOne(element) {
  
  const checkboxes 
      = document.getElementsByName("store");
  
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
}


function submit() {
  let Index = document.getElementById("htmlInput").value
  let firstIndex = Index.indexOf("<html") + 5
  let secondIndex = Index.indexOf('<head>') -2;
  
  let dataSet = Index.slice(firstIndex, secondIndex);

  if(dataSet.includes('data')) {
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll('"main-wrapper"', `"main-wrapper"${dataSet}`)
  } 

  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("<html", "<div")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("</html>", "")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("<body>", "")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("<body>", "</div>")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("<head>", "")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("</head>", "")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("<>", "")
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("font-family: Basel Grotesk", "")

  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("css/", `${document.getElementById("linkInput").value}/css/`);
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll(`"js/`, `"${document.getElementById("linkInput").value}/js/`);
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("fonts/", `${document.getElementById("linkInput").value}/fonts/`);
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("images/", `${document.getElementById("linkInput").value}/images/`);
  document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("videos/", `${document.getElementById("linkInput").value}/videos/`);

  if (document.getElementById("linkInput_store_eu").checked) { 
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.vn/", "https://rensoriginal.eu/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.ca/", "https://rensoriginal.eu/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://global.rensoriginal.com/", "https://rensoriginal.eu/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.co.uk/", "https://rensoriginal.eu/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.com/", "https://rensoriginal.eu/");
  }

  else if (document.getElementById("linkInput_store_ca").checked) {
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.vn/", "https://rensoriginal.ca/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.eu/", "https://rensoriginal.ca/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://global.rensoriginal.com/", "https://rensoriginal.ca/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.co.uk/", "https://rensoriginal.ca/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.com/", "https://rensoriginal.ca/");
  }

  else if (document.getElementById("linkInput_store_global").checked) {
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.vn/", "https://global.rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.ca/", "https://global.rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.eu/", "https://global.rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.co.uk/", "https://global.rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.com/", "https://global.rensoriginal.com/");
  }

  else if (document.getElementById("linkInput_store_uk").checked) {
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.vn/", "https://rensoriginal.co.uk/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.ca/", "https://rensoriginal.co.uk/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://global.rensoriginal.com/", "https://rensoriginal.co.uk/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.eu/", "https://rensoriginal.co.uk/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.com/", "https://rensoriginal.co.uk/");
  }

  else if (document.getElementById("linkInput_store_us").checked) {
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.vn/", "https://rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.ca/", "https://rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://global.rensoriginal.com/", "https://rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.co.uk/", "https://rensoriginal.com/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.eu/", "https://rensoriginal.com/");
  }

  else if (document.getElementById("linkInput_store_vn").checked) {
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.eu/", "https://rensoriginal.vn/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.ca/", "https://rensoriginal.vn/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://global.rensoriginal.com/", "https://rensoriginal.vn/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.co.uk/", "https://rensoriginal.vn/");
    document.getElementById("htmlInput").value = document.getElementById("htmlInput").value.replaceAll("https://rensoriginal.com/", "https://rensoriginal.vn/");
  }

  document.getElementById("submit-button").classList.add("hide");
  document.getElementById("after-submit-buttons").classList.remove("hide");
}

function copy() {
  copyText = document.getElementById("htmlInput");
  copyText.select();
  document.execCommand('copy');
  alert("You Copied the code!")
}

function refresh() {
  window.location.reload();
}
