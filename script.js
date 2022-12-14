const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generationBtn = wrapper.querySelector(".form button"),
qeImg = wrapper.querySelector(".qr-code-img");

generationBtn.addEventListener(".click", () =>) {
    let qrValue = qrInput.vale;
    if(!qrValue) return; //if the input is empty then returnfrom here
    qrImg.src = 'https://apiqrserver.com/v1/create-qr-code/?size=170x170&data=${}';
    qeImg.addEventListener("load", () => {
        wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active");
    }
});