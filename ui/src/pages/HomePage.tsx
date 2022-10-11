import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import getData from '../functions/getData';
import Category from '../interfaces/category';
import Product from '../interfaces/product';

const HomePage: React.FC = (() => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const [category, setCategory] = useState<number>();
    const [products, setProducts] = useState<Product[]>([]);

    const [size, setSize] = useState<number>(25);

    useEffect(() => {
        if(!cookies.get('token')) {
            navigate('/login');
        }
    }, [])

    useEffect(() => {
        getData({url:"/api/category/list/"}).then((response) => {
                setCategories(response);
            }
        );
    }, [])

    useEffect(() => {
        let url = "/api/product/list/";
        url += "?size=" + size;
        if(category) {
            url += "&category=" + category;
        }
        getData({url:url}).then((response) => {
                setProducts(response);
            }
        );
    }, [category])

    const changeCategory = ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const div = event.currentTarget as HTMLDivElement;
        const id = div.id.split("-")[1];
        setCategory(Number(id));
    });

    const category_style = "align-top white-space-normal inline-block block h-20 w-20 mt-2 mx-4 m-auto border";
    const product_style = "align-top white-space-normal inline-block block h-40 w-40 mt-5 mx-5 m-auto border";

    return (
        <div>
            <NavBar/>
            <div className="scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 whitespace-nowrap mt-16 h-[6.7rem] border border-gray-500 mx-auto w-[77rem]  overflow-x-auto overflow-y-hidden">
                {categories.map((object: Category) => {
                    return (
                        <div className={category_style} id={"category-"+object.id} onClick={changeCategory}>
                            <img src={object.svg_url} className="mx-auto mt-1 w-12 h-12"/>
                            <div className="text-center text-xs mt-1">{object.name}</div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-12 h-[77rem] w-[77rem] mx-auto border border-gray-500 mx-40 mb-12">
                <div className="ml-3">
                    {products.map((object: Product) => {
                        let name = object.name;
                        if(name.length > 18) {
                            console.log("xxx");
                            name = name.slice(0, 15);
                            name += "...";
                        }
                        let price = String(object.price);
                        if(price.length > 18) {
                            price = price.slice(0, 10);
                            price += "...";
                        }
                        return (
                            <div className={product_style} id={"product-"+object.id}>
                                <img src={object.image_url} className="mx-auto mt-2 w-24 h-24"/>
                                <div className="text-center text-md mt-1">{name}</div>
                                <div className="text-center text-xs mt-1">Price: {price} zł</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
});

export default HomePage;