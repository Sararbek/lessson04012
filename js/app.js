const futballPlayers = [
    {fullName: 'Sherrali To`raqulov', age: 36, country: 'Uzbekistan', salary: '$250'},
    {fullName: 'Cristiano Ronaldo', age: 40, country: 'Portugal', salary: '$19.9m'},
    {fullName: 'Asadbek Xayrullayev', age: 27, country: 'Tojikistan', salary: '$120'},
    {fullName: 'Erling Haaland', age: 23, country: 'Norway', salary: '$12m'},
    {fullName: 'Kevin De Bruyne', age: 32, country: 'Belgium', salary: '$3m'},
    {fullName: 'Mohamed Salah', age: 31, country: 'Egypt', salary: '$12m'},
    {fullName: 'Neymar Jr.', age: 32, country: 'Brazil', salary: '$13m'},
    {fullName: 'Xayrulla Trusunov', age: 38, country: 'Uzbekistan', salary: '$210'},
    {fullName: 'Virgil van Dijk', age: 32, country: 'Netherlands', salary: '$8m'},
    {fullName: 'Marc-André ter Stegen', age: 31, country: 'Germany', salary: '$2m'},
    {fullName: 'Luka Modrić', age: 38, country: 'Croatia', salary: '$9m'},
]

const generateBtn = document.querySelector('.generateBtn')
const tbodyEl = document.querySelector('.tbody')

generateBtn.addEventListener('click', ()=> {
    let randomindex = Math.floor(Math.random() * futballPlayers.length)
    const trEl = document.createElement('tr')
    trEl.innerHTML = `
    <td>${futballPlayers[randomindex].fullName}</td>
    <td>${futballPlayers[randomindex].age}</td>
    <td>${futballPlayers[randomindex].country}</td>
    <td>${futballPlayers[randomindex].salary}</td>
    `

    tbodyEl.appendChild(trEl)
})