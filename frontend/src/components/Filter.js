import React from "react";

const Filter = () => {
    return (
        <div class="filter">
            <span>Фильтр</span>

            <label for="filter_column">Параметр</label>
            <select name="filter_column" id="filter_column">
                <option selected value="">------</option>
                <option value="title">Название</option>
                <option value="quantity">Количество</option>
                <option value="distance">Расстояние</option>
            </select>

            <label for="filter_condition">Условие</label>
            <select name="filter_condition" id="filter_condition">
                <option selected value="">------</option>
                <option value="gt">больше чем...</option>
                <option value="lt">меньше чем...</option>
                <option value="eq">равно</option>
                <option value="contain">содержит...</option>
            </select>

            <label for="filter_value">Значение</label>
            <input type="text" name="filter_value" id="filter_value"></input>
            <button type='button' id='filter_button'>Показать</button>
        </div>
    )
};

export default Filter;