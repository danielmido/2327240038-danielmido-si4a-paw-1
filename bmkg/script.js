fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("gempabumi").innerHTML = /* html */`
      <div class="card mb-3">
        <div class="row">
          <div class="col-lg-6 pt-2 pt-lg-3 ps-3 ps-lg-5">
            <div class="card-body">
              <h2 class="card-title">Wilayah Gempa:</h2>
              <p class="fs-4">${data.Infogempa.gempa.Wilayah}</p>
              <ul>
                <li>Tanggal: ${data.Infogempa.gempa.Tanggal}</li>
                <li>Dirasakan: ${data.Infogempa.gempa.Dirasakan}</li>
                <li>Magnitude: ${data.Infogempa.gempa.Magnitude}</li>
                <li>Kedalaman: ${data.Infogempa.gempa.Kedalaman}</li>
                <li>Potensi: ${data.Infogempa.gempa.Potensi}</li>
              </ul>
              <a href="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" target="_blank">
                <button type="button" class="btn btn-dark mt-1">Lihat gambar penuh</button>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <img  class="img-fluid p-1" src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}">
          </div>
        </div>
      </div>
    `
  })

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
  .then(res => res.json())
  .then(data => {
    data.Infogempa.gempa.forEach((list) => {
      document.getElementById("gempabumi15").innerHTML += /* html */`
      <div class="col-lg-4">
        <div class="card mb-3">
          <div>
            <div class="card-body" style="min-height: 330px">
              <h4>${list.Wilayah}</h4>
              <ul>
                <li>Tanggal: ${list.Tanggal}</li>
                <li>Dirasakan: ${list.Dirasakan}</li>
                <li>Magnitude: ${list.Magnitude}</li>
                <li>Kedalaman: ${list.Kedalaman}</li>
                <li>Potensi: ${list.Potensi}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      `
    });
  })