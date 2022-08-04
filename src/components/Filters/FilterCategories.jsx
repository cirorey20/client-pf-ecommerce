import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
    {
        id: '123456-1234-1234-1234-123456789011',
        name: 'cat1',
        image: 'image.com',
        checked: false

    },
    {
        id: '123456-1234-1234-1234-123456789012',
        name: 'cat2',
        image: 'image.com',
        checked: false
    },
    {
        id: '123456-1234-1234-1234-123456789013',
        name: 'cat3',
        image: 'image.com',
        checked: false

    },
    {
        id: '123456-1234-1234-1234-123456789014',
        name: 'cat4',
        image: 'image.com',
        checked: false

    },
    {
        id: '123456-1234-1234-1234-123456789015',
        name: 'cat5',
        image: 'image.com',
        checked: false

    }
]
export default function FilterCategory() {
    const [checksCategory, setChecksCategory] = useState(categories);
    const { search } = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        const urlSearchParams = new URLSearchParams(search);
        const arrayCategories = urlSearchParams.getAll('categories');
        const newState = checksCategory.map(category => {
            if(arrayCategories.includes(category.name)) category.checked = true;
            return Object.assign(category);
        });

        console.log(newState)
        setChecksCategory(newState);

    },[]);


    function onChangeCheck(id){
        let newState = checksCategory.map(category => Object.assign(category));
        for(let category of newState){
            if(category.id === id){
                category.checked = !category.checked;
            }
        }
        setChecksCategory(newState);
    }

    function onClickFilter() {
        const joinCategories = checksCategory.reduce((prev, curr)=> {
            if(curr.checked) return (prev.length === '') ? `categories=${curr.name}` : `${prev}&categories=${curr.name}`
            return prev;
        },'');

        const oldUrl = search.split('&').filter(v => !v.includes('categories')).join('&');
        console.log(oldUrl)

        const url = (search.length === 0 ) ? `?${joinCategories}` : `${search}&${joinCategories}`;
        // console.log(url)
        navigate(url);
    }

    return (
        <div>

            {
                checksCategory.map(category => {

                    return (
                                <div key={category.id}>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${category.id}`}
                                        name={category.name}
                                        value={category.id}
                                        checked={categories.checked}
                                    onChange={() => onChangeCheck(category.id)}
                                    />
                                    <label htmlFor={`custom-checkbox-${category.id}`}>{category.name}</label>
                                </div>
                    );

                })
            }

<button type="button" onClick={onClickFilter} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Filter</button>

        </div>
    );
};


