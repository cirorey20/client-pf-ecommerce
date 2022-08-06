import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categories';
import { createProduct } from '../../redux/actions/products';
import NavBar from '../NavBar/NavBar';

const initialFormState = {
    name: '',
    price: 0,
    stock: 0,
    categories: [],
    image: '',
    description: ''
};

export default function CreateProduct() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoryReducer.categories);
    const [ form, setForm ] = useState(initialFormState);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    useEffect(() => {
        const newState = {...form};
        newState.categories = categories.map(category => ({...category, checked:false}));
        setForm(newState);
    }, [categories]);


    function onChangeValue(e){
        if(!form.hasOwnProperty(e.target.name)) return;
        if(e.target.name !== 'categories') {
            (e.target.name === 'price' || e.target.name === 'stock') ? setForm({...form, [e.target.name]: Number(e.target.value)})
            : setForm({...form, [e.target.name]: e.target.value})
        } else {
            const newCategories = form?.categories?.map(category => {
                if(e.target.value === category.name)category.checked = e.target.checked;
                return category;
            });
            setForm({...form, categories: [...newCategories]})
        }
    }

    function onSubmit(e){
        e.preventDefault();
        const body = {...form};
        body.categories = body.categories.map(category => category.name)
        dispatch(createProduct(body));
        setForm(initialFormState);
    }

    return (
        <>
            <NavBar />

            <form className="w-full max-w-lg mx-auto mt-20">
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input value={form.name} name="name" onChange={onChangeValue} className="border-red-500 appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Piano" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input value={form.price} name="price" onChange={onChangeValue} className="border-red-500 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" min="0" type="number" placeholder="90210" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>



                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                            Stock
                        </label>
                        <input value={form.stock} name="stock" onChange={onChangeValue} className="border-red-500 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="stock" min="0" type="number" placeholder="25" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>




                    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Categories
                        </label>
                        <div className="w-full md:w-1/1 flex flex-wrap justify-center justify-evenly gap-4 rounded border-red-500 border-solid border p-4">
                        {/* {border-stone-300} */}

                            {
                                (form?.categories?.length > 0) ? form.categories.map(category => (
                                    <div key={category.id}>
                                        <label>
                                            <input type="checkbox" value={category.name} onChange={onChangeValue} checked={category.checked} className="mr-2 focus:ring-0 focus:ring-transparent rounded" name="categories" />
                                            {category.name}
                                        </label>
                                    </div>
                                )) :
                                <p className='text-red-500 text-xs italic'>There are no categories, please create one</p>
                            }



                        </div>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>

                    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input value={form.image} name="image" onChange={onChangeValue} className="border-red-500 appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="image" type="url" placeholder="http://example.com/ds5f5sas5d2asd5.jpg" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/1 px-3 mt-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea value={form.description} name="description" onChange={onChangeValue} className="border-red-500 appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="description" type="text" placeholder="Description of the product to create..." />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                </div>

                <button onClick={onSubmit} className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                    Create
                </button>

            </form>
        </>

    );
};


