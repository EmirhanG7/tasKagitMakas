const tasBtn = document.getElementById('tas');
const kagitBtn = document.getElementById('kagit');
const makasBtn = document.getElementById('makas');
const sonucGoster = document.getElementById('sonuc');

tasBtn.addEventListener('click', () => {
    oyunuDegerlendir("tas");
});

kagitBtn.addEventListener('click', () => {
    oyunuDegerlendir("kagit");
});

makasBtn.addEventListener('click', () => {
    oyunuDegerlendir("makas");
});

function oyunuDegerlendir(kullanici) {
    const secenekler = ['tas', 'kagit', 'makas'];
    const rastgeleIndex = Math.floor(Math.random() * 3);
    const bilgisayar = secenekler[rastgeleIndex];

    if (kullanici === bilgisayar) {
        sonucGoster.textContent = `Berabere! Kullanıcı: ${kullanici}, Bilgisayar: ${bilgisayar}`;
    } else if ((kullanici === "tas" && bilgisayar === "makas") ||
                (kullanici === "kagit" && bilgisayar === "tas") ||
                (kullanici === "makas" && bilgisayar === "kagit")) {
        sonucGoster.textContent = `Kazandınız! Kullanıcı: ${kullanici}, Bilgisayar: ${bilgisayar}`;
    } else {
        sonucGoster.textContent = `Bilgisayar Kazandı! Kullanıcı: ${kullanici}, Bilgisayar: ${bilgisayar}`;
    }
};