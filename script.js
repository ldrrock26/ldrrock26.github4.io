document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
            });
        });
    }

    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        revealElements.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 70) {
                item.classList.add("visible");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        const toggleBackToTop = () => {
            if (window.scrollY > 260) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        };

        toggleBackToTop();
        window.addEventListener("scroll", toggleBackToTop);

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    const seriesCards = document.querySelectorAll(".series-card");

    if (filterButtons.length && seriesCards.length) {
        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                const selected = button.dataset.filter;

                seriesCards.forEach((card) => {
                    const category = card.dataset.category;

                    if (selected === "all" || category === selected) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                });
            });
        });
    }

    const characterSearch = document.getElementById("characterSearch");
    const roleButtons = document.querySelectorAll(".role-btn");
    const characterCards = document.querySelectorAll(".character-card");

    if (characterCards.length) {
        let currentRole = "all";

        const updateCharacterCards = () => {
            const searchValue = characterSearch ? characterSearch.value.trim().toLowerCase() : "";

            characterCards.forEach((card) => {
                const cardName = (card.dataset.name || "").toLowerCase();
                const cardRole = card.dataset.role || "";

                const nameMatch = cardName.includes(searchValue);
                const roleMatch = currentRole === "all" || cardRole === currentRole;

                if (nameMatch && roleMatch) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        };

        if (characterSearch) {
            characterSearch.addEventListener("input", updateCharacterCards);
        }

        if (roleButtons.length) {
            roleButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    roleButtons.forEach((btn) => btn.classList.remove("active"));
                    button.classList.add("active");
                    currentRole = button.dataset.roleFilter;
                    updateCharacterCards();
                });
            });
        }
    }

    if (window.M) {
        const sliderEl = document.querySelector(".mario-slider");
        let sliderInstance = null;
        let sliderAutoplay = null;

        if (sliderEl) {
            sliderInstance = M.Carousel.init(sliderEl, {
                fullWidth: true,
                indicators: true,
                duration: 200
            });

            const sliderPrev = document.querySelector(".slider-prev");
            const sliderNext = document.querySelector(".slider-next");
            const sliderAutoplayBtn = document.querySelector(".slider-autoplay");

            if (sliderPrev) {
                sliderPrev.addEventListener("click", () => {
                    sliderInstance.prev();
                });
            }

            if (sliderNext) {
                sliderNext.addEventListener("click", () => {
                    sliderInstance.next();
                });
            }

            if (sliderAutoplayBtn) {
                sliderAutoplayBtn.addEventListener("click", () => {
                    if (sliderAutoplay) {
                        clearInterval(sliderAutoplay);
                        sliderAutoplay = null;
                    } else {
                        sliderAutoplay = setInterval(() => {
                            sliderInstance.next();
                        }, 3000);
                    }
                });
            }
        }
    }
});