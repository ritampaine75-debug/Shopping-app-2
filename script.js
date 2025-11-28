// --- LOADING SYSTEM ---
function toggleLoading(show, text = "Loading...") {
    let overlay = document.getElementById('loadingOverlay');
    
    if (!overlay) {
        // Create overlay if it doesn't exist
        overlay = document.createElement('div');
        overlay.id = 'loadingOverlay';
        overlay.innerHTML = `
            <div class="spinner"></div>
            <div class="loading-text" id="loadText">${text}</div>
        `;
        document.body.appendChild(overlay);
    } else {
        document.getElementById('loadText').innerText = text;
    }

    if (show) {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// --- TOAST MESSAGE ---
function showToast(msg) {
    let t = document.getElementById("toast");
    if(!t) {
        t = document.createElement('div');
        t.id = 'toast';
        document.body.appendChild(t);
        // Add CSS for toast dynamically if missing
        t.style.cssText = "visibility:hidden; min-width:250px; background:#333; color:#fff; text-align:center; border-radius:25px; padding:16px; position:fixed; z-index:1000; bottom:80px; left:50%; transform:translateX(-50%); font-size:14px;";
    }
    t.innerText = msg;
    t.style.visibility = "visible";
    t.style.animation = "fadein 0.5s, fadeout 0.5s 2.5s";
    setTimeout(() => { t.style.visibility = "hidden"; }, 3000);
}
// Function to control loader
function toggleLoading(show) {
    const loader = document.getElementById('globalLoader');
    if(show) {
        loader.classList.add('active');
    } else {
        loader.classList.remove('active');
    }
}

// EXAMPLE: Show loader on page load, then hide after data loads
toggleLoading(true); // Show immediately
// In your Firebase calls, put toggleLoading(false) when data arrives