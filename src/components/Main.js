import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { Select } from "./Select";
import CounterOfCourses from "./CounterOfCourses";
import { Card } from "./Card";
import * as SearchStyles from './stylesOfComponent/Search.styles';
import * as SelectStyles from "./stylesOfComponent/Select.styles";
import URLs from "../config/Urls";
import { Loader } from "./Loader";
import { fetchCourses } from "../config/FetchingFunction/GetCourses";
import { searchFetch } from "../config/FetchingFunction/SearchFetch";
import { filterFunction } from "./GlobalFunction/FilterFunction";

export default function Main() {
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
        if (search.trim() === '') {
            fetchCourses({ coursesURL, setGetCourses, setCircularLoader, setCounter, setFilteredCourses });
            setSelectValue(() => 'default');
            setFilterValue(() => 'default');
        }

        if (search.trim() !== '') {
            const timeoutId = setTimeout(() => {
                searchFetch({searchCoursesURL,search, setCounter, setFilteredCourses, selectValue, filterValue});
            }, 300);
            return () => clearTimeout(timeoutId);
        }
    }, [search]);

    const changeHandler = (e) => {
        setSearch(() => e.target.value);
    };

    const changeSelectHandler = (e) => {
        setSelectValue(() => e.target.value);
    };

    const changeFilterHandler = (e) => {
        setFilterValue(() => e.target.value);
    };

    useEffect(() => {
        filterFunction({selectValue, filterValue, setFilteredCourses, getCourses, setCounter });
    }, [selectValue,filterValue]);



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
                <SearchStyles.SectionSearch style={{ display: 'flex' }}>
                    <SearchInput
                        styleOfContainer={SearchStyles.styleOfSearchContainer}
                        typeOfInput='search'
                        placeHolder='Search the website'
                        iconName='search-outline'
                        styleOfIcon={SearchStyles.searchIconStyle}
                        searchInputStyle={SearchStyles.searchInputStyle}
                        Div={SearchStyles.DivSearch}
                        Input={SearchStyles.InputSearch}
                        change={changeHandler}
                    />

                    <SelectStyles.DivSelectContainer style={{ width: '30%', display: 'flex', flexDirection: 'row' }} >
                        <Select
                            styleOfSelectContainer={SelectStyles.styleOfSortSelectContainer}
                            iconNameOfSelect='chevron-down-outline'
                            iconStyle={SelectStyles.iconOfSelectStyle}
                            labelStyle={SelectStyles.labelSelectStyle}
                            labelFor="sort"
                            labelId="sort-label"
                            labelText="Sort by:"
                            selectName="sort"
                            selectId="sort"
                            value={selectValue}
                            options={[
                                { value: "default", text: 'default' },
                                { value: "topic", text: 'Topic' },
                                { value: "author", text: 'Author' },
                            ]}
                            selectStyle={SelectStyles.selectStyle}
                            Select={SelectStyles.SelectSort}
                            change={changeSelectHandler}
                        />
                        <Select
                            styleOfSelectContainer={SelectStyles.styleOfSortSelectContainer}
                            iconNameOfSelect='chevron-down-outline'
                            iconStyle={SelectStyles.iconOfSelectStyle}
                            labelStyle={SelectStyles.labelSelectStyle}
                            labelFor="filter"
                            labelId="filter-label"
                            labelText="Filter by:"
                            selectName="filter"
                            selectId="filter"
                            value={filterValue}
                            options={[
                                { value: "default", text: 'default' },
                                { value: "Web Development Languages", text: 'Web Development Languages' },
                                { value: "Frontend Frameworks and Libraries", text: 'Frontend Frameworks and Libraries' },
                                { value: "Backend Frameworks and Libraries", text: 'Backend Frameworks and Libraries' },
                                { value: "Databases and APIs", text: 'Databases and APIs' },
                                { value: "Web Development Concepts and Technologies", text: 'Web Development Concepts and Technologies' },
                            ]}
                            selectStyle={SelectStyles.styleOfFilter}
                            Select={SelectStyles.SelectFilter}
                            change={changeFilterHandler}
                        />
                    </SelectStyles.DivSelectContainer>
                </SearchStyles.SectionSearch>

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
