const obtainArticleHeader = document.querySelector(".article__header");
console.log(obtainArticleHeader);

obtainArticleHeader.textContent = "Welcome to Michael's Blog!"

const allArticleHeader = document.querySelectorAll(".article__header")
console.log(allArticleHeader)

for (let i=0; i < allArticleHeader.length; i++) {
    allArticleHeader[i].classList.add("important")
}

const dashedClassReference = document.querySelector(".dashed");
console.log(dashedClassReference);

for (let i=0; i < dashedClassReference.length; i++) {
    dashedClassReference.classList.remove("dashed");
}

const classArticleFooter = document.querySelector(".article__footer")
console.log(classArticleFooter)

classArticleFooter.classList.add("goldenrod")
// console.log(classList(dashedClassReference))





// document.querySelectorAll.classList