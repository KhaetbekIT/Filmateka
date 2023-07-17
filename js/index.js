console.clear()

const formContainer = document.querySelector("#form-js")

const inputTitle = formContainer.querySelector("#input-title-js")

const inputGenre = formContainer.querySelector("#input-genre-js")

const inputYear = formContainer.querySelector("#input-year-js")

const buttonAdd = formContainer.querySelector("#add-js")

const container = document.querySelector("#film-js")

const message = formContainer.querySelector("#message-js")

const film = {
    title: null,
    genre: null,
    year: 0
}

const CheckInputs = () => {
    if (
        inputTitle.value === "" ||
        inputGenre.value === "" ||
        inputYear.value === ""
    ) {
        buttonAdd.disabled = true
    } else {
        buttonAdd.disabled = false
    }
}

CheckInputs()

const CheckInput = () => {
    if(inputTitle.value === ""){
        message.innerHTML = `<p class="error">Название фильма не должен быть пустым</p>`
    }else if(inputGenre.value === ""){
        message.innerHTML = `<p class="error">Жанр не должен быть пустым</p>`
    }else if(inputYear.value === ""){
        message.innerHTML = `<p class="error">Год не должен быть пустым</p>`
    }else{
        message.innerHTML = ""
    }
}



inputTitle.addEventListener("keyup", () => {
    CheckInputs()
    CheckInput()

    film.title = inputTitle.value
})

inputGenre.addEventListener("keyup", () => {
    CheckInputs()
    CheckInput()

    film.genre = inputGenre.value
})

inputYear.addEventListener("keyup", () => {
    CheckInputs()
    CheckInput()

    film.year = inputYear.value
})

buttonAdd.addEventListener("click", () => {
    CheckInput()

    container.insertAdjacentHTML("beforeend", `
        <div class="card mb-20">
            <h4 class="title-4"> ${film.title} </h4>
            <div class="badge"> ${film.genre} </div>
            <div class="badge"> ${film.year} </div>
        </div>
    `)

    inputTitle.value = ""
    inputGenre.value = ""
    inputYear.value = ""

})