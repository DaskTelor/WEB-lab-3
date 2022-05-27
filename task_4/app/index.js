import {api} from "./axios/api";
const buttonLoadVacancy = document.getElementById('buttonStart');
const vacancyId = document.getElementById('vacancyId');
const vacancy_amount = document.getElementById('vacancy_amount');
const vacancy = document.getElementById('list');

let list = document.createElement('div');
let innerHTML = ""


buttonLoadVacancy.onclick = function() {
    vacancy.innerHTML = "";
    innerHTML = "";
    api.getVacancy(vacancyId.value, vacancy_amount.value).then(data => {
        data.items.map(item => {
            if (item.salary)
                innerHTML += `<p><a target="_blank" href="https://hh.ru/vacancy/${item.id}">${item.name} salary: ${item.salary.from} ${item.salary.currency}</a></p>`
            else
                innerHTML += `<p><a target="_blank" href="https://hh.ru/vacancy/${item.id}">${item.name}</a></p>`
        });
        list.innerHTML = innerHTML;
        vacancy.appendChild(list);
    })
}

