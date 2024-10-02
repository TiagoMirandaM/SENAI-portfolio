const printSuperman = document.querySelector("#imgPrintSuperman")
const linkSuperman = document.querySelector("#imgLinkSuperman")

const printHospedagem = document.querySelector("#imgPrintHospedagem")
const linkHospedagem = document.querySelector("#imgLinkHospedagem")

const printImobiliaria = document.querySelector("#imgPrintImobiliaria")
const linkImobiliaria = document.querySelector("#imgLinkImobiliaria")

const printDoutor = document.querySelector("#imgPrintDoutor")
const linkDoutor = document.querySelector("#imgLinkDoutor")

const printAdvocacia = document.querySelector("#imgPrintAdvocacia")
const linkAdvocacia = document.querySelector("#imgLinkAdvocacia")

const printGameStore = document.querySelector("#imgPrintGameStore")
const linkGameStore = document.querySelector("#imgLinkGameStore")


function exibirProjetoSuperman(){
    
    printSuperman.classList.toggle("imgPrintSuperman")
    printSuperman.classList.toggle("imgPrintSupermanExibir")  
    linkSuperman.classList.toggle("imgLinkSuperman")
    linkSuperman.classList.toggle("imgLinkSupermanExibir")
}

function exibirProjetoHospedagem(){

    printHospedagem.classList.toggle("imgPrintHospedagem")
    printHospedagem.classList.toggle("imgPrintHospedagemExibir")  
    linkHospedagem.classList.toggle("imgLinkHospedagem")
    linkHospedagem.classList.toggle("imgLinkHospedagemExibir")
}

function exibirProjetoImobiliaria(){

    printImobiliaria.classList.toggle("imgPrintImobiliaria")
    printImobiliaria.classList.toggle("imgPrintImobiliariaExibir")  
    linkImobiliaria.classList.toggle("imgLinkImobiliaria")
    linkImobiliaria.classList.toggle("imgLinkImobiliariaExibir")
}

function exibirProjetoDoutor(){

    printDoutor.classList.toggle("imgPrintDoutor")
    printDoutor.classList.toggle("imgPrintDoutorExibir")  
    linkDoutor.classList.toggle("imgLinkDoutor")
    linkDoutor.classList.toggle("imgLinkDoutorExibir")
}

function exibirProjetoAdvocacia(){

    printAdvocacia.classList.toggle("imgPrintAdvocacia")
    printAdvocacia.classList.toggle("imgPrintAdvocaciaExibir")  
    linkAdvocacia.classList.toggle("imgLinkAdvocacia")
    linkAdvocacia.classList.toggle("imgLinkAdvocaciaExibir")
}

function exibirProjetoGameStore(){

    printGameStore.classList.toggle("imgPrintGameStore")
    printGameStore.classList.toggle("imgPrintGameStoreExibir")  
    linkGameStore.classList.toggle("imgLinkGameStore")
    linkGameStore.classList.toggle("imgLinkGameStoreExibir")
}