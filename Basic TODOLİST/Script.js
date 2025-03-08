document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const addButton = document.getElementById("addButton");
    const todoContainer = document.getElementById("todoContainer");

    addButton.addEventListener("click", () => {
        if (inputField.value.trim() === "") {
            alert("Lütfen bir görev girin!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = inputField.value;
        li.addEventListener("click", () => li.classList.toggle("completed"));
        li.addEventListener("dblclick", () => li.remove());

        todoContainer.appendChild(li);
        inputField.value = "";
    });

    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
