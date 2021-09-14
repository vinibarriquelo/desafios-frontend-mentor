function acordionList() {
    const titulos = document.querySelectorAll('dt')
    const descricao = document.querySelectorAll('dd')
    console.log(titulos)

    titulos[0].classList.add('ativo')
    descricao[0].classList.add('ativo-block')

    titulos.forEach((item) => {
        item.addEventListener('click',activeClass)
    })

    function activeClass(){
        titulos.forEach((item)=>{
            item.classList.remove('ativo')
        })

        descricao.forEach((item)=>{
            item.classList.remove('ativo-block')
        })

        this.classList.add('ativo')
        this.nextElementSibling.classList.add('ativo-block')
    }
}

acordionList();