function acordionList() {
    const titulos = document.querySelectorAll('dt')
    console.log(titulos)

    titulos.forEach((item) => {
        item.addEventListener('click',activeClass)
    })

    function activeClass(){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }
}

acordionList();