/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    let res = { ...data };
    if (res.gender === 'female' && res.hasOwnProperty('age')) {
        delete res.age;
    }
    if (res.gender === 'male' && !res.hasOwnProperty('income')) {
        res.income = 100000;
    }
    return res;
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    let result = Object.keys(obj1);
    result = result.concat(Object.keys(obj2));
    result = result.concat(Object.keys(obj3));
    return result.sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(cloneFunc(obj));
        result[i].id = i;
    }
    return result;
}

function cloneFunc(obj) {
    const clObj = {};
    for (const key in obj) {
        if (obj[key] && typeof obj[key] === 'object') {
            clObj[key] = cloneFunc(obj[key]);
            continue;
        }
        clObj[key] = obj[key];
    }
    return clObj;
}
