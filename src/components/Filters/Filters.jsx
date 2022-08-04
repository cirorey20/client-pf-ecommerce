import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const initialSort = 'CHOOSE A OPTION';

export default function Filters() {
    const [priceSort, setPriceSort] = useState(initialSort);
    const [nameSort, setNameSort] = useState(initialSort);
    const navigate = useNavigate();

    const { search } = useLocation();


    function onChangedSelect(e) {
        let url = (search[0] === '?') ? search.slice(1) : search;
        let chunckUrl = url.split('&');

        chunckUrl = chunckUrl.filter(v => !(v.includes('priceSort') || v.includes('nameSort')))

        if (e.target.value !== 'CHOOSE A OPTION') {

            if (e.target.name === 'selectPriceSort') {
                setPriceSort(e.target.value);
                setNameSort(initialSort);
                chunckUrl.push(`priceSort=${e.target.value}`)
            }

            if (e.target.name === 'selectNameSort') {
                setNameSort(e.target.value);
                setPriceSort(initialSort);
                // chunckUrl.filter(v => !v.includes('nameSort'))
                chunckUrl.push(`nameSort=${e.target.value}`)

            }
        } else {
            setPriceSort(initialSort);
            setPriceSort(initialSort);
        }



        url = chunckUrl.join('&');
        url = (url[0] === '&') ? `?${url.slice(1)}` : `?${url}`;

        console.log(url)
        navigate(url, { replace: false })

    }

    return (
        <div>
            <select name="selectPriceSort" value={priceSort} onChange={onChangedSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >CHOOSE A OPTION</option>
                <option value="ASC">Price A-Z</option>
                <option value="DESC">Price Z-A</option>
            </select>

            <select form="filter" name="selectNameSort" value={nameSort} onChange={onChangedSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >CHOOSE A OPTION</option>
                <option value="ASC">Product A-Z</option>
                <option value="DESC">Product Z-A</option>
            </select>
        </div>
    );
}