import React, { useEffect, useState } from "react";
import { SearchInput } from "../components/SearchInput";
import { Select } from "../components/Select";
import CounterOfCourses from "../components/CounterOfCourses";
import { Card } from "../components/Card";
import * as HomeStyles from "../components/stylesOfComponent/Home.styles";
import URLs from "../config/Urls";
import { Loader } from "../components/Loader";
import { fetchCourses } from "../config/FetchingFunction/GetCourses";
import { searchFetch } from "../config/FetchingFunction/SearchFetch";
import { filterFunction } from "../components/GlobalFunction/FilterFunction";

export default function Home() {
    const [getCourses, setGetCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [circularLoader, setCircularLoader] = useState(false);
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const coursesURL = URLs.URL_API;
    const searchCoursesURL = URLs.URL_SEARCH;

    useEffect(() => {
        fetchCourses({ setGetCourses, setFilteredCourses, setCircularLoader, setCounter, coursesURL });
        setSelectValue(() => 'default');
        setFilterValue(() => 'default');
    }, []);

    useEffect(() => {
        filterFunction({ selectValue, filterValue, setFilteredCourses, getCourses, setCounter });
    }, [selectValue, filterValue]);

    useEffect(() => {
        const handleSearch = () => {
            if (search.trim() !== '') {
                searchFetch({ searchCoursesURL, search, setCounter, filterValue, selectValue, setFilteredCourses, getCourses });
            } else {
                setFilteredCourses(getCourses);
                setCounter(getCourses.length);
            }
        };

        const debounce = setTimeout(handleSearch, 300);
        return () => clearTimeout(debounce);
    }, [search, getCourses]);


    const changeHandler = (e) => {
        setSearch(() => e.target.value);
    };

    const changeSelectHandler = (e) => {
        setSelectValue(() => e.target.value);
    };

    const changeFilterHandler = (e) => {
        setFilterValue(() => e.target.value);
    };



    const getData = () => {
        return filteredCourses.map((ele) => (
            <Card
                key={ele.id}
                CardId={ele.id}
                hRef={`/detailOfCourse/${ele.id}`}
                imageSrc={require(`../assets/images/${ele.image}`)}
                imageAlt={ele.topic}
                titleText={ele.category}
                topicText={ele.topic}
                footerText={ele.name}
                rating={ele.rating}
            />
        ));
    };

    return (
        <main style={{ backgroundColor: 'var(--bg_body)', paddingTop: '20px' }}>
            <div className="container">
                <HomeStyles.SectionSearch style={{ display: 'flex' }}>
                    <SearchInput
                        typeOfInput='search'
                        placeHolder='Search the website'
                        iconName='search-outline'
                        change={changeHandler}
                    />

                    <HomeStyles.DivSelectContainer style={{ width: '30%', display: 'flex', flexDirection: 'row' }} >
                        <Select
                            selectName="sort"
                            options={[
                                { value: "default", text: 'default' },
                                { value: "topic", text: 'Topic' },
                                { value: "author", text: 'Author' },
                            ]}
                            change={changeSelectHandler}
                        />
                        <Select
                            selectName="filter"
                            options={[
                                { value: "default", text: 'default' },
                                { value: "Web Development Languages", text: 'Web Development Languages' },
                                { value: "Frontend Frameworks and Libraries", text: 'Frontend Frameworks and Libraries' },
                                { value: "Backend Frameworks and Libraries", text: 'Backend Frameworks and Libraries' },
                                { value: "Databases and APIs", text: 'Databases and APIs' },
                                { value: "Web Development Concepts and Technologies", text: 'Web Development Concepts and Technologies' },
                            ]}
                            change={changeFilterHandler}
                        />
                    </HomeStyles.DivSelectContainer>
                </HomeStyles.SectionSearch>

                <CounterOfCourses counter={counter} />

                {circularLoader ? <Loader /> :
                    <section
                        style={{
                            display: 'grid',
                            gridTemplateColumns: " repeat(auto-fill,minmax(230px, 1fr))",
                            gridGap: '20px'
                        }} >
                        {getData()}
                    </section>
                }
            </div>
        </main>
    );
}
