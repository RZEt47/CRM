

class ExampleItem {
    constructor(name, phone, email, product) {
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }

}

const testData = [
    new ExampleItem('Роман Алексеев', parseInt(+79324567465), 'info@mail.ru', 'course-html'),
    new ExampleItem('Антон Макеев', parseInt(+79368597465), 'press@mail.ru', 'course-js'),
    new ExampleItem('Анна Петрова', parseInt(+73124567465), 'legeng@mail.ru', 'course-vue'),
    new ExampleItem('Ольга Ищенко', parseInt(+79123467465), 'stend@mail.ru', 'course-php'),
    new ExampleItem('Кирилл Алексеев', parseInt(+71234567465), 'clean@mail.ru', 'course-wordpress'),
    new ExampleItem('Антон Иванов', parseInt(+71234567465), 'clean@mail.ru', 'course-wordpress'),
    new ExampleItem('Екатерина Бахман', parseInt(+71234567465), 'clean@mail.ru', 'course-wordpress'),
    new ExampleItem('Владислав Лиманский', parseInt(+71234567465), 'clean@mail.ru', 'course-wordpress'),
    new ExampleItem('Владимир Прутский', parseInt(+71234567465), 'clean@mail.ru', 'course-wordpress')
]


export default function getRandomData() {
    const index = Math.floor(Math.random() * testData.length)
    return (testData[index]);
}