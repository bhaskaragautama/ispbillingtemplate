document.addEventListener("DOMContentLoaded", function () {
    // Fetch the content of nav.html
    fetch("template/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            // Specify the target container ID on each page
            const targetContainerId = "navbar";
            const targetContainer = document.getElementById(targetContainerId);

            // Insert the navigation content at the beginning of the specified container
            if (targetContainer) {
                targetContainer.insertAdjacentHTML("afterbegin", data);
            } else {
                console.error(
                    `Target container with ID '${targetContainerId}' not found.`
                );
            }
        })
        .catch((error) => console.error("Error fetching navigation:", error));
});
