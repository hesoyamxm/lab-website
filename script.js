// 1️⃣ Зберігання інформації про систему
const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};

localStorage.setItem("systemInfo", JSON.stringify(info));

const footer = document.querySelector("footer");
const stored = JSON.parse(localStorage.getItem("systemInfo"));

footer.innerHTML += `
<p>Браузер: ${stored.userAgent}</p>
<p>Платформа: ${stored.platform}</p>
<p>Мова: ${stored.language}</p>
`;


// 2️⃣ Отримання коментарів (варіант 6)
fetch("https://jsonplaceholder.typicode.com/posts/6/comments")
    .then(response => response.json())
    .then(data => {
        const section = document.createElement("section");
        section.innerHTML = "<h2>Коментарі роботодавців</h2>";

        data.forEach(comment => {
            const block = document.createElement("div");
            block.style.marginBottom = "15px";
            block.style.padding = "10px";
            block.style.border = "1px solid #ccc";

            block.innerHTML = `
                <strong>${comment.name}</strong>
                <p>${comment.body}</p>
            `;

            section.appendChild(block);
        });

        document.querySelector("main").appendChild(section);
    });


// 3️⃣ Модальне вікно через 1 хв
setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


// 4️⃣ Денна / Нічна тема
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Автоматична зміна теми
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add("dark");
}