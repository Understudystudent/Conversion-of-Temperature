const fahrenheitInput = document.querySelector("#fahrenheit");
const CelsiusInput = document.querySelector("Celsius");
const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        switch (e.target.name) {
            case "fahrenheit":
                CelsiusInput.value = (value - 32) / 1.8;
                break;
            case "Celsius":
                fahrenheitInput.value = (value * 1.8) + 32;
                break;
        }
    });
}