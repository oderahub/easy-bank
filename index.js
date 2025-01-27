const features = [
    {
        icon: "./images/icon-online.svg",
        title: "Online Banking",
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
        icon: "./images/icon-budgeting.svg",
        title: "Simple Budgeting",
        description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
        icon: "./images/icon-onboarding.svg",
        title: "Fast Onboarding",
        description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
        icon: "./images/icon-api.svg",
        title: "Open API",
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
];

const articles = [
    {
        image: "./images/image-currency.jpg",
        title: "Receive money in any currency with no fees",
        description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
        image: "./images/image-restaurant.jpg",
        title: "Treat yourself without worrying about money",
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
        image: "./images/image-plane.jpg",
        title: "Take your Easybank card wherever you go",
        description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
        image: "./images/image-confetti.jpg",
        title: "Our invite-only Beta accounts are now live!",
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
];

const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links-container');

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});


const featureContainer = document.querySelector(".features");
features.forEach((feature) => {
    const featureCard = document.querySelector("[data-feature]").cloneNode(true);
    featureCard.querySelector("[data-icon]").src = feature.icon;
    featureCard.querySelector("[data-icon]").alt = feature.title + " icon";
    featureCard.querySelector("[data-title]").textContent = feature.title;
    featureCard.querySelector("[data-description]").textContent = feature.description;
    featureCard.style.display = "block";
    featureContainer.appendChild(featureCard);
});

// Render articles dynamically
const articleContainer = document.querySelector(".articles");
articles.forEach((article) => {
    const articleCard = document.querySelector("[data-article]").cloneNode(true);
    articleCard.querySelector("[data-image]").src = article.image;
    articleCard.querySelector("[data-image]").alt = article.title;
    articleCard.querySelector("[data-title]").textContent = article.title;
    articleCard.querySelector("[data-description]").textContent = article.description;
    articleCard.querySelector("[data-link]").href = "#";
    articleCard.style.display = "block";
    articleContainer.appendChild(articleCard);
});

// Remove templates
document.querySelector("[data-feature]").remove();
document.querySelector("[data-article]").remove();
