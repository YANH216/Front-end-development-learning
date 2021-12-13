// import 'css-loader!../css/login.css' 行内css-loader
import '../css/login.scss'

function login() {
    const oH2 = document.createElement('div')
    oH2.innerHTML = 'webpack上手'
    oH2.className = 'title'
    return oH2
}

document.body.appendChild(login())