import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { InputText } from 'primereact/inputtext'
import { Accordion, AccordionTab } from 'primereact/accordion';
import AccordionBody from '../components/AccordionBody';
import axios from 'axios'
import Grievance from '../components/Greivance';
import SearchResult from '../components/SearchResult';

const Admin = () => {
    const [issues, setIssues] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searching, setSearching] = useState(false)
    const [searchVal, setSearchVal] = useState("")
    const fetchData = async () => {
        try {
            let { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/Grievances`)
            console.log(data)
            setIssues(data)
        } catch (err) {
            console.log(err.message)
        }

    }
    const handleChange = (e) => {
        setSearchVal(e.target.value)
        searchVal.length >= 2 ? setSearching(true) : setSearching(false)
        let temp = []
        issues.forEach(issue => {
            let title = issue?.title?.toLowerCase().includes(searchVal.toLowerCase())
            let from = issue?.complainant?.toLowerCase().includes(searchVal.toLowerCase())
            if (title || from) {
                temp.push(issue)
            }
        })

        setSearchResults(temp)
    }
    const handleBlur = ()=>{
        setTimeout(() => {
            setSearching(false)
        }, 1000);
    }
    useEffect(() => {
        fetchData()
    }, [])
    let pendingIssues = issues.filter(i => i.resolved === false)
    let resolvedIssues = issues.filter(i => i.resolved === true)
    return (
        <>
            <Navbar />
            <section className='flex flex-col max-w-3xl mx-6 md:mx-auto gap-8'>
                {/* Search Box */}
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={searchVal} onBlur={handleBlur} className='' placeholder='Search grievances' icon="pi pi-search" onChange={handleChange} />
                </span>

                {
                    searching ? <SearchResult results={searchResults} /> :
                        <>
                            {/*  ------------ Pending Grievances ------------  */}
                            <Grievance issues={pendingIssues} title="Pending" />
                            {/*  ------------ Resolved Grievances ------------  */}
                            <Grievance issues={resolvedIssues} title="Resolved" />
                        </>
                }




            </section>
        </>
    )
}

export default Admin
