document.querySelector('#dark-mode').addEventListener('change', function(e) {
    
    if(e.target.checked) {
        document.documentElement.style.setProperty('--background', '#000');
        document.documentElement.style.setProperty('--background-content', '#1d1c1c');
        document.documentElement.style.setProperty('--box-shadow-content', '#5d5656');
        document.documentElement.style.setProperty('--border-color-button', '#000');
        document.documentElement.style.setProperty('--text-color', '#fff');
    } else {
        document.documentElement.style.setProperty('--background', '#f1f1f1');
        document.documentElement.style.setProperty('--background-content', '#fff');
        document.documentElement.style.setProperty('--box-shadow-content', '#ccc');
        document.documentElement.style.setProperty('--border-color-button', '#f1f1f1');
        document.documentElement.style.setProperty('--text-color', '#000');
    }

});