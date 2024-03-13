import React, { useEffect, useState } from "react";
import { SearchInput } from "./SearchInput";
import { Select } from "./Select";
import CounterOfCourses from "./CounterOfCourses";
import { Card } from "./Card";
import * as SearchStyles from './stylesOfComponent/Search.styles';
import * as SelectStyles from "./stylesOfComponent/Select.styles";
import * as CardStyles from './stylesOfComponent/Card.styles';
import URLs from "../config/Urls";
import { Loader } from "./Loader";


export default function Main() {
    const [getCourses, setGetCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [circularLoader, setCircularLoader] = useState(false);
    const [counter, setCounter] = useState(0);
    const [search, setSearch] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [sortingDataForDefault, setSortingDataForDefault] = useState([]);

    const fetchList = async () => {
        try {
            setCircularLoader(true);
            let responseData;
            if (search.trim() === '') {
                const response = await fetch(URLs.URL_API);
                responseData = await response.json();
                setSortingDataForDefault(responseData);
            } else {
                const response = await fetch(`${URLs.URL_SEARCH}${search}`);
                responseData = await response.json();
            }
            setGetCourses(responseData);
            setCounter(responseData.length);
            setCircularLoader(false);
        } catch (error) {
            console.log("Error Happens while Fetching Data " + error);
        }
    };

    useEffect(() => {
        fetchList();
    }, [search]);

    useEffect(() => {
        const storedSortValue = localStorage.getItem("selectedSortValue");
        if (storedSortValue) {
            setSelectValue(storedSortValue);
        } else {
            setSelectValue('default')
        }
    }, []);

    useEffect(() => {
        const storedFilterValue = localStorage.getItem("selectedFilterValue");
        if (storedFilterValue) {
            setFilterValue(storedFilterValue);
        } else{
            setFilterValue('default');
        }
    }, []);


    useEffect(() => {
        if (selectValue !== 'default') {
            sortData();
            localStorage.setItem("selectedSortValue", selectValue);
        } else {
            
            localStorage.setItem("selectedSortValue", selectValue);
        }
    }, [selectValue, counter]);

    useEffect(() => {
        if (filterValue !== 'default') {
            filterData();
            localStorage.setItem("selectedFilterValue", filterValue);
        } else {
            setFilteredCourses(getCourses);
            localStorage.setItem("selectedFilterValue", filterValue);
            setCounter(getCourses.length);
        }
    }, [filterValue, getCourses, counter]);

    const changeHandler = (e) => {
        setSearch(()=>e.target.value);
    };

    const changeSelectHandler = (e) => {
        setSelectValue(()=>e.target.value);
    };

    const changeFilterHandler = (e) => {
        setFilterValue(()=>e.target.value);
    };

    const sortData = () => {
        let sortedData;
        if (selectValue === 'topic') {
            sortedData = [...getCourses].sort((a, b) => a.topic.localeCompare(b.topic));
        } else if (selectValue === 'author') {
            sortedData = [...getCourses].sort((a, b) => a.name.localeCompare(b.name));
        } else {
           sortedData = sortingDataForDefault;
           
        }
        setGetCourses(sortedData);
    };

    const filterData = () => {
        let filteredData;
        if (filterValue !== 'default') {
            filteredData = getCourses.filter((ele) => ele.category === filterValue);
        } else {
            filteredData = getCourses;
        }
        setFilteredCourses(filteredData);
        setCounter(filteredData.length);
    };

    const getData = () => {
        if (!filteredCourses || filteredCourses.length === 0) {
            return null;
        }

        return filteredCourses.map((ele) => (
            <Card
                key={ele.id}
                CardId={ele.id}
                hRef={`/detailOfCourse/${ele.id}`}
                cardStyle={CardStyles.cardStyle}
                imageSrc={require(`../assets/images/${ele.image}`)}
                imageAlt={ele.topic}
                imgStyle={CardStyles.imgCardStyle}
                cardBodyStyle={CardStyles.cardBodyStyle}
                classNameOfCardBody="card-body"
                classNameOfCardTitle="card-title"
                cardTitleStyle={CardStyles.cardTitleStyle}
                titleText={ele.category}
                topicText={ele.topic}
                classNameOfCardTopic="card-topic"
                classNameOfCardFooter="card-footer"
                footerText={ele.name}
                footerTextClassName="footer-text"
                classNameOfFunction="star-rating"
                cardTopicStyle={CardStyles.cardTopicStyle}
                functionStyle={CardStyles.functionStyle}
                spanStyle={CardStyles.spanStyle}
                footerTextStyle={CardStyles.footerTextStyle}
                footerCardStyle={CardStyles.footerCardStyle}
                rating={ele.rating}
                Img={CardStyles.ImgCard}
                A={CardStyles.AOfCard}
            />
        ));
    };

    return (
        <main style={{ backgroundColor: 'var(--bg_body)', paddingTop: '20px' }}>
            <div className="container">
                <SearchStyles.SectionSearch className="search-container" style={{ display: 'flex' }}>
                    <SearchInput
                        classNameOfContainer='search-input'
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

                    <SelectStyles.DivSelectContainer className="select-container" style={{ width: '30%', display: 'flex', flexDirection: 'row' }} >
                        <Select
                            classNameOfSelectContainer='sort'
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
                            classNameOfSelectContainer='filter'
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
                    <section className="cards-container card-container-main-page"
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
