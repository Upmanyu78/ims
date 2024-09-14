function toggleDropdown() {
    var dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('.profile-menu img')) {
        var dropdowns = document.getElementsByClassName("profile-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
function updateTime() {
    var now = new Date();
    var date = now.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
    var time = now.toLocaleTimeString('en-GB', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });

    document.getElementById('current-date').innerText = date;
    document.getElementById('current-time').innerText = time;
}

// Call the function once on page load
updateTime();

// Update the time every second
setInterval(updateTime, 1000);