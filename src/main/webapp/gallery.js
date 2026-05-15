// Gallery JS to add smooth image zoom on click and subtle button interaction effects.

// When user clicks on image, open it in a new window with smooth zoom effect.
document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
        const imageUrl = img.src;
        const newWindow = window.open("", "_blank");
        newWindow.document.write(`
            <html>
            <head>
                <title>View Image</title>
                <style>
                    body {
                        margin: 0; padding: 0;
                        display: flex; justify-content: center; align-items: center;
                        height: 100vh;
                        background-color: #111;
                    }
                    img {
                        max-width: 90vw;
                        max-height: 90vh;
                        box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
                        animation: zoomIn 0.6s ease forwards;
                    }
                    @keyframes zoomIn {
                        from { transform: scale(0.7); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    body::-webkit-scrollbar { display: none; }
                </style>
            </head>
            <body>
                <img src="${imageUrl}" alt="Image View" />
            </body>
            </html>
        `);
    });
});
