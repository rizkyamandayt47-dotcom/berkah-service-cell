// Pesan saat website selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    console.log("BERKAH SERVICE CELL website aktif!");

});


// Efek tombol WhatsApp
const whatsappButtons = document.querySelectorAll(
    'a[href*="wa.me"]'
);

whatsappButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log(
            "Membuka WhatsApp BERKAH SERVICE CELL..."
        );

    });

});
