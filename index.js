let input = document.getElementById("input");
let h2 = document.querySelector("h2");
let qr_img = document.querySelector(".qr-img");
let generate = document.querySelector("button");
let url = "www.google.com"

let generateQr = async () => {
    let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    try {
        h2.innerText = "Loading...";
        let response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        let blob = await response.blob();
        let imgUrl = URL.createObjectURL(blob);
        
        qr_img.src = imgUrl;
        h2.innerText = "QR Code Generated";
    } catch (error) {
        console.error("Error generating QR code:", error);
        h2.innerText = "Failed to Generate QR Code";
    }
}

generate.addEventListener("click", (e) => {
    e.preventDefault();
    url = input.value.trim();
    generateQr();
});
generateQr();