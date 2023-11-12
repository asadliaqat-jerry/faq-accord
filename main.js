let accordBtn = document.querySelector(".accord_question");

// adding event in multiple instances of same class..
document.querySelectorAll(".accord_question").forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log("CLicked");

        if (!item.classList.contains('collapsing')) {

            if (!item.classList.contains("open")) {
                console.log("open accordion");

                item.nextElementSibling.style.display = "block";
                let accHeight = item.nextElementSibling.clientHeight;
                setTimeout(() => {
                    item.nextElementSibling.style.height = accHeight + "px";
                    item.nextElementSibling.display = "";
                }, 1);

                item.nextElementSibling.classList = "accord_collapse collapsing";

                setTimeout(() => {
                    console.log("open accordion answer");
                    item.nextElementSibling.classList = "accord_collapse collapse open";
                    item.nextElementSibling.style.height = '';
                }, 300);
            } else {
                item.nextElementSibling.classList = "accord_collapse collapsing";
                setTimeout(() => {
                    item.nextElementSibling.style.height = '0px';
                })

                setTimeout(() => {
                    console.log("close accordion answer");
                    item.nextElementSibling.classList = "accord_collapse collapse";
                    item.nextElementSibling.style.height = '';
                }, 300);
            }
        }

        item.classList.toggle("open");

        item.nextElementSibling.classList.toggle('open');
    });
});
