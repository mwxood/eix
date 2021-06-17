const footer = () => {
    const year = document.querySelector('.year');
    const date = new Date();
    year.innerHTML = date.getFullYear();
};

export default footer;