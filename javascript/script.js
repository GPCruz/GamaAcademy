const baseURL = 'https://api.chucknorris.io/jokes/'

const body = document.querySelector('#body')


axios.get( baseURL + 'random').then(
    res => {
        console.log(res.data)
        
        const FirstCard = `
                            <div class="card m-4" style="width: 18rem;">
                                <img src="${res.data.icon_url}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <p class="card-text">${res.data.value}</p>
                                </div>
                            </div>
        `
    }
)


const MainDefault = `<li class="nav-item">
                        <a href=""> </a>
                    </li>`

const MainCard = `<div class="card m-4" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                </div>`