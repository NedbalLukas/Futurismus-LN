// Animace GSAP
gsap.from("header h1", { opacity: 0, y: -50, duration: 1 });
gsap.from("header p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".image-container img", { opacity: 0, scale: 0.8, duration: 1.5, ease: "bounce", scrollTrigger: "#intro" });
gsap.from("#technology h2", { opacity: 0, x: -50, duration: 1, scrollTrigger: "#technology" });
gsap.from("#journey .journey-step", {
    opacity: 0, 
    y: 50, 
    duration: 1, 
    stagger: 0.2, 
    scrollTrigger: "#journey"
});

// Tmavý režim
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('form').classList.toggle('dark-mode');
    themeToggle.classList.toggle('dark-mode');
});
// Přidání funkce pro zobrazení okna s poděkováním a obnovení stránky
document.getElementById('flightForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Zobrazí okno s poděkováním
    if (confirm('Děkujeme za rezervaci! Budeme se na vás těšit.')) {
        // Obnoví stránku
        location.reload();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");

    // Funkce pro nastavení povolených dat
    function setMinDate() {
        const today = new Date();
        
        // Nastavíme minimální datum na nejbližší neděli
        const nextSunday = new Date(today.setDate(today.getDate() + (7 - today.getDay())));

        // Nastavíme hodnotu min a max pro input
        dateInput.min = nextSunday.toISOString().split('T')[0];

        // Vytvoříme pole pro neděle každý druhý týden
        const allowedDates = [];
        for (let i = 0; i < 10; i++) { // Například 10 nedělí dopředu
            const sunday = new Date(nextSunday);
            sunday.setDate(sunday.getDate() + (i * 14)); // Každé 2 týdny
            allowedDates.push(sunday.toISOString().split('T')[0]);
        }

        // Nastavíme validaci pro datum
        dateInput.setAttribute("list", "allowed-dates");
        const dataList = document.createElement("datalist");
        dataList.id = "allowed-dates";
        allowedDates.forEach(date => {
            const option = document.createElement("option");
            option.value = date;
            dataList.appendChild(option);
        });
        document.body.appendChild(dataList);
    }

    setMinDate(); // Zavolání funkce
});
const flightForm = document.getElementById("flightForm");
flightForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Zabráníme odeslání formuláře

    // Zobrazíme okno s potvrzením
    alert("Děkujeme! Budeme se na vás těšit.");
    
    // Načteme stránku znovu
    location.reload();
});
