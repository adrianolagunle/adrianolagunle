let bodyElement = document.querySelector("body")
bodyElement.append()

let mainElement = document.createElement("main")
bodyElement.append(mainElement)

let imageElement = document.createElement("img")
imageElement.src = "https://media.kohlsimg.com/is/image/kohls/4569317_Light_Berry?wid=1200&hei=1200&op_sharpen=1"
imageElement.className = "light-berry"
mainElement.append(imageElement)

let imageElement2 = document.createElement("img")
imageElement2.src = "https://media.kohlsimg.com/is/image/kohls/4569317_Navy?wid=1200&hei=1200&op_sharpen=1"
imageElement2.className = "navy"
mainElement.append(imageElement2)

let imageElement3 = document.createElement("img")
imageElement3.src = "https://media.kohlsimg.com/is/image/kohls/4569317_Saffron?wid=1200&hei=1200&op_sharpen=1"
imageElement3.className = "saffron"
mainElement.append(imageElement3)

imageElement.addEventListener("click", function (){
    this.click
})