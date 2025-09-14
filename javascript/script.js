document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les conteneurs .pictures
    const slideshows = document.querySelectorAll(".pictures");

    function startSlideshow(container) {
        const images = Array.from(container.querySelectorAll("img"));
        if (images.length === 0) return;

        let index = 0;

        container.addEventListener("click", () => {
            // Calcul du prochain index
            images[index].classList.remove("first");
            index = (index + 1) % images.length;
            images[index].classList.add("first");
        });
    }

    slideshows.forEach(startSlideshow);

    // ---------- Tooltip ----------
    const tooltip = document.createElement("div");
    tooltip.textContent = "Cliquer";
    tooltip.className = "tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.background = "rgba(0,0,0,0.1)";
    tooltip.style.color = "white";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "4px";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.opacity = 0;
    tooltip.style.transition = "opacity 0.2s";
    document.body.appendChild(tooltip);

    slideshows.forEach(slideshow => {
        slideshow.addEventListener("mouseenter", () => {
            tooltip.style.opacity = 1;
        });
        slideshow.addEventListener("mouseleave", () => {
            tooltip.style.opacity = 0;
        });
        slideshow.addEventListener("mousemove", (e) => {
            tooltip.style.left = (e.pageX + 10) + "px";
            tooltip.style.top = (e.pageY + 10) + "px";
        });
    });
});
