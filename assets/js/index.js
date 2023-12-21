const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

// -------------------------------

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".btn-envia").classList.remove("active-btn");
            this.classList.add("btn-envia");
            document.querySelector(".btn-envia").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // document.querySelector(".theme-btn").addEventListener("click", () => {
    //     document.body.classList.toggle("light-mode");
    // });
})();