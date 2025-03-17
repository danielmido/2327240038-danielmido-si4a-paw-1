document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
/*
Note:
- index [0], dst... digunakan untuk menandakan tag body yang keberapa (dimulai dari nol)
*/

// variabel
let nama = "Ahmad";
let umur = 20;
let statusMahasiswa = true;

document.getElementById('nama').innerHTML = "Nama: " + nama;
document.getElementById('umur').innerHTML = `Umur: ${umur}`;

/*
array beserta forEach untuk pemanggilannya:
- tanda "+=" digunakan untuk menampilkan semua isi yang ada di array
- kalau pakai "=" saja, hanya "Dedi" saja yang akan muncul (isi array yang terakhir)
*/
let mahasiswa = [
  "Ahmad", "Budi", "Caca", "Dedi"
]
mahasiswa.forEach((mhs) => {
  document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
})

let nilai = [
  { nama: "Ahmad", nilai: 80 },
  { nama: "Budi", nilai: 70 },
  { nama: "Caca", nilai: 90 },
  { nama: "Dedi", nilai: 85 },
]
nilai.forEach((data) => {
  document.getElementById('nilai').innerHTML += /*html*/`<tr>
    <td>${data.nama}</td>
    <td>${data.nilai}</td>
  </tr>`;
})

fetch('https://dummyjson.com/quotes')
  .then(res => res.json())
  .then(data => {
    console.log(data.quotes)
    data.quotes.forEach((q) => {
      document.getElementById('quotes').innerHTML += `<li>${q.quote} - ${q.author}</li>`;
    })
  });