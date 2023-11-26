//ДЗ 1 задание
const arr = [3, 5, 9, 10, 1]
//console.log(arr.filter(item => item <= 5))
const itemEl = document.createElement('p')
itemEl.textContent = `Элементы <=5 : (${arr.filter(item => item <= 5)})`
app.append(itemEl)

//ДЗ 2 задание
const user = {
    name: "Alex",
    age: 30,
    email: "alexey@example.com",
    address: {
        city: "New York",
        zip: "10001"
    }
}

const { name } = user
const { city } = user.address
//console.log(city)

const userInfo = { name, city }
//console.log(userInfo)

const userInfEl = document.createElement('p')
userInfEl.textContent = `name: ${userInfo.name}, city: ${userInfo.city}`
app.append(userInfEl)

