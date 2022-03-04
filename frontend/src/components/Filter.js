import React from "react";

const Filter = () => {
    return (
        <div className="filter">
            <span className="filter_title">Фильтр</span>

            <label className="label" htmlFor="filter_column">Параметр</label>
            <select name="filter_column" id="filter_column" onChange={(event) => {
                let gte = document.querySelector('option[name="1"]');
                let lte = document.querySelector('option[name="2"]');
                let contains = document.querySelector('option[name="4"]');
                if (event.target.value == "1") {
                    gte.setAttribute('disabled', "true");
                    lte.setAttribute('disabled', "true");
                    contains.removeAttribute('disabled');
                } else {
                    gte.removeAttribute('disabled');
                    lte.removeAttribute('disabled');
                    contains.setAttribute('disabled', "true");
                }

            }}>
                <option selected value="0">------</option>
                <option value="1">Название</option>
                <option value="2">Количество</option>
                <option value="3">Расстояние</option>
            </select>

            <label className="label" htmlFor="filter_condition">Условие</label>
            <select name="filter_condition" id="filter_condition">
                <option selected value="0">------</option>
                <option name="1" value="1">больше чем...</option>
                <option name="2" value="2">меньше чем...</option>
                <option name="3" value="3">равно</option>
                <option name="4" value="4">содержит...</option>
            </select>

            <label className="label" htmlFor="filter_value">Значение</label>
            <input type="text" name="filter_value" id="filter_value"></input>
        </div >
    )
};

export default Filter;