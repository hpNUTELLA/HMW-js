
var confirmed = confirm('Sayohat qilmoqchimisiz')
console.log(confirmed)
var name = confirm('ismingiz')
alert(name + 'Assalomu aleykum xush kelibsiz')
if(confirmed) {
    var money = prompt('Mablagingizni kiriting ')
    if ( money >= 2000) {
        alert('siz bu mablag bilan dubailga borolisiz')
    }

    else if ( money >= 1000) {
        alert('siz bu mablag bilan dubailga borolisiz')
    }

    else if ( money >= 500) {
        alert('siz bu mablag bilan Indiaga borolisiz')
    }

    else if ( money >= 100) {
        alert('siz bu mablag bilantoshken borolisiz')
    }
}