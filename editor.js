let textareas = document.querySelectorAll("textarea");

let resultContainer = document.querySelector(".result-area");
let runBtn = document.getElementById("runBtn");






textareas.forEach((e) => {

    runBtn.addEventListener("click", () => {
        let html_code = textareas[0].value;
        let css_code = textareas[1].value;
        let js_code = textareas[2].value;

        resultContainer.contentDocument.body.innerHTML = html_code + "<style>" + css_code + "<style/>";
        resultContainer.contentWindow.eval(js_code)



    })
})