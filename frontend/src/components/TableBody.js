import React from 'react';

const Item = ({ item }) => {
    return (
        <tr>
            <td>
                <span>{item.date}</span>
            </td>
            <td>
                <span>{item.title}</span>
            </td>
            <td>
                <span>{item.quantity}</span>
            </td>
            <td>
                <span>{item.distance}</span>
            </td>
        </tr>
    )
};

const ItemList = ({ items }) => {
    return (
        <table>
            <thead>
                <th>Дата</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Расстояние</th>
            </thead>
            <tbody>
                {items.map((item) => <Item item={item} />)}
            </tbody>

        </table>
    )
}

export default ItemList;